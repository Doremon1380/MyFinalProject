import { configureStore } from "@reduxjs/toolkit"
import singinReducer from "./components/features/singin/singinSlice"

//let combineReducer = combineReducers({
//    singin: singinReducer 
//});

// the reducer for a specific section of the Redux app state is called a "slice reducer"
// for more information: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#splitting-reducers
const store = configureStore({
    reducer: {
        // Define a top-level state field named `todos`, handled by `todosReducer`
        singin: singinReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;