import { Subreddit } from "./Subreddit";
import { subreddits } from "../data/subreddits";

export const Subreddits = () => {
  return (
    <aside className="hidden md:flex flex-col gap-4 p-4 w-60 pt-6">
      <h2 className="text-2xl">Subreddits</h2>
      <nav>
        <ul>
          {subreddits.map((subreddit) => (
            <Subreddit key={subreddit.id} subreddit={subreddit} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}