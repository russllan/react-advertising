import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        isAuth: true,
        login: "",
    },
    reducers:{}
});

const reducers = combineReducers({
    auth: authSlice.reducer,
    houses:authSlice.reducer
})

export const store = configureStore({
    redcuer: reducers
})

console.log(store);