import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayloadType {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  hasPrime: boolean;
}

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state: any, action: PayloadAction<PayloadType>) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addItemToBasket } = basketSlice.actions;
export const selectItems = (state: any) => state.basket.items;

export default basketSlice.reducer;
