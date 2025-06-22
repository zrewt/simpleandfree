import BlogPost from "./BlogPost";
import styles from "./page.module.css";

const posts = [
  {
    title: "Welcome to Simple and Free!",
    content: "This is your first blog post. You can easily add more posts with text and images.",
    image: "/next.svg",
  },
  {
    title: "Nature's Beauty",
    content: "Green, brown, and white are the colors of simplicity and earth. Enjoy writing!",
    image: "/globe.svg",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Simple and Free</h1>
        <p>Created By Shiri Lazarovici</p>
      </header>
      <main className={styles.main}>
        {posts.map((post, idx) => (
          <BlogPost key={idx} title={post.title} content={post.content} image={post.image} />
        ))}
      </main>
    </div>
  );
}
