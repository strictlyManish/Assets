import { configureStore } from "@reduxjs/toolkit";
import search from "./features/search"

export const store = configureStore({
    reducer:{
        search:search
    }
})