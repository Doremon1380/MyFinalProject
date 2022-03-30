import { configureStore, createStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";

const allReducers = combineReducers({
    
    // add more reducers here
});

const store = createStore(allReducers);

export default configureStore({
    reducer: {},
})