import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        searchResults: (state, action) => {
             state = Object.assign(state, action.payload);
             return state;
          },
    }
});

export const {searchResults} = searchSlice.actions;
export default searchSlice.reducer;