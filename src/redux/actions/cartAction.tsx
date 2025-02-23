import {createAction} from '@reduxjs/toolkit';

export const addToCart = createAction<{
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}>('cart/addToCart');

export const removeFromCart = createAction<number>('cart/removeFromCart');
