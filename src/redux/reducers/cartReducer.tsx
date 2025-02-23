import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addToCart, removeFromCart} from '../actions/cartAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty?: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const saveCartToStorage = async (cartItems: CartItem[]) => {
  try {
    await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    Toast.show({
      type: 'success',
      text1: 'Cart Updated',
      text2: 'successfully insert to shopping cart!',
    });
  } catch (error) {
    console.error('Failed to save cart:', error);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Failed to save cart!',
    });
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQty: (state, action: PayloadAction<{id: number; qty: number}>) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        if (action.payload.qty > 0) {
          state.items[itemIndex].qty = action.payload.qty;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addToCart, (state, action: PayloadAction<CartItem>) => {
        const existingItem = state.items.find(
          item => item.id === action.payload.id,
        );
        if (existingItem) {
          existingItem.qty = (existingItem.qty || 0) + 1;
        } else {
          state.items.push({...action.payload, qty: 1});
        }
        saveCartToStorage(state.items);
      })
      .addCase(removeFromCart, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
        saveCartToStorage(state.items);
      });
  },
});
export const {updateQty} = cartSlice.actions;
export default cartSlice.reducer;
