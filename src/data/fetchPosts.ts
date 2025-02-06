import { createAsyncThunk } from '@reduxjs/toolkit';
import { RedditPost } from '@/types/redditType';

interface RedditResponse {
  data: {
    children: Array<{
      data: RedditPost;
    }>;
  };
}

export const fetchPosts = createAsyncThunk('reddit/fetchPosts', async (redditQuery: string = 'popular') => {
  const searchQuerySignal = "searchQuerySignal";
  const isSearch = redditQuery.startsWith(searchQuerySignal);
  
  const cleanedQuery = isSearch ? redditQuery.replace(searchQuerySignal, '') : redditQuery;

  const url = isSearch
    ? `https://www.reddit.com/search.json?q=${cleanedQuery}`
    : `https://www.reddit.com/r/${cleanedQuery}.json`;

  const response = await fetch(url);
  const data: RedditResponse = await response.json();
  return data.data.children.map(child => child.data);
});
