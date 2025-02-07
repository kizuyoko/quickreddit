import { Subreddit } from "./Subreddit";
import { subreddits } from "../data/subreddits";

export const Subreddits: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 sm:p-4 w-full sm:w-48">
      <h2 className="text-2xl md:text-black">Subreddits</h2>
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