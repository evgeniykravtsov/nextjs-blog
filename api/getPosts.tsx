import matter from "gray-matter";
import fs from "fs";

const getPosts = () => {
  const path = "posts/";

  const mdFiles = fs.readdirSync(path);

  const mdPosts = mdFiles.filter((file) => file.endsWith(".md"));

  const posts = mdPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${path}${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPosts;
