import { Post } from "./Post";
import popularData from "../data/popular.json";

export const Posts = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 w-full mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[1800]">
      {popularData.data.children.map((child, index) => (
        <article key={index} className="flex flex-col h-full">
          <Post post={child.data} />
        </article>
      ))}
    </div>  
  );
};