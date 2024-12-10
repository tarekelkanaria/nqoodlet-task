"use client";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import {
  removeCard,
  toggleCardType,
  updateCard,
} from "lib/features/cardsSlice";
import { selectFilteredCards } from "lib/features/selectors";

import { MdLockOutline } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import PhysicalCard from "assets/physicalCard.png";
import VirtualCard from "assets/virtualCard.png";
import Prepaid from "assets/prepaidBankLogo.png";
import MasterCard from "assets/mastercardLogo.png";

export default function CardsList() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectFilteredCards);
  return cards.length > 0 ? (
    cards.map((card) => (
      <article
        key={card.id}
        className="group p-1 bg-slate-400 rounded-lg relative cursor-pointer"
      >
        <div
          className={`relative ${
            card.status === "active"
              ? "brightness-100"
              : card.status === "inactive"
              ? "grayscale"
              : card.status === "terminated"
              ? "blur-xs"
              : "filter-none"
          }`}
        >
          <Image
            src={card.is_physical ? PhysicalCard : VirtualCard}
            alt="bank card"
            placeholder="blur"
            blurDataURL={
              card.is_physical
                ? "/assets/physicalCard.png"
                : "/assets/virtualCard.png"
            }
          />
          <Image
            src={Prepaid}
            alt="prepaid card bank logo"
            placeholder="blur"
            blurDataURL="/assets/prepaidBankLogo.png"
            className="absolute top-3 right-3 w-14 h-auto"
          />
          <Image
            src={MasterCard}
            alt="Master card bank logo"
            placeholder="blur"
            blurDataURL="/assets/mastercardLogo.png"
            className="absolute bottom-3 right-3"
          />

          <p
            className={`absolute left-3 bottom-3 font-bold ${
              card.is_physical ? "text-white" : "text-black"
            }`}
          >
            {card.last_four}
          </p>
        </div>
        {card.status === "terminated" && (
          <MdLockOutline className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-black" />
        )}
        <button
          type="button"
          className="absolute top-3 right-3 p-2 z-10 hidden group-hover:block hover:bg-neutral-200 rounded transition-colors duration-300"
          onClick={() => dispatch(removeCard(card.id))}
        >
          <BsFillTrashFill className="text-3xl text-red-600 " />
        </button>
        {card.status !== "terminated" && (
          <div className="flex justify-around p-2 bg-slate-400 backdrop-blur-sm w-full absolute bottom-0 left-0 opacity-0 scale-y-0 origin-bottom group-hover:opacity-100 group-hover:scale-y-100 transition-all duration-300">
            <button
              type="button"
              className="p-2 hover:bg-neutral-200 rounded transition-colors duration-300"
              onClick={() =>
                dispatch(
                  updateCard({
                    id: card.id,
                    status: card.status === "active" ? "inactive" : "active",
                  })
                )
              }
            >
              {card.status === "inactive" ? (
                <FaRegCheckCircle className="text-3xl text-green-500" />
              ) : (
                <IoIosRemoveCircleOutline className="text-3xl text-red-600" />
              )}
            </button>
            <button
              type="button"
              className="py-2 max-w-[50%] bg-neutral-200 text-slate-800 rounded"
              onClick={() =>
                dispatch(
                  toggleCardType({
                    id: card.id,
                    isPhysical: !card.is_physical,
                  })
                )
              }
            >
              {card.is_physical
                ? "Convert to virtual card"
                : "Convert to physical card"}
            </button>
          </div>
        )}
      </article>
    ))
  ) : (
    <p className="text-center text-red-600 font-bold sm:col-span-2 md:col-span-3">
      No cards available
    </p>
  );
}
