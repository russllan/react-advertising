import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Api from '../api/Api';

export const fetchHouses = createAsyncThunk('houses/setHouses', async () => {
    const res = await Api.getHouses()
    return res.housesArray
});

const housesSlice = createSlice( {
    name: 'houses',
    initialState: { isLoading: true, housesArray: [] },
    reducers: {
        // setData: (state, action) => {
        //     state.isLoading = false;
        //     state.housesArray = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.housesArray = action.payload;
        })
    }
});

export const housesSliceAction = housesSlice.actions;
export const housesSliceReducer = housesSlice.reducer;