import { createAsyncThunk } from '@reduxjs/toolkit';
import { postsApi } from '../../api/posts';

/*
export const fetchPostsThunk = createAsyncThunk(
    'posts/fetchPosts',
    async ({limit, offset, searchParam, sortBy}: {limit: number, offset: number, searchParam: string, sortBy: string}) => {
        const response = await postsApi.fetchPosts(limit, offset, searchParam, sortBy);
        return response;
    }
);*/

type SortBy = 'date' | 'text' | 'author' | 'lesson_num' | '';
export const fetchPostsThunk = createAsyncThunk(
    'posts/fetchPosts',
    async (sortBy: SortBy) => {
        try {
            const response = await postsApi.fetchPosts( 10000, 0, '', sortBy );
            return response;
        } catch (error) {
            throw new Error('Failed to fetch posts');
        }
    }
);
