import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existing = state.items.find(i => i.name === newItem.name);
      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        // ensure cost stored consistently as string with dollar sign if not provided
        const costStr = typeof newItem.cost === 'number' ? `$${Number(newItem.cost).toFixed(2)}` : String(newItem.cost);
        state.items.push({
          ...newItem,
          cost: costStr,
          quantity: 1
        });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) {
        // if quantity <= 0 remove item
        if (quantity <= 0) {
          state.items = state.items.filter(i => i.name !== name);
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
