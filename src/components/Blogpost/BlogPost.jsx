export default function BlogPost({ post }) {
  return (
    <div className="BlogPost-container">
      <h3>{post.title}</h3>
      <h4>{post.author}</h4>
      {post.icon}
      <p>{post.paragraph}</p>
    </div>
  );
}

//  id: 11,
// title: "Mastering CSS Grid Layout",
// subtitle: "Revolutionizing Web Design with Grid Systems",
// paragraph:
//   "Dive deep into the world of CSS Grid Layout and discover how to create visually stunning and responsive web layouts that captivate your audience.",
// image: "https://example.com/image2.jpg",
// sellingSentence:
//   "Transform your web design skills with the revolutionary power of CSS Grid Layout!",
// author: "Jane Smith",
// keywords:
