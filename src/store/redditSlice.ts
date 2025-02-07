import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from '@/data/fetchPosts';
import { RedditPost } from '@/types/redditType';

interface RedditState {
  posts: RedditPost[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  query: string;
}

const initialState: RedditState = {
  posts: [],
  status: 'idle',
  error: null,
  query: 'nextjs',
};

const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<RedditPost[]>)  => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch posts';
      });
  }
});

export const { setQuery } = redditSlice.actions;
export default redditSlice.reducer;