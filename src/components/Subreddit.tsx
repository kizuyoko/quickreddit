//import Link from "next/link"
import { subredditType } from "@/types/subredditType";
//import Image from "next/image";

export const Subreddit = ({ subreddit }: { subreddit: subredditType }) => {
  if (!subreddit) {
    return null;
  }

  return (
    <li className="pb-2">
      <a 
        href={subreddit.url}
        title={subreddit.subreddit_name}
      >
        {subreddit.display_name}
      </a>
    </li>
  );
};