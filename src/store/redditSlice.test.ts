import reducer, { setQuery, setPosts, setStatus, setError } from './redditSlice';
import { fetchPosts } from '@/data/fetchPosts';
import { RedditState } from '@/types/redditType';

describe('redditSlice reducer', () => {
  const initialState: RedditState = {
    posts: [],
    status: 'idle',
    error: null,
    query: 'popular',
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setQuery', () => {
    const actual = reducer(initialState, setQuery('new query'));
    expect(actual.query).toEqual('new query');
  });

  it('should handle setPosts', () => {
    const mockPosts = [{
      id: '1',
      title: 'Test Post',
      selftext: 'Test content',
      content: 'Test content',
      author: 'testuser',
      subreddit: 'test',
      subreddit_name_prefixed: 'r/test',
      score: 100,
      created_utc: 1234567890,
      num_comments: 10,
      url: 'https://reddit.com/test',
      permalink: '/r/test/comments/1',
      thumbnail: null,
    }];
    const actual = reducer(initialState, setPosts(mockPosts));
    expect(actual.posts).toEqual(mockPosts);
  });

  it('should handle setStatus', () => {
    const actual = reducer(initialState, setStatus('loading'));
    expect(actual.status).toEqual('loading');
  });

  it('should handle setError', () => {
    const actual = reducer(initialState, setError('Error message'));
    expect(actual.error).toEqual('Error message');
  });

  it('should handle fetchPosts.pending', () => {
    const actual = reducer(initialState, fetchPosts.pending('', ''));
    expect(actual.status).toBe('loading');
  });

  it('should handle fetchPosts.fulfilled', () => {
    const mockPosts = [{
      id: '1',
      title: 'Test Post',
      selftext: 'Test content',
      content: 'Test content',
      author: 'testuser',
      subreddit: 'test',
      subreddit_name_prefixed: 'r/test',
      score: 100,
      created_utc: 1234567890,
      num_comments: 10,
      url: 'https://reddit.com/test',
      permalink: '/r/test/comments/1',
      thumbnail: null
    }];
    const actual = reducer(initialState, fetchPosts.fulfilled(mockPosts, '', ''));
    expect(actual.status).toBe('succeeded');
    expect(actual.posts).toEqual(mockPosts);
  });

  it('should handle fetchPosts.rejected', () => {
    const error = new Error('Failed to fetch');
    const actual = reducer(initialState, fetchPosts.rejected(error, '', ''));
    expect(actual.status).toBe('failed');
    expect(actual.error).toBe('Failed to fetch');
  });

}); 