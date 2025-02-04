import { createAsyncThunk } from '@reduxjs/toolkit';
//import { redditApi } from '@/services/redditApi';
import { RedditPost } from '@/types/redditType';
/*
export const fetchPosts = createAsyncThunk<RedditPost[], void, { state: { reddit: { query: string } } }>(
  'reddit/fetchPosts',
  async (_, { getState }) => {
    const { query } = getState().reddit;
    const posts = await redditApi.fetchPosts(query);
    return posts;
  }
);
*/

interface RedditResponse {
  data: {
    children: Array<{
      data: RedditPost;
    }>;
  };
}

export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async (subreddit: string = 'popular') => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const data: RedditResponse = await response.json();
  return data.data.children.map(child => child.data);
});
