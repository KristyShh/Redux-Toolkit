import { createSlice } from '@reduxjs/toolkit'
import {fetchPostsThunk} from './thunks'

interface PostsResponse {
    count: number,
    next: string,
    previous: string,
    "results": Posts[]
}
interface Posts {
	id: number
	image: string
	text: string
	date: string
	lesson_num: number
	title: string
	description: string
	author: string
}
interface PostsState  {
    status?: 'loading' | 'success' | 'error'
	postsList: PostsResponse
	error?: unknown
}
const initialState: PostsState = {
    postsList: {
		"count": 0,
		"next": '',
		"previous": '',
		"results": []
		},
}


    export const postsSlice = createSlice({
        name: 'posts',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
         builder.addMatcher(fetchPostsThunk.pending.match, (state) => {
                   state.status = 'loading'
               })
               builder.addMatcher(fetchPostsThunk.fulfilled.match, (state, action) => {
                   state.status = 'success'
                   state.postsList = action.payload
               })
         builder.addMatcher(fetchPostsThunk.rejected.match, (state, action) => {
                   state.status = 'error'
                   state.error = action.error
               })
        }
       })
export default postsSlice.reducer