import { registrationFormSlice } from './slice'
import { RootState } from '../store'

export const registrFormReducer = registrationFormSlice.reducer
export const registrFormSelector = (state: RootState) => state.form