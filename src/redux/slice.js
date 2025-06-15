import { createSlice } from "@reduxjs/toolkit";
import { getCars, getCarsById } from "./operations";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        items: [],
        car: {},
        brands: [],
        loading: false,
        error: null,
        page: 1,
        totalPages: null,
        favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    },
    reducers: {
        upDatePage(state, action) {
            state.page = action.payload;
        },
        resetItems(state, action) {
            state.items = [];
        },
        addFavorite(state, action) {
            const id = action.payload;
            if (!state.favorites.includes(id)) {
                state.favorites.push(id);
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
        },
        removeFavorite(state, action) {
            state.favorites = state.favorites.filter(id => id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        loadFavoritesFromStorage(state) {
            const stored = localStorage.getItem('favorites');
            state.favorites = stored ? JSON.parse(stored) : [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCars.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.items = [...state.items, ...action.payload.cars].filter(
                    (item, index, self) =>
                        index === self.findIndex((i) => i.id === item.id),
                );
                state.totalPages = action.payload.totalPages;
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
                state.car = action.payload;
                state.loading = false;
            })
            .addCase(getCarsById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const {
    upDatePage,
    resetItems,
    addFavorite,
    removeFavorite,
    loadFavoritesFromStorage,
} = carsSlice.actions;

export default carsSlice.reducer;

