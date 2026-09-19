import PageHero from "../components/page_hero_components/page_hero";
import ourStoryImg from "../assets/vt_pic.jpg";
import engagementWalking from "../assets/engagement_walking.jpg";
import engagementHug from "../assets/engagement_hug.jpg";
import SectionIntro from "../components/editorial/SectionIntro";
import PhotoTextBlock from "../components/editorial/PhotoTextBlock";
import FullBleed from "../components/editorial/FullBleed";

function OurStory() {
  return (
    <>
      <PageHero title="Our Story" image={ourStoryImg} position="48% 20%" />

      <section className="editorial-intro">
        <SectionIntro
          eyebrow="01 · The beginning"
          title="A short version of how we got here."
          align="center"
          body={
            <p>
              Replace these placeholders with the real story whenever you are ready. The layout is designed to let
              the photographs and the story breathe together.
            </p>
          }
        />
      </section>

      <section className="editorial-section editorial-section--ivory">
        <PhotoTextBlock
          eyebrow="02 · How We Met"
          title="It started somewhere ordinary."
          image={ourStoryImg}
          imageAlt="Tracey and Jordan at Virginia Tech"
          caption="PLACEHOLDER · Add a caption"
        >
          <p>
            Placeholder text about how we first crossed paths. Replace this with the real story — the place, the
            people who were there, and the little detail neither of you forgot.
          </p>
          <p>
            Keep this section conversational. It should feel more like a favorite memory than a formal biography.
          </p>
        </PhotoTextBlock>
      </section>

      <section className="editorial-section editorial-section--cream">
        <PhotoTextBlock
          eyebrow="03 · First Adventure"
          title="Then life started collecting memories."
          image={engagementWalking}
          imageAlt="Tracey and Jordan walking together"
          reverse
          caption="PLACEHOLDER · Favorite trip or memory"
        >
          <p>
            Placeholder text about an early trip, favorite weekend, or moment that made the relationship feel like a
            real part of everyday life.
          </p>
          <p>One or two short paragraphs works beautifully here.</p>
        </PhotoTextBlock>
      </section>

      <FullBleed
        image={engagementHug}
        imageAlt="Tracey and Jordan together"
        eyebrow="04 · The Proposal"
        title="And then came the part where forever became the plan."
      >
        <p>
          Placeholder text about the proposal — where it happened, what the plan was, and what happened immediately
          after.
        </p>
      </FullBleed>

      <section className="editorial-section editorial-section--paper">
        <SectionIntro
          eyebrow="05 · Now"
          title="The next chapter starts June 5, 2027."
          align="center"
          body={
            <p>
              Thank you for being part of the story so far. We cannot wait to have everyone we love together in one
              place.
            </p>
          }
        />
      </section>
    </>
  );
}

export default OurStory;
