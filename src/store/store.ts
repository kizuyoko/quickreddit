import { configureStore } from '@reduxjs/toolkit';
import redditReducer from './redditSlice';

const store = configureStore({
  reducer: {
    reddit: redditReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;