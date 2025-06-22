import Image from "next/image";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  title: string;
  content: string;
  image?: string;
}

export default function BlogPost({ title, content, image }: BlogPostProps) {
  return (
    <article className={styles.post}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} width={400} height={200} className={styles.image} />
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </article>
  );
} 