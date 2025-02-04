'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/data/fetchPosts';
import { Post } from "./Post";
import { RootState, AppDispatch } from '@/store/store';
import { RedditPost } from '@/types/redditType';

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
    content = posts.map((post: RedditPost) => (
      <article key={post.id} className="flex flex-col h-full">
        <Post post={post} />
      </article>
    ));
  } else if (status === 'failed') {
    content = <h2 className='pageTitle'>{error}</h2>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4 pt-2 w-full mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-[1800] max-[420px]:grid-cols-1">
      {content}
    </div>  
  );
};