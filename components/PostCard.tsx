import { FC } from "react";
import Link from "next/link";

interface PostInterface {
  slug: string;
  date: string;
  title: string;
  subtitle: string;
}

const PostCard: FC<PostInterface> = (props) => {
  return (
    <Link href={`/post/${props.slug}`}>
      <div
        className="border border-purple-500 p-4 rounded-md shadow-sm
        bg-white"
      >
        <p className="text-xl text-slate-400">{props.date}</p>

        <h2 className="mb-4">{props.title}</h2>
        <p className="text-slate-700">{props.subtitle}</p>
      </div>
    </Link>
  );
};

export default PostCard;
