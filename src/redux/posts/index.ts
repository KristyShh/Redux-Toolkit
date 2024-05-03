import { RootState } from '..//store'
import { postsSlice } from './slice'

export const postsReducer = postsSlice.reducer
export const postsSelector = (state: RootState) => state.posts
