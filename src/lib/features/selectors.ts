import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "lib/store";

export const selectFilteredCards = createSelector(
  [
    (state: RootState) => state.cards.cardsArray,
    (state: RootState) => state.cards.filterStatus,
    (state: RootState) => state.cards.filterType,
  ],
  (cards, filterStatus, filterType) => {
    return cards.filter((card) => {
      const matchesStatus =
        !filterStatus || filterStatus === "all" || card.status === filterStatus;
      const matchesType =
        filterType === "all" ||
        (filterType === "physical" && card.is_physical) ||
        (filterType === "virtual" && !card.is_physical);
      return matchesStatus && matchesType;
    });
  }
);
