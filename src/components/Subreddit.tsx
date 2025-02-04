import Link from "next/link";
import { subredditType } from "@/types/subredditType";

export const Subreddit = ({ subreddit }: { subreddit: subredditType }) => {
  if (!subreddit) {
    return null;
  }

  return (
    <li className="pb-2">
      <Link 
        href={`/subreddits/${subreddit.display_name.toLowerCase()}`}
        title={subreddit.subreddit_name}
        className="text-lg hover:underline"
      >
        {subreddit.display_name}
      </Link>
    </li>
  );
};