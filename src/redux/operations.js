import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getCars = createAsyncThunk(
    'cars/getAll',
    async ({ page = '1', brand, rentalPrice, minMileage, maxMileage }, thunkAPI) => {
        try {
            const params = { page };
            if (brand !== undefined) params.brand = brand;
            if (rentalPrice !== undefined) params.rentalPrice = rentalPrice;
            if (minMileage !== undefined) params.minMileage = minMileage;
            if (maxMileage !== undefined) params.maxMileage = maxMileage;
            const response = await axios.get('/cars', { params });
            return {
                cars: response.data.cars,
                totalPages: response.data.totalPages,
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getCarsById = createAsyncThunk(
    'cars/getOne',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.get(`/cars/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

