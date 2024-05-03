import axios, { AxiosInstance } from 'axios';

export type SortBy = 'title' | 'lesson_num' | 'author' | 'date' ;

const POST_URL = 'https://studapi.teachmeskills.by/blog/posts/';

export class PostsApi {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: POST_URL
    });
  }

  async fetchPosts(limit: number, offset: number, search: string, sortBy ) {
    try {
      const response = await this.api.get(POST_URL, {
        params: {
          limit,
          offset,
          search,
          sort_by: sortBy
         
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch posts');
    }
  }
}

export const postsApi = new PostsApi();




