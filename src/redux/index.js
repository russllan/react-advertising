import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from './authSlice';

// const housesSlice = createSlice({
//     initialState: {
    
//     }
// })

const reducers = combineReducers({
    auth: authSliceReducer,
    houses: authSliceReducer
})

export const store =  ({
    redcuer: reducers
})

store.subscribe(() => {
    const auth = store.getState().auth
    localStorage.setItem('auth', JSON.stringify(auth))
});

console.log(store);