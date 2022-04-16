import { configureStore } from '@reduxjs/toolkit';
import homeImageReducer from './homeImageSlice'
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
   homeImage: homeImageReducer,
   menu:menuReducer,
  },
});
 
export default store;
