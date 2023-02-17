import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filterSlice = createSlice({
  name: 'filtres',
  initialState: filtersInitialState,
  reducers: {
    searchContact: (_, action) => action.payload,
  },
});

export const { searchContact } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
