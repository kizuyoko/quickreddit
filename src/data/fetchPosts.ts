import { createAsyncThunk } from '@reduxjs/toolkit';
import { RedditPost } from '@/types/redditType';

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