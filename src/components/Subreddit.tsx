//import Link from "next/link"
import { subredditType } from "@/types/subredditType";

export const Subreddit = ({ subreddit }: { subreddit: subredditType }) => {
  if (!subreddit) {
    return null;
  }

  return (
    <li>
      <a 
        href={subreddit.url}
        title={subreddit.title}
      >
        {subreddit.display_name}
      </a>
    </li>
  );
};