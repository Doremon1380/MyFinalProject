import {
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit'

const singinAdapter = createEntityAdapter()

const initialState = singinAdapter.getInitialState({
    //id: 0,
    isPaswordVisible: false,
    open: true
})

const singinSlice = createSlice({
    name: 'singin',
    initialState,
    reducers: {
        changePasswordVisibility(state, action) {
            let status = state.isPaswordVisible;
            return {
                ...state,
                isPaswordShown: !status
            }
        },
        toggleImage(state, action) {
            let status = !state.open;
            return {
                ...state,
                open: status
            };
        },
        //getPasswordStatus(state, action) {
        //    let status = state.isPaswordVisible;
        //    return {
        //        payload: { status }
        //    };
        //},
    }
})

export const {
    toggleImage,
    changePasswordVisibility,
} = singinSlice.actions

export default singinSlice.reducer