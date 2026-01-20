import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setloading: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearResuls: (state) => {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setloading,
  setResults,
  setError,
  clearResuls,
} = search.actions;
export default search.reducer;
