import { Post } from "./Post";
import popularData from "../data/popular.json";

export const Posts = () => {
  return (
    <div className="flex flex-col gap-4 p-4 max-w-3xl w-full mx-auto justify-center items-center">
      {popularData.data.children.slice(0, 5).map((child, index) => (
        <Post key={index} post={child.data} />
      ))}
    </div>  
  );
};