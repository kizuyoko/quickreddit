'use client';
import Image from "next/image";
import { RedditPost } from "@/types/redditType";
import { pastTimeFormat } from "@/utils/pastTimeFormat";
import { truncateText } from "@/utils/truncateText";
import { useState } from "react";
import thousandToK from "@/utils/thousandToK";

interface PostProps {
  post: RedditPost;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [voteUpStatus, setVoteUpStatus] = useState(0);
  const [voteDownStatus, setVoteDownStatus] = useState(0);
  const [newScore, setNewScore] = useState(post?.score ?? 0);
  const [upIcon, setUpIcon] = useState('White');
  const [downIcon, setDownIcon] = useState('White');

  if (!post) {
    return null;
  }

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Initialize thumbnailUrl after hooks
  if (thumbnailUrl === null && post.thumbnail && isValidUrl(post.thumbnail)) {
    setThumbnailUrl(post.thumbnail);
  }

  const handleImageError = () => {
    setThumbnailUrl(null);
  };

  const postTitle = thumbnailUrl ? truncateText(post.title, 50) : truncateText(post.title, 100);

  const postText = thumbnailUrl ? truncateText(post.selftext, 50) : truncateText(post.selftext, 100);

  const voteUpHandler = () => {
    switch (voteUpStatus) {
      case 0:
        setVoteUpStatus(1);
        setVoteDownStatus(0);
        setNewScore(newScore + 1);
        setUpIcon('Black');
        setDownIcon('White');
        break;
      case 1:
        setVoteUpStatus(0);
        setVoteDownStatus(0);
        setNewScore(newScore - 1);
        setUpIcon('White');
        setDownIcon('White');
        break;
      case -1:
        setVoteUpStatus(1);
        setVoteDownStatus(0);
        setNewScore(newScore + 2);
        setUpIcon('Black');
        setDownIcon('White');
        break;
    }
    
  };

  const voteDownHandler = () => {
    if (newScore > 0) {
      switch (voteDownStatus) {
        case 0:
          setVoteUpStatus(0);
          setVoteDownStatus(1);
          setNewScore(newScore - 1);
          setUpIcon('White');
          setDownIcon('Black');
          break;
        case 1:
          setVoteUpStatus(0);
          setVoteDownStatus(0);
          setNewScore(newScore + 1);
          setUpIcon('White');
          setDownIcon('White');
          break;
        case -1:
          setVoteUpStatus(0);
          setVoteDownStatus(0);
          setNewScore(newScore -2);
          setUpIcon('White');
          setDownIcon('Black');
          break;
      }
    }
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
      {post?.title && <h3>{postTitle}</h3>}
      {post?.selftext && <p>{postText}</p>}
      <p className="font-bold pt-2">
        {post?.subreddit_name_prefixed}  
      </p>
      <p className="pt-1">Posted by <b>{post?.author}</b></p> 
      <p>{pastTimeFormat(post?.created_utc)}</p>
      
      <div className="flex items-end justify-end mt-4">
        <button onClick={voteUpHandler}>
          <Image src={`/arrow${upIcon}.svg`} alt="UpVote" width={20} height={20} />
        </button>      
        <span className="mx-1"> 
          {thousandToK(newScore)}
        </span>
        <button onClick={voteDownHandler}>
          <Image src={`/arrow${downIcon}.svg`} alt="DownVote" width={20} height={20} className="rotate-180" />
        </button>
        <button onClick={toggleCommentHandler} className="mr-1 ml-3">
          <Image src="/commentWhite.svg" alt="Comment" width={22} height={20} />
        </button>  
        {thousandToK(post.num_comments)}
      </div>
    </div>
  );
};