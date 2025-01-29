import Image from "next/image";
import { RedditPost } from "@/types/redditType";
import { pastTimeFormat } from "@/utils/pastTimeFormat";
import Link from "next/link";

export const Post = ({ post }: { post: RedditPost }) => {
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const thumbnailUrl = post.thumbnail && isValidUrl(post.thumbnail) ? post.thumbnail : null;

  return (
    <article className="bg-white p-4 rounded-lg shadow-md w-full">
      {thumbnailUrl && (
        <div style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}>
          <Image
            src={thumbnailUrl}
            alt={post.title}
            layout="intrinsic"
            width={post.thumbnail_width || 700}
            height={post.thumbnail_height || 700}
          />
        </div>
      )}
      <p>{post.title || post.selftext }</p>
      <p>Posted by <b>{post.author}</b> &nbsp; &nbsp; {pastTimeFormat(post.created_utc)}</p>
      <p>
        <Link 
          href={post.subreddit_name_prefixed}
          className="font-bold text-lg mt-2"
        >
          {post.subreddit_name_prefixed}
        </Link>  
      </p>
      <div className="flex items-center justify-end mt-4">
        <button className="">
          <Image src="/arrowWhite.svg" alt="Arrow" width={20} height={20} />
        </button>      
        <span className="mx-2"> 
          {post.score >= 1000 ? (post.score / 1000).toFixed(1) + 'K' : post.score}
        </span>
        <button className="" style={{ transform: 'rotate(180deg)' }}>
          <Image src="/arrowWhite.svg" alt="Arrow" width={20} height={20} />
        </button>
        <button className="mr-2 ml-6">
          <Image src="/commentWhite.svg" alt="Comment" width={20} height={20} />
        </button>  
        {post.num_comments}
      </div>
    </article>
  );
};