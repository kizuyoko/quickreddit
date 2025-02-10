import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from '@/data/fetchPosts';
import { RedditPost, RedditState } from '@/types/redditType';

const initialState: RedditState = {
  posts: [],
  status: 'idle',
  error: null,
  query: 'popular',
};

const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setPosts: (state, action: PayloadAction<RedditPost[]>) => {
      state.posts = action.payload;
    },
    setStatus: (state, action: PayloadAction<'idle' | 'loading' | 'succeeded' | 'failed'>) => {
      state.status = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
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

export const { setQuery, setPosts, setStatus, setError } = redditSlice.actions;
export default redditSlice.reducer;