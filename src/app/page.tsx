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
  {
    title: "Simple Things. Simple Pleasures.",
    content: `
      <h2>Creative Energy!</h2>
      <p>I feel a surge of creative energy!</p>
      <p>Not sure how long this blog will be – for the summer (while I am off on a self-made sabbatical), or longer; we shall see!</p>
      <p>In some ways, going through 2 pregnancies in the past 3.5 years, having two newborns in the house, and working full time – my creative urges had to take a bit of a "back-seat". Let's say a definite back seat!</p>
      <p>In these few weeks I have had off over the summer of 2015, I feel my spirit, my excitement, my creative energy all trickling through again and showing their light.</p>
      <p>I think, every now and then, we all sometimes need a bit of time to cut off from everything; to re-group, de-clutter (our thoughts and our things) and re-connect to our inner selves. It feels great!</p>
      <div class="meta">
        <p><strong>Posted on:</strong> April 15, 2015</p>
        <p><strong>Author:</strong> Shiri</p>
        <p><strong>Categories:</strong> Crafty Things, Well being</p>
      </div>
    `,
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
