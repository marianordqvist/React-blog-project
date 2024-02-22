import BlogPost from "../Blogpost/BlogPost";
import { blogPosts } from "../../data";
import "./BlogPostList.css";

export default function BlogPostList() {
  return (
    <section className="post-list-section">
      <ul className="post-list-container">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <BlogPost post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
