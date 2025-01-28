import { Post } from "./Post";

export const Posts = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-3xl w-full mx-auto justify-center items-center">
      <Post />
      <Post />
      <Post />
    </div>  
  );
};