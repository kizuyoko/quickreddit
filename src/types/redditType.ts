export interface RedditPost {
  id: string;
  content: string;
  title: string;
  author: string;
  subreddit: string;
  score: number;
  num_comments: number;
  created_utc: number;
  permalink: string;
  url: string;
  selftext: string;
  thumbnail?: string | null;
  thumbnail_width?: number | null;
  thumbnail_height?: number | null;
  subreddit_name_prefixed: string;
  preview?: { images: { source: { url: string; width: number; height: number } }[] };
  url_overridden_by_dest?: string;
  isFirstWithThumbnail?: boolean;
}

export interface RedditResponse {
  kind: string;
  data: {
    modhash: string;
    dist: number;
    children: {
      kind: string;
      data: RedditPost;
    }[];
    after: string | null;
    before: string | null;
  };
}

export interface RedditState {
  posts: RedditPost[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  query: string;
}