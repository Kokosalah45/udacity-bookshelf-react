import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAll } from "../../BooksAPI";

export const getAllBooks = createAsyncThunk("shelf/getAllBooks", async () => {
  return getAll();
});

const initialState = {
  shelfResults: [],
  loading: false,
  errors: [],
};

const shelfSlice = createSlice({
  name: "shelf",
  reducers: {},
  extraReducers: {
    [getAllBooks.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.shelfResults = action.payload;
    },
    [getAllBooks.rejected]: (state, action) => {
      state.loading = false;

      state.errors = action.payload;
    },
  },
  initialState,
});

const { reducer } = shelfSlice;
export default reducer;
