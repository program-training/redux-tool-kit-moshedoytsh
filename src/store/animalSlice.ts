import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    animal: ''
}

type animalStateType = {animal: string}

const animalSlice = createSlice({
    name: 'animalSlice',
    initialState,
    reducers: {
        update(state: animalStateType, action: PayloadAction<string>){
            state.animal = action.payload
            return state
        }
    }
})

export const { update } = animalSlice.actions
export default animalSlice.reducer