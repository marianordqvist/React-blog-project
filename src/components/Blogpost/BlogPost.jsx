import "./BlogPost.css";
import { useState } from "react";

export default function BlogPost({ post }) {
  const [fullPost, setFullPost] = useState(false);

  const RevealFullPost = () => {
    console.log("clicked");
    setFullPost(true);
  };

  const CloseFullPost = () => {
    setFullPost(false);
  };

  console.log("aria-hidden:", !fullPost);

  return (
    <div className="post-container" id={post.id}>
      <article>
        <h3 className="title">{post.title}</h3>
        {post.subtitle ? <h4 className="subtitle">{post.subtitle}</h4> : null}
        <p className="author">Author: {post.author}</p>
        <img src={post.unsplashImage} alt={post.unsplashImageAltText}></img>
        <div
          className={`reveal-full-post ${fullPost ? "" : "hidden"}`}
          aria-hidden={!fullPost}
        >
          <p className="content">{post.content}</p>
        </div>
      </article>
      {fullPost ? (
        <button
          type="button"
          className="close-full-post-button"
          onClick={CloseFullPost}
          aria-label="Close Full Post"
        >
          Close
        </button>
      ) : (
        <button
          type="button"
          className="reveal-full-post-button"
          onClick={RevealFullPost}
          aria-label="Open the full post"
        >
          Read more
        </button>
      )}
    </div>
  );
}
