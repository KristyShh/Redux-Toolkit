
import { RootState } from '..//store'
import { userSlice,  } from "./slice"

export const userReducer = userSlice.reducer
export const userSelector = (state: RootState) => state.users
