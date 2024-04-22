import { createSlice } from '@reduxjs/toolkit'
export interface initialState {
    count: number
}

const initialState: initialState = {
    count: 0
}
export const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count -= 1
            } else {
                return state
            }
            
        }
    }
})