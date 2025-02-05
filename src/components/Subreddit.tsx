"use client";
import { subredditType } from "@/types/subredditType";
import { subreddits } from "../data/subreddits";
import { useDispatch } from 'react-redux';
import { setQuery } from "@/store/redditSlice";
import { AppDispatch } from "@/store/store";
import { useSelector } from 'react-redux'; 
import { RootState } from "@/store/store";
interface SubredditProps {
  subreddit: subredditType;
}

export const Subreddit: React.FC<SubredditProps> = ({ subreddit }) => {
  const dispatch: AppDispatch = useDispatch();
  const currentQuery = useSelector((state: RootState) => state.reddit.query);

  if (!subreddit) {
    return null;
  }

  const handleSelectSubreddit = () => {
    dispatch(setQuery(subreddit.display_name.toLowerCase()));
  };

  return (
    <li className="pb-2">
      <button
        onClick={handleSelectSubreddit}
        title={subreddit.subreddit_name}
        className={`text-lg ${currentQuery === subreddit.display_name.toLowerCase() ? 'underline' : ''} hover:underline`}
      >
        {subreddit.display_name}
      </button>
    </li>
  );
};

export const Subreddits = () => {

  return (
    <div className="flex flex-col gap-4 sm:p-4 w-full sm:w-48">
      <h2 className="text-2xl">Subreddits</h2>
      <nav>
        <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-2">
          {subreddits.map((subreddit) => (
            <Subreddit 
              key={subreddit.id} 
              subreddit={subreddit}  
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};