"use client";

import { addCard, filterByStatus, filterByType } from "lib/features/cardsSlice";
import { useAppDispatch } from "lib/hooks";
import { generateRandomFourDigits } from "utils/generateRandomFourDigits";
import { RiFilterFill } from "react-icons/ri";
import { useState } from "react";

export default function CardsActions() {
  const [selectedType, setSelectedType] = useState<
    "all" | "physical" | "virtual"
  >("all");

  const dispatch = useAppDispatch();
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(filterByStatus(value === "all" ? null : value));
  };
  const handleTypeChange = (type: "all" | "physical" | "virtual") => {
    setSelectedType(type);
    dispatch(filterByType(type));
  };
  return (
    <section className="container p-2 flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center">
      <button
        className="bg-neutral-200 rounded px-3 py-1 text-slate-800 text-lg font-semibold"
        type="button"
        onClick={() =>
          dispatch(
            addCard({
              id: `${Date.now()}`,
              last_four: generateRandomFourDigits(),
              is_physical: true,
              status: "active",
            })
          )
        }
      >
        Add Card
      </button>
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 items-center">
        <div className="flex justify-around items-center">
          <RiFilterFill className="text-white text-2xl mr-2" />
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="terminated">Terminated</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2 xs:flex-row xs:space-y-0 items-center xs:space-x-2">
          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="cardType"
              value="all"
              checked={selectedType === "all"}
              onChange={() => handleTypeChange("all")}
              className="hidden peer"
            />
            <span className="w-4 h-4 rounded-full border-2 border-neutral-300 peer-checked:border-blue-500 peer-checked:bg-blue-500"></span>
            <span className="text-white">All Cards</span>
          </label>

          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="cardType"
              value="physical"
              checked={selectedType === "physical"}
              onChange={() => handleTypeChange("physical")}
              className="hidden peer"
            />
            <span className="w-4 h-4 rounded-full border-2 border-neutral-300 peer-checked:border-green-500 peer-checked:bg-green-500"></span>
            <span className="text-white">Physical</span>
          </label>

          <label className="flex items-center space-x-1 cursor-pointer">
            <input
              type="radio"
              name="cardType"
              value="virtual"
              checked={selectedType === "virtual"}
              onChange={() => handleTypeChange("virtual")}
              className="hidden peer"
            />
            <span className="w-4 h-4 rounded-full border-2 border-neutral-300 peer-checked:border-purple-500 peer-checked:bg-purple-500"></span>
            <span className="text-white">Virtual</span>
          </label>
        </div>
      </div>
    </section>
  );
}
