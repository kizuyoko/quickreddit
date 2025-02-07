'use client';
import Image from "next/image";
import { RedditPost } from "@/types/redditType";
import { pastTimeFormat } from "@/utils/pastTimeFormat";
import { truncateText } from "@/utils/truncateText";
import thousandToK from "@/utils/thousandToK";
import { Voting } from "./Voting";

interface PostProps {
  post: RedditPost;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  if (!post) {
    return null;
  }

  const isValidThumbnail = (thumbnail: string | null | undefined): boolean => {
    if (!thumbnail || 
        thumbnail === 'self' || 
        thumbnail === 'default' || 
        thumbnail === 'nsfw' ||
        thumbnail.includes('external-preview.redd.it')) {
      return false;
    }
    try {
      new URL(thumbnail);
      return true;
    } catch {
      return false;
    }
  };

  const postTitle = post.thumbnail ? truncateText(post.title, 50) : truncateText(post.title, 100);
  const postText = post.thumbnail ? truncateText(post.selftext, 50) : truncateText(post.selftext, 100);

  const toggleCommentHandler = () => {

  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      {
        isValidThumbnail(post.thumbnail) && <Image 
          alt={truncateText(post.title, 10) || truncateText(post.selftext, 10)}
          src={post.thumbnail as string}
          width={post.thumbnail_width || 100}
          height={post.thumbnail_height || 100}
          loading="lazy"
        />
      }
      {post?.title && <h3>{postTitle}</h3>}
      {post?.selftext && <p>{postText}</p>}
      <p className="font-bold pt-2">
        {post?.subreddit_name_prefixed}  
      </p>
      <p className="pt-1">Posted by <b>{post?.author}</b></p> 
      <p>{pastTimeFormat(post?.created_utc)}</p>
      
      <div className="flex items-end justify-end mt-4">
        <Voting initialScore={post?.score ?? 0} />
        <button onClick={toggleCommentHandler} className="mr-1 ml-3">
          <Image 
            src="/commentWhite.svg" 
            alt="Comment" 
            width={22} height={20} 
            loading="lazy"
          />
        </button>  
        {thousandToK(post.num_comments)}
      </div>
    </div>
  );
};