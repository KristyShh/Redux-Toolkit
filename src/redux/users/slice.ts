import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseApi } from '../../api/base'

interface UserState {
    loading: boolean
    users: any[]
    error: any 
}
const initialState: UserState = {
    loading: false,
    users: [],
    error: ''
}
/*export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
     async (_, {rejectWithValue}) => {
        try {
            const response = await baseApi.fetchUsers()
            const data = await response.json()
            return data
        } catch (error) {
           throw rejectWithValue(error)
        }
    
})*/

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return data
    }   
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            state.users = action.payload
    })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
    })

        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
    })
}

})


export default userSlice.reducer
