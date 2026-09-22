import PageHero from "../components/page_hero_components/page_hero";
import ourStoryImg from "../assets/vt_pic.jpg";
import howWeMetImg from "../assets/TJ_FB_Game.jpg";
import sunsetKiss from "../assets/mexico_wedding.jpg";
import smileEyes from "../assets/TraceyEngagementSmile.jpg";
import proposalImg from "../assets/proposalKnee.jpg";
import PhotoTextBlock from "../components/editorial/PhotoTextBlock";
import FullBleed from "../components/editorial/FullBleed";

function OurStory() {
  return (
    <>
      <PageHero title="Our Story" image={ourStoryImg} position="48% 20%" />
      <section className="editorial-section editorial-section--ivory">
        <PhotoTextBlock
          eyebrow="01 · How We Met"
          title="Fall 2015 - Blacksburg, VA"
          image={howWeMetImg}
          imageAlt="Tracey and Jordan at Virginia Tech"
          caption="One of many football games"
        >
          <p>
            Our story began in the fall of 2015 nestled in the beautiful mountain town of Blacksburg, VA. We both started freshman year at Virginia Tech. 
            Neither of us knew a single other person, but that didn't stop us from making friends. Within the first week of classes, we crossed paths when meeting mutual friends for some ice cream at Deets! 
          </p>

          <p>
            By spring of freshman year, we had become best friends - inseparable. We took many long hikes on Appalachian trails, spending hours on end talking and getting to know each other. 
          </p>

          <p>
            Somewhere along the way, Jordan fell for Tracey's kindness, intelligence, and completely authentic nature. Tracey loved Jordan's sense of humor, adventurous spirit, and enthusiasm for the things he cared about. 
            As everyone around us had been predicting for many months, we finally started dating winter of sophomore year. 
            Many amazing memories were made in Blacksburg going to football games, studying together on campus and all the little moments in between that made those years so special.
          </p>
        </PhotoTextBlock>
      </section>


      <FullBleed
        image={smileEyes}
        imageAlt="Tracey and Jordan together"
        eyebrow=""
        title="And then came the part where forever became the plan."
        className="full-bleed--proposal"
      >

      </FullBleed>

      <section className="editorial-section editorial-section--ivory">
        <PhotoTextBlock
          eyebrow="02 · The Proposal"
          title="The Proposal"
          image={proposalImg}
          imageAlt="Jordan Proposing"
          reverse
          caption="Oh! My! God!"
        >
          <p>
            Jordan proposed to Tracey on a beautiful day on the beach in San Francisco. With the help of our friends Tara and Alexis, Jordan managed to completely surprise Tracey. We celebrated with a champagne toast on the beach and a fun filled evening out.
          </p>
        </PhotoTextBlock>
      </section>

      <section className="editorial-section editorial-section--cream">
        <PhotoTextBlock
          eyebrow="03 · Now"
          title="The next chapter starts June 5, 2027."
          image={sunsetKiss}
          imageAlt="Tracey and Jordan at Tara's Wedding"
          reverse
          caption="<3"
        >
          <p>
            We are so excited to celebrate our love and marriage with friends and family in the beautiful Appalachian mountains where we first met. 
          </p>
          <p>
            We don’t know where life will take us next, and we are so grateful to be able to do it all together with the support of everyone in our lives. 
          </p>
        </PhotoTextBlock>
      </section>
    </>
  );
}

export default OurStory;
