import { createSlice } from "@reduxjs/toolkit";
import { getCars, getCarsById } from "./operations";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        items: [],
        car: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCars.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.items = action.payload.car;
                state.loading = false;
            })
            .addCase(getCars.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getCarsById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCarsById.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(getCarsById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

const carsReducer = carsSlice.reducer;
export default carsReducer;