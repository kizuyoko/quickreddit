'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/data/fetchPosts';
import { Post } from "./Post";
import { RootState, AppDispatch } from '@/store/store';
import { RedditPost } from '@/types/redditType';
import { SocialMedia } from './SocialMedia';
interface PostsProps {
  query: string;
}

export const Posts: React.FC<PostsProps> = ({ query }) => {
  const dispatch: AppDispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.reddit.posts);
  const status = useSelector((state: RootState) => state.reddit.status);
  const error = useSelector((state: RootState) => state.reddit.error);

  useEffect(() => {
    dispatch(fetchPosts(query));
  }, [dispatch, query]);

  let content;

  if (status === 'loading') {
    content = <h2 className='pageTitle'>Loading...</h2>;
  } else if (status === 'succeeded') {
    // Find the post with largest thumbnail
    const largestThumbnailPost = posts?.reduce((max, post) => {
      const currentSize = (post.thumbnail_width || 0) * (post.thumbnail_height || 0);
      const maxSize = (max?.thumbnail_width || 0) * (max?.thumbnail_height || 0);
      return currentSize > maxSize ? post : max;
    }, posts[0]);

    content = posts?.length ? posts.map((post: RedditPost) => (
      <article key={post?.id} className="flex flex-col h-full">
        <Post 
          post={post} 
          isPriority={post.id === largestThumbnailPost?.id}
        />
      </article>
    )) : <h2 className='pageTitle'>No posts found</h2>;
  } else if (status === 'failed') {
    content = <h2 className='pageTitle'>{error}</h2>;
  }

  const searchQuerySignal = "searchQuerySignal";
  const queryIsSearch = query.startsWith(searchQuerySignal);
  const queryForTitle = query.replace(searchQuerySignal, '').replace(/%/g, ' ');
  
  const pageTitle = queryIsSearch
    ? `Search result: ${queryForTitle}`
    : `r/${queryForTitle}`;

  return (
    <>
      <div className='flex'>
        <h2 className='pageTitle flex-1'>{pageTitle}</h2>
        <SocialMedia />
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 pt-2 w-full mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-[1800] max-[420px]:grid-cols-1">
        {content}
      </div>
    </>  
  );
};