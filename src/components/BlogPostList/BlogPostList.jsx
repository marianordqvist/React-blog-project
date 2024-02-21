import BlogPost from "../Blogpost/BlogPost";
import { blogPosts } from "../../data";

export default function BlogPostList() {
  return (
    <section className="post-list-container">
      <ul className="post-list">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <BlogPost post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
