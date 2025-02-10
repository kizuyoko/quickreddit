import Image from "next/image";
import { RedditPost } from "@/types/redditType";
import { pastTimeFormat } from "@/utils/pastTimeFormat";
import { truncateText } from "@/utils/truncateText";
import thousandToK from "@/utils/thousandToK";
import { Voting } from "./Voting";

interface PostProps {
  post: RedditPost;
  isPriority?: boolean;
}

export const Post: React.FC<PostProps> = ({ post, isPriority = false }) => {
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

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
      <a href={post.url} target="_blank">
      {
        isValidThumbnail(post.thumbnail) && <Image 
          alt={truncateText(post.title, 30) || truncateText(post.selftext, 30)}
          src={post.thumbnail as string}
          width={post.thumbnail_width || 100}
          height={post.thumbnail_height || 100}
          loading={isPriority ? undefined : "lazy"}
          priority={isPriority}
          className="pb-2"
        />
      }
      {post?.title && <h3>{postTitle}</h3>}
      {post?.selftext && <p>{postText}</p>}
      </a>
      <p className="font-bold pt-2">
        {post?.subreddit_name_prefixed}  
      </p>
      <p className="pt-1">Posted by <b>{post?.author}</b></p> 
      <p>{pastTimeFormat(post?.created_utc)}</p>
      
      <div className="flex items-end justify-end mt-4">
        <Voting initialScore={post?.score ?? 0} />
        <Image 
          src="/commentWhite.svg" 
          alt="Comment" 
          width={22} height={20} 
          loading="lazy" 
          className="mr-1 ml-3"
        />
        {thousandToK(post.num_comments)}
      </div>
    </div>
  );
};