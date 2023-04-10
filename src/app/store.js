import { configureStore } from "@reduxjs/toolkit";
import  markdownSlice  from "../features/markdownSLice";

export const store = configureStore({
    reducer: {
        markdown: markdownSlice,
    }
})