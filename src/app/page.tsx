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
    title: "Grandparents I Adored",
    content: `
      <p>I often feel so connected to older people. I see their childlike characters peeking through their weathered and wrinkled faces and I love being there for those moments. I also feel a lot of empathy for how challenging it must be to age.</p>
      <p>This page is dedicated to all the older people that have touched my life or the lives of others (so feel free to contribute by adding a comment below. I would love to hear your stories!). Maybe by all sharing in their memories, wisdom, life stories and experiences, we can keep our memories and their legacies alive!</p>
      <p>So this is to all of you “older” folks, starting with my grandmothers!</p>
      <h3>Omi:</h3>
      <p>I miss going to your house, talking so freely, and openly. I could be my true self, showing my true thoughts, excitements, worries, uncertainties, and questions. I felt understood, unconditionally loved, best of friends – whether strong or weak. “When one is tired or weak, they can only be with the people whom they can be completely honest, completely oneself“. – Anne Morrow Lindburgh</p>
      <p>That is how I felt with Omi, I could always be my true self. I miss coming over chatting and eating. Your food was delectable and comforting. From “spinach” crepe pies, to shredded egg salad, homemade eggplant/ baba-ganoush, cabbage rolls to melt in your mouth deserts (my favourite was your profiteroles).</p>
      <p>Or our times laughing and giggling together like young girls. I remember one time we were on our way somewhere in Scarborough (I can’t for the life of me remember why we were there!), but of course I got lost and then we were late. I looked over at you and you had such a giddy look on your face and said “don’t worry, even if we miss 20 exits, we will be fine..i don’t want to go there anyways.” Then both of us started laughing. Eventually, I found wherever we were going, and you walked out of the car with a huge smirk that just looked like you had so much fun. I loved it and I had so much fun too.</p>
      <p>I miss you dear Omi.</p>
      <h3>Grandma Medy:</h3>
      <p>I miss showing up at your front door and seeing the look on your face: surprise, gratitude, appreciation, excitement and love.</p>
      <p>Then you welcoming me with open arms in your track suit. It was precious. We would sit at your kitchen table, chatting like high school girlfriends. Sitting with you, whether as a young girl or young adult is still so vivid in my mind, yet it is so long ago. I feel like it was yesterday, yet it was 5 years ago since what would be the last time I would see you.</p>
      <p>I miss telling about my day, my thoughts, my concerns, you telling me comforting stories about your friends (all seniors with names I couldn’t pronounce) and giving me advice while always having my interests at heart. I always left your house positive, optimistic and with a smile on my face.</p>
      <p>I miss your voice messages and getting 5 of them at the same time.</p>
      <p>I miss you calling me at work to tell me that someone wants to be your friend on Facebook and that I should come right away after work to accept, because you wanted to be her friend too.</p>
      <p>I miss you teaching me how to cook and estimating all the measurements.</p>
      <p>My friends used to be in awe how much I enjoyed spending time with you and just hanging out.</p>
      <p>I miss sitting at your round table in your kitchen, eating an omelet with feta that you just whipped up for me when I showed up unexpectedly for dinner. Then, going into your “secret” cupboard to pretend to sneak some mini chocolate bars (that you kept up there for me) or chocolate pudding.</p>
      <p>I miss going to United Bakery restaurant with you (the “Bakery”, as you used to call it), us each getting the salmon dinner “with Pam”, chatting, and then you ordering 2 chocolate chip cookies for me every time at the end of our meal. I would protest and say I didn’t want them and you would order them anyways. I would of course eat them in bliss.</p>
      <p>I miss you my special Grandma.</p>
      <h3>Grandpa Nomy:</h3>
      <p>Grandpa, I miss you. It’s been close to 15 years you have been gone. I still feel your presence so strongly in my spirit.</p>
      <p>You always said to me “anything for my Shirikoo”. Thank you for giving me so much love and wisdom, fun and care. Thank you for all our “moments” – glida, packman, pick ups, music and singing. So often I think about you singing the melodies of all your favourite composers and songs to me in the car. I miss you.</p>
      <p>Grandpa, when I turned 16 you used to “slip” me $100 once a month for what you said was “spending money”. The $100 you gave me the last time I saw you when I was 21 years old and not knowing it would be the last time I saw you, I had not yet spent on the day you died, in November 1999. After you passed away, I put it in an envelope and put it away. I had completely forgot about it over the years, until recently, when I was cleaning out my old boxes and look what I found: The last $100 you slipped me in November 1999. I am so happy I kept it. It makes me feel secure and like you are still with me.</p>
      <p>I love you Grandpa.</p>
      <h3>Gigi:</h3>
      <p>Gigi, although I never met you, I heard a lot about you from my dear friend Sari. You were her great-grandmother and best friend. Although I never got the opportunity to meet you, I learned a lot about you and I learned so much from you, just reading what Sari wrote in memory of you. Here it is:</p>
      <p>Gigi (1903-2008)</p>
      <p>Gigi is short for great-grandmother, but instead of spelling it G.G. as the abbreviation would imply, our Gigi signed her cards “G-i-g-i” like the 1958 romantic comedy Gigi.</p>
      <p>Gigi was one of the few people who could declare, “Darling, you look stunning” and not sound like a complete phony.</p>
      <p>We all know Gigi was very interested in her appearance and kept a strict beauty shop schedule. She always put herself together, even when no one was around, because it made her feel good. She would never be caught dead even in the privacy of her own house in a pair of torn sweat pants and an unflattering t-shirt. She wanted to look good, period. But this aesthetic and fashionable quality wasn’t without a balanced depth of spirit. She read books by the Dalai Lama and talked with my Mom about various meditation techniques. She felt a deep, spiritual undercurrent of life.</p>
      <p>She would not like me saying so, but since we’re interested in her secrets of aging well and staying alive, I’ll share one of hers that seems to be one of the most important. She liked herself. She thought she was “really something,” and genuinely got a kick out of herself. If you don’t like yourself, how can you have any fun? And when reflecting upon her life, she would usually end the story or conversation by saying, “I had so much fun.”</p>
      <p>“Listen sweetheart,” she said in that calm, measured voice, “Take care of yourself. Don’t worry about anything. Just take what you have in your interlude of life, accept it and feel good.” She was somehow able to avoid stress, which doubtlessly helped her get to 104. Of course genetics played a part (thank God), but she very rarely, if ever, got herself overly worked up or frazzled over the nonsense of life. She conserved her energy. I try (try) to apply her behavioral skills in my own life…live life with a light touch, don’t get upset, etc. Be calm. (!!!) Easier said than done, but for the most part, she did!</p>
      <p>Gigi kept up with the times, never lamenting “the good old days,” but rather living from moment to moment, owning this era as much as the 20’s, 30’s, 40’s, or 50’s. She was not threatened by change; she embraced it. She did not fear the future; she took part in it. She read the paper everyday without fail. She loved watching presidential debates and engaging in world events. Last I heard she was on the fence between Hillary and Obama. She knew that age was in the mind.</p>
      <p>She used to say she was “from the horse and buggy days.” As a writer, I loved spending time with her because of her antiquated vernacular…I often wrote down the little phrases she said, like, “He was a real stage-door Johnny,” which refers to “an audience member, often shy and unadventurous, who is infatuated with a performer, and who hangs around the stage door in hopes of getting an autograph and striking up a conversation. (See also groupie.)” Without a doubt, she was referring to one of her many suitors.</p>
      <p>“Boy, I hope you won’t be like me,” she said in one conversation. “Too many men.” She then confessed, “I had a lot of men who were in love with me.” But it might have also worked the other way around…she readily fell in love, as her progression of last names can attest. Having a steady stream of crushes and flirting into her 90’s and beyond was literally what kept her blood pumping. And if you happened to have an M.D. behind your name, look out. Her latest mini-crush was my boyfriend Barry’s father Les, a doctor. He walked into her hospital bedroom last week, and she sat right up, flashed her winning smile with a brilliant gleam in her eye, and told him what a marvelous sense of humor she felt he had.</p>
      <p>“Find a man who can dance,” she warned. “It’s so important. You have to make a man feel as if he’s ten feet tall.” She said that being in love is what kept her alive. She was in love with life. She was in love with the sunshine, the warm weather, her lemon tree…if she liked a particular restaurant she had discovered, she would report, “Oh, I have such a crush on Café Bijou.” She lived in love.</p>
      <p>Without a doubt, Gigi’s life was full. She packed in as much as she could by fully living each moment. Last week, Barry remarked that Gigi seemed to have absolutely no fear of dying. She was ready for whatever was coming next. She said she wanted to just “float away on a cloud.” In her later years she worried that she would “just keep going on and on and on…”</p>
      <p>Of course her Energizer Bunny batteries finally did run out. But we have been fortunate enough to experience the steadfastness of her presence for so many years. It seemed as if she would always be here, like an ageless Yoda reclining on a chaise lounge under a kumquat tree, with a pouffy hairdo and coral painted nails. A visit with Gigi felt like she was bestowing a simple blessing; may you, too live a long, healthy, vibrant, and beauty-filled life.</p>
      <p>When the generation above you passes on, it feels as if you’re getting a job promotion, or a life promotion…you’re moved one notch higher up on the chain. Maybe this is what “growing up” refers to. A few months ago, my godfather lost his mother, who was around 102. I wrote to him this week to let him know about Gigi, and his wise response applies to all of us. He wrote, “Her life force now becomes your life force. Be the Gigi for those around you. And that will not just do her proud, but ensure that her legacy is your legacy.”</p>
      <p>So I wish all of us lengthy, healthy, vibrant, and beauty-filled lives. And as Gigi always said when ending a conversation, “Just be happy.”</p>
      <div class="meta">
        <p><strong>Posted on:</strong> April 19, 2015</p>
        <p><strong>Author:</strong> Shiri</p>
        <p><strong>Categories:</strong> Love</p>
      </div>
    `,
    image: null,
  },
  
  {
    title: "I Miss Landlines",
    content: `
      <p>I miss the time when we all had landlines. Where you could go out, free of cell phones and gadgets; no one could reach you and there were no interruptions by flashing little red lights, buzzes or beeps to draw you away from what you were doing or seeing.</p>
      <p>Pre cell phones, it was easier to be immersed in the moment. Immersed in the conversation of the person you were with, immersed in the sights and sounds of your surroundings. You were “out”. When you got home, you pressed the green “play” button on your answering machines, returned any calls you felt like returning and that was that. Simple as that.</p>
      <p>Do you remember those times? It was only 15 years ago or so!</p>
      <p>There was nothing to interrupt brunch with a friend, an afternoon out exploring the city, or park time with your kids. Nothing to do on the bus, but look out the window, observe people going about their day or the scenery passing by. You had moments to be alone with your thoughts and nothing to do but be in the moment. I miss those times.</p>
      <p>Now, on our plate, we return:</p>
      <ul>
        <li>emails</li>
        <li>texts</li>
        <li>BBMs</li>
        <li>Facebook likes or posts</li>
        <li>work correspondence</li>
        <li>family correspondence</li>
        <li>home voice mails</li>
        <li>Cell voice mails</li>
      </ul>
      <p>Doesn’t that list seem like a lot of extra things we now all need to address? Is all this technology actually making our lives easier? I sometimes feel like it gives us more to do!</p>
      <p>I have started lately to experiment with setting up my own “technology boundaries”. I disabled the email and browser access on my phone, I check my voice mail only once per day, and I keep my phone on silent (not vibrate, but silent).</p>
      <p>This drives some people (especially my almost retired parents) a bit crazy, but I think those around me have have grown to accept it and realize that I much prefer talking to people in person, even if less frequent. Don’t get me wrong, if there is an emergency, important matter or anyone needs immediate support, people know to call me twice (I would see the missed calls) and text me as I do check my texts at various intended times in the day – such that I can get back to them asap. Setting these cell phone boundaries was challenging at first, but now, the expectation is set and people do not expect me to be available 24 hours a day; they just assume I am out and about enjoying my day, working, or fully focused on my kids.</p>
      <p>So far, so good =)</p>
      <div class="meta">
        <p><strong>Posted on:</strong> April 15, 2015</p>
        <p><strong>Author:</strong> Shiri</p>
        <p><strong>Categories:</strong> Digital Detox, Living Simple, Love, Well being</p>
      </div>
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
