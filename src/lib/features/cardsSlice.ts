import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cards } from "utils/cardsArray";
import type { Card } from "types";

const initialState: {
  cardsArray: Card[];
  filterStatus: string | null;
  filterType: "all" | "physical" | "virtual";
} = {
  cardsArray: cards,
  filterStatus: null,
  filterType: "all",
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action: PayloadAction<Card[]>) {
      state.cardsArray = action.payload;
    },
    updateCard(state, action: PayloadAction<{ id: string; status: string }>) {
      const card = state.cardsArray.find(
        (card) => card.id === action.payload.id
      );
      if (card) {
        card.status = action.payload.status;
      }
    },
    toggleCardType(
      state,
      action: PayloadAction<{ id: string; isPhysical: boolean }>
    ) {
      const card = state.cardsArray.find(
        (card) => card.id === action.payload.id
      );
      if (card) {
        card.is_physical = action.payload.isPhysical;
      }
    },
    addCard(state, action: PayloadAction<Card>) {
      state.cardsArray.push(action.payload);
    },
    filterByStatus(state, action: PayloadAction<string | null>) {
      state.filterStatus = action.payload;
    },
    filterByType(state, action: PayloadAction<"all" | "physical" | "virtual">) {
      state.filterType = action.payload;
    },
    removeCard(state, action: PayloadAction<string>) {
      state.cardsArray = state.cardsArray.filter(
        (card) => card.id !== action.payload
      );
    },
  },
});

export const {
  setCards,
  updateCard,
  toggleCardType,
  addCard,
  filterByStatus,
  filterByType,
  removeCard,
} = cardsSlice.actions;

export default cardsSlice.reducer;
