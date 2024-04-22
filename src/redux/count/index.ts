
import { RootState } from "../store"
import { countSlice,  } from "./slice"
export const { increment, decrement } = countSlice.actions
export const countReducer = countSlice.reducer
export const countSelector = (state: RootState) => state.count
