import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchBrands = createAsyncThunk(
    'cars/fetchBrands',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/cars');
            const allCars = response.data.cars;

            const brandsSet = new Set(
                allCars.map((car) => car.brand).filter(Boolean)
            );
            return Array.from(brandsSet).sort((a, b) => a.localeCompare(b));
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);