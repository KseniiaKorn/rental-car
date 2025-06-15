import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchBrands = createAsyncThunk(
    'cars/fetchBrands',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get('/brands');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);