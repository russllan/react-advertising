import { combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from './authSlice';
import { carsSliceReducer } from "./carsSlice";
import { housesSliceReducer } from "./housesSlice";

// const housesSlice = createSlice({
//     initialState: {
    
//     }
// })

const reducers = combineReducers({
    auth: authSliceReducer,
    houses: housesSliceReducer,
    cars: carsSliceReducer
})

export const store =  ({
    redcuer: reducers
})

store.subscribe(() => {
    const auth = store.getState().auth
    localStorage.setItem('auth', JSON.stringify(auth))
});

console.log(store);