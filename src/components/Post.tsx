import Image from "next/image";
import { RedditPost } from "@/types/redditType";

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
      <p>Posted by <b>{post.author}</b> &nbsp; &nbsp; </p>
      <p>{Math.floor((Date.now() - new Date(post.created_utc * 1000).getTime()) / (1000 * 60 * 60 * 24))} days ago</p>
      <p>Score: {post.score >= 1000 ? (post.score / 1000).toFixed(1) + 'K' : post.score}</p>
      <p>Comments: {post.num_comments}</p>
      <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noreferrer">
        Read more
      </a>
    </article>
  );
};