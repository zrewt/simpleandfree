import BlogPost from "./BlogPost";
import styles from "./page.module.css";

const posts = [
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
  {
    title: "Life On Pause",
    content: `
      <h2>LIIFE ON PAUSE</h2>
      <p>A selfie, like any photograph, interrupts experience to mark the moment. In this, it shares something with all the other ways we break up our day, when we text during class, in meetings, at the theatre, at dinners with friends. And yes, at funerals, but also more regularly at church and synagogue services. We text when we are in bed with our partners and spouses. We watch our political representatives text during sessions.</p>
      <p>Technology doesn’t just do things for us. It does things to us, changing not just what we do but who we are. The selfie makes us accustomed to putting ourselves and those around us “on pause” in order to document our lives. It is an extension of how we have learned to put our conversations “on pause”. When you get accustomed to a life of stops and starts, you get less accustomed to reflecting on where you are and what you are thinking.</p>
      <p>We don’t experience interruptions as disruptions anymore. But they make it hard to settle into serious conversations with ourselves and with other people because emotionally, we keep ourselves available to be taken away from everything.</p>
      <p>These days, when people are alone, or feel a moment of boredom, they reach for a device. In a movie theatre, at a stop sign, at the checkout line at a supermarket and, yes, at a memorial service, reaching for a device becomes so natural that we start to forget that there is a reason, a good reason, to sit still with our thoughts.</p>
      <p>A 14-year-old boy said to me: “Don’t people know that sometimes you can just look out the window of a car and see the world go by and it is wonderful. You can think. People don’t know that.”</p>
      <p>Adapted from “The Documented Life” by Sherry Turkle which originally appeared in The New York Times on December 16, 2013.</p>
      <p>Some random “paparatsi” (spl?) pics I took of people I took on their phones in the park… Life on Pause?</p>
      <div class="meta">
        <p><strong>Posted on:</strong> April 15, 2015</p>
        <p><strong>Author:</strong> Shiri</p>
        <p><strong>Categories:</strong> Digital Detox, Living Simple, Well being</p>
      </div>
    `,
    image: null,
  },
  
  {
    title: "Simple Things. Simple Pleasures. — Categories & Archives (sidebar content)",
    content: `
      <h3>Blog Categories</h3>
      <ul>
        <li>Bumps in the Road</li>
        <li>Crafty Things</li>
        <li>Day Trips with Kids</li>
        <li>Digital Detox</li>
        <li>Finances</li>
        <li>Growing Food and Urban Gardens</li>
        <li>Home DIY</li>
        <li>Images</li>
        <li>Living Simple</li>
        <li>Love</li>
        <li>MUSIC</li>
        <li>Parenting</li>
        <li>Pebble Art</li>
        <li>Personal Budgeting</li>
        <li>T Dot The City With Kids</li>
        <li>Uncategorized</li>
        <li>Well being</li>
      </ul>
      <h3>Archives</h3>
      <ul>
        <li>December 2019</li>
        <li>October 2019</li>
        <li>July 2019</li>
        <li>June 2019</li>
        <li>May 2019</li>
        <li>March 2019</li>
        <li>December 2018</li>
        <li>July 2018</li>
        <li>June 2018</li>
        <li>May 2018</li>
        <li>February 2018</li>
        <li>January 2018</li>
        <li>December 2017</li>
        <li>November 2017</li>
        <li>October 2017</li>
        <li>August 2017</li>
        <li>July 2017</li>
        <li>April 2017</li>
        <li>March 2017</li>
        <li>February 2017</li>
        <li>January 2017</li>
        <li>December 2016</li>
        <li>November 2016</li>
        <li>October 2016</li>
        <li>September 2016</li>
        <li>August 2016</li>
        <li>July 2016</li>
        <li>June 2016</li>
        <li>May 2016</li>
        <li>April 2016</li>
        <li>March 2016</li>
        <li>February 2016</li>
        <li>January 2016</li>
        <li>December 2015</li>
        <li>November 2015</li>
        <li>October 2015</li>
        <li>September 2015</li>
        <li>August 2015</li>
        <li>July 2015</li>
        <li>April 2015</li>
      </ul>
    `,
    image: null,
  },
  
  {
    title: "Simple Things. Simple Pleasures. — Site Navigation (sidebar content)",
    content: `
      <h3>Site Navigation</h3>
      <ul>
        <li>BLOG</li>
        <ul>
          <li>Living Simple</li>
          <li>Well being</li>
          <li>Digital Detox</li>
          <li>Finances</li>
          <li>Love</li>
          <li>Bumps in the Road</li>
          <li>Growing Food and Urban Gardens</li>
          <li>Laneway and Street Art</li>
        </ul>
        <li>ABOUT</li>
        <li>ROCK ART</li>
        <li>Parenting</li>
        <li>CONTACT</li>
        <li>SUBSCRIBE</li>
        <li>UPDATES</li>
      </ul>
    `,
    image: null,
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
          <BlogPost key={idx} title={post.title} content={post.content}  />
        ))}
      </main>
    </div>
  );
}
