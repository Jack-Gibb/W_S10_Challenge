import { createSlice } from '@reduxjs/toolkit';

const initialOrderState = [];
const initialFilterState = 'All';
const initialFormState = {
  fullName: '',
  size: '',
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState: initialOrderState,
  reducers: {
    setOrders: (state, action) => action.payload,
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    setFilter: (state, action) => action.payload,
  },
});

const formSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: {
    setFormState: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormState: () => initialFormState,
  },
});

export const { setOrders } = orderSlice.actions;
export const { setFilter } = filterSlice.actions;
export const { setFormState, resetFormState } = formSlice.actions;

export const orderReducer = orderSlice.reducer;
export const filterReducer = filterSlice.reducer;
export const formReducer = formSlice.reducer;
