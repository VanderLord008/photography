import { createSlice } from "@reduxjs/toolkit";

export const homeImageSlice = createSlice({
  name: "homeImage",
  initialState: {
    imageURLs : [],
    selectedImage:null,
    currentImageNumber:0,
  },
  reducers: {
    setImageURLs: (state, action) => {
      state.imageURLs = [...state.imageURLs,action.payload];
    },
    setSelectedImage: (state, action) => {
      state.selectedImage = action.payload;
    },
    setCurrentImageNumber: (state, action) => {
      state.currentImageNumber = action.payload;
    },

  }, 
});

export const homeImageActions = homeImageSlice.actions;
export default homeImageSlice.reducer;
