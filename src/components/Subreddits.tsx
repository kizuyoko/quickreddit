import { Subreddit } from "./Subreddit";

export const Subreddits = () => {
  return (
    <aside className="hidden md:flex flex-col gap-4 p-4 w-60 pt-6">
      <h2 className="text-2xl">Subreddits</h2>
      <nav>
        <ul>
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
        </ul>
      </nav>
    </aside>
  );
}