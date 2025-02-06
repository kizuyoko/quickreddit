'use client';
import Image from "next/image";
import { RedditPost } from "@/types/redditType";
import { pastTimeFormat } from "@/utils/pastTimeFormat";
import { truncateText } from "@/utils/truncateText";
import { useState } from "react";

interface PostProps {
  post: RedditPost;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(
    post.thumbnail && isValidUrl(post.thumbnail) ? post.thumbnail : null
  );

  const handleImageError = () => {
    setThumbnailUrl(null);
  };

  const postTitle = thumbnailUrl ? truncateText(post.title, 50) : truncateText(post.title, 100);

  const postText = thumbnailUrl ? truncateText(post.selftext, 50) : truncateText(post.selftext, 100);

  const voteUpHandler = () => {

  };

  const voteDownHandler = () => {

  };

  const toggleCommentHandler = () => {

  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt="Post Thumbnail"
          width={post.thumbnail_width || 150}
          height={post.thumbnail_height || 150}
          onError={handleImageError}
          className="mb-2"
          priority
        />
      ) : null}
      {post.title && <h3>  
        {postTitle}
      </h3>}
      {post.selftext && <p>
        {postText}
      </p>}
      <p className="mt-2">Posted by <b>{post.author}</b> &nbsp; &nbsp; {pastTimeFormat(post.created_utc)}</p>
      <p className="font-bold pt-2">
        {post.subreddit_name_prefixed}  
      </p>
      <div className="flex items-end justify-end mt-4">
        <button className="" onClick={voteUpHandler}>
          <Image src="/arrowWhite.svg" alt="UpVote" width={20} height={20} />
        </button>      
        <span className="mx-1"> 
          {post.score >= 1000 ? (post.score / 1000).toFixed(1) + 'K' : post.score}
        </span>
        <button onClick={voteDownHandler}>
          <Image src="/arrowWhite.svg" alt="DownVote" width={20} height={20} className="rotate-180" />
        </button>
        <button onClick={toggleCommentHandler} className="mr-1 ml-3">
          <Image src="/commentWhite.svg" alt="Comment" width={22} height={20} />
        </button>  
        {post.num_comments}
      </div>
    </div>
  );
};