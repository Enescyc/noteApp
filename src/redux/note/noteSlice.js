import {createSlice} from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: "Notes",
    initialState: {
        notes: [],
    },
    reducers: {},
    extraReducers: {},

})


export default noteSlice.reducer;