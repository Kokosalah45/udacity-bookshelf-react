import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { search } from "../../BooksAPI";

const initialState = {
  loading: false,
  searchResults: [],
  errors: [],
};

export const getSearchResults = createAsyncThunk(
  "search/getSearchResults",
  async (searchTerm, thunkApi) => {
    return search(searchTerm);
  }
);
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearAll: (state, action) => {
      state.searchResults = [];
    },
  },
  extraReducers: {
    [getSearchResults.pending]: (state, action) => {
      state.loading = true;
    },
    [getSearchResults.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
      state.loading = false;
    },
    [getSearchResults.rejected]: (state, action) => {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});
const {
  actions: { clearAll },
  reducer,
} = searchSlice;

export default reducer;
export { clearAll };
