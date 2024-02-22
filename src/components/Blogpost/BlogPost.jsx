import "./BlogPost.css";

export default function BlogPost({ post }) {
  return (
    <div className="post-container">
      <article>
        <h3 className="title">{post.title}</h3>
        {post.subtitle ? <h4 className="subtitle">{post.subtitle}</h4> : null}
        <p className="author">Author: {post.author}</p>
        <img src={post.imageUrl} alt={post.altText}></img>
        <p className="content">{post.content}</p>
      </article>
    </div>
  );
}
