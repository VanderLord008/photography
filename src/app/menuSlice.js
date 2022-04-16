import { createSlice } from "@reduxjs/toolkit";

export const menuSlice= createSlice({
  name: "menu",
  initialState: {
    menuIsVisible : false,

    searchTerm:['car'],
  },
  reducers: {
    setMenuIsVisible: (state, action) => {
      state.menuIsVisible = action.payload;
    },

    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    

  }, 
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
