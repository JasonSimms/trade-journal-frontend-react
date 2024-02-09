import { configureStore } from '@reduxjs/toolkit';
import  tickersReducer  from './tickersSlice'; 

const store = configureStore({
    reducer: {
        tickers: tickersReducer
    }
})

// Export the store as the default export
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Define the `AppStore` type as a combination of `RootState` and `AppDispatch`
export type AppStore = {
    state: RootState;
    dispatch: AppDispatch;
  };