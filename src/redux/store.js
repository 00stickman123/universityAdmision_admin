import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from './slice/productSlice';
import cartSlice from './slice/cartSlice';
import authReducer from './slice/auth';
import messageReducer from './slice/message';

// Combine the reducers from both configurations
const rootReducer = combineReducers({
  product: persistReducer({ key: 'product', storage }, productSlice),
  cart: cartSlice,
  auth: authReducer,
  message: messageReducer
});

// Configure the store with the combined rootReducer
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});

export default store;
