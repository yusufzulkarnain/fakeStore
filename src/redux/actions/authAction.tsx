import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (body: {username: string; password: string}, {rejectWithValue}) => {
    console.log(body);
    try {
      const loginResponse = await axios.post(
        'https://fakestoreapi.com/auth/login',
        body,
      );
      const token = loginResponse.data.token;

      await AsyncStorage.setItem('token', token);
      const userResponse = await axios.get('https://fakestoreapi.com/users/1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = userResponse.data;
      await AsyncStorage.setItem('user', JSON.stringify(user));
      return {token, user};
    } catch (error: any) {
      console.log(error.response?.data?.message || 'Login failed');
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  },
);
