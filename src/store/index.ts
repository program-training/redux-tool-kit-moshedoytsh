import { configureStore } from "@reduxjs/toolkit";
import animalReducer from './animalSlice'

export const store = configureStore({
    reducer: {
        animal: animalReducer
    }
})

export type RootState = ReturnType <typeof store.getState>
