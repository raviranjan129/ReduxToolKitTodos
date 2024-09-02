import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../Redux/ToDo/todoSlice'

export const store = configureStore({
    reducer:todoReducer
})