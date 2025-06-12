import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const getCars = createAsyncThunk(
    'cars/getAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/cars');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getCarsById = createAsyncThunk(
    'cars/getOne',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.get('/cars/${id}');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);