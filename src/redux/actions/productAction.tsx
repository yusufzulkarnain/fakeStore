import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getAllProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    // console.log(JSON.stringify(response.data));
    return response.data;
  },
);

export const getCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories',
    );
    // console.log(JSON.stringify(response.data));
    return response.data;
  },
);

export const getProductDetail = createAsyncThunk(
  'products/fetchProductDetail',
  async (id: number) => {
    console.log(id);
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  },
);
