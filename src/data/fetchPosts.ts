import { createAsyncThunk } from '@reduxjs/toolkit';

interface RedditResponse {
  data: {
    children: Array<{
      data: any;
    }>;
  };
}

export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async () => {
  const response = await fetch('https://www.reddit.com/r/popular.json');
  const data: RedditResponse = await response.json();
  return data.data.children.map(child => child.data);
});