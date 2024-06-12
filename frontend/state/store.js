import { configureStore } from '@reduxjs/toolkit';
import { orderReducer, filterReducer, formReducer } from './slice';
import { orderApi } from './orderApi';

const exampleReducer = (state = { count: 0 }) => {
  return state;
};

export const resetStore = () => configureStore({
  reducer: {
    example: exampleReducer,
    orders: orderReducer,  
    filter: filterReducer,  
    form: formReducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(orderApi.middleware),
});

export const store = resetStore();





//import { configureStore } from '@reduxjs/toolkit';
//import { orderApi } from './orderApi';
//import { orderReducer, filterReducer, formReducer } from './slices';
//
//export const store = configureStore({
//  reducer: {
//    [orderApi.reducerPath]: orderApi.reducer,
//    orders: orderReducer,
//    filter: filterReducer,
//    form: formReducer,
//  },
//  middleware: (getDefaultMiddleware) =>
//    getDefaultMiddleware().concat(orderApi.middleware),
//});

