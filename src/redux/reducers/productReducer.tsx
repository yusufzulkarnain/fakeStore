import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  getAllProducts,
  getCategories,
  getProductDetail,
} from '../actions/productAction';

interface ProductState {
  items: any[];
  filteredItems: any[];
  itemsCategories: any[];
  productDetail: any | null;
  loading: boolean;
  loadingCategories: boolean;
  loadingDetail: boolean;
  error: string | null;
  errorCategories: string | null;
  errorDetail: string | null;
  searchQuery: string;
  selectedCategory: string | null;
  activeIndex: number;
  modalFilter: boolean;
}

const initialState: ProductState = {
  items: [],
  filteredItems: [],
  itemsCategories: [],
  productDetail: null,
  loading: false,
  loadingDetail: false,
  loadingCategories: true,
  error: null,
  errorDetail: null,
  errorCategories: null,
  searchQuery: '',
  selectedCategory: null,
  activeIndex: 0,
  modalFilter: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
    setModalFilter: (state, action: PayloadAction<boolean>) => {
      state.modalFilter = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
      state.filteredItems = action.payload
        ? state.items.filter(item => item.category === action.payload)
        : state.items;
    },
    resetState: state => {
      state.searchQuery = '';
      state.selectedCategory = null;
      state.activeIndex = 0;
      state.modalFilter = false;
      state.filteredItems = state.items;
      state.loadingCategories = false;
      state.loading = false;
      state.error = null;
      state.items = [];
    },
    resetStateDetail: state => {
      state.productDetail = null;
      state.errorDetail = null;
      state.loadingDetail = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, state => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching products';
      })
      .addCase(getCategories.pending, state => {
        state.loadingCategories = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loadingCategories = false;
        state.itemsCategories = action.payload || [];
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loadingCategories = false;
        state.errorCategories =
          action.error.message || 'Error fetching categories';
      })
      .addCase(getProductDetail.pending, state => {
        state.loadingDetail = true;
        state.errorDetail = null;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.productDetail = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.loadingDetail = false;
        state.errorDetail =
          action.error.message || 'Failed to fetch product detail';
      });
  },
});

export const {
  setSearchQuery,
  setActiveIndex,
  setModalFilter,
  setSelectedCategory,
  resetState,
  resetStateDetail,
} = productSlice.actions;
export default productSlice.reducer;
