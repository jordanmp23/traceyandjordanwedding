import PageHero from "../components/page_hero_components/page_hero";
import eventPageImg from "../assets/engagement_walking.jpg";
import venueImg from "../assets/cana_vineyards.jpg";
import PhotoTextBlock from "../components/editorial/PhotoTextBlock";
import SectionIntro from "../components/editorial/SectionIntro";
import WeddingTimeline from "../components/editorial/WeddingTimeline";
import FullBleed from "../components/editorial/FullBleed";

function Event() {
  return (
    <>
      <PageHero title="Events" image={eventPageImg} position="85% 0%" />

      <section className="editorial-intro">
        <SectionIntro
          eyebrow="A day to slow down, celebrate, and stay awhile."
          title="June 5, 2027 · Middleburg, Virginia"
          align="center"
          body={
            <p>
              We are so excited to gather everyone we love in one place. Here is what the day will look like,
              from the first hello to the final dance.
            </p>
          }
        />
      </section>

      <section className="editorial-section editorial-section--ivory">
        <PhotoTextBlock
          eyebrow="01 · The Venue"
          title="Cana Vineyards"
          image={venueImg}
          imageAlt="Cana Vineyards"
          caption="Middleburg, Virginia"
        >
          <p>
            <b>6 p.m. - 11 p.m.</b>
          </p>
          <p>
            The ceremony begins promptly at 6pm. Cocktail hour and the reception will follow immediately after.
          </p>
          <p>
            Transportation will be provided to and from the reserved hotel. Parking is also available at the venue.
          </p>
          <a
            className="editorial-button"
            href="https://maps.app.goo.gl/ML5vwPuG9z3ShByD6"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps <span aria-hidden="true">↗</span>
          </a>
        </PhotoTextBlock>
      </section>

      <section className="editorial-section editorial-section--cream">
        <SectionIntro
          eyebrow="02 · The Evening"
          title="The shape of the celebration."
          align="center"
          body={<p>Four simple moments, with plenty of room for the important part: being together.</p>}
        />

        <WeddingTimeline
          items={[
            {
              time: "6:00 PM",
              title: "Ceremony",
              description: "Join us in the vineyard as we make it official.",
            },
            {
              time: "Immediately after",
              title: "Cocktail Hour",
              description: "Drinks, conversation, and a little time to take in the view.",
            },
            {
              time: "7:30 PM",
              title: "Reception",
              description: "Dinner, toasts, dancing, and everything we have been looking forward to.",
            },
            {
              time: "11:00 PM",
              title: "Goodnight",
              description: "Shuttles return to the hotel as the evening winds down.",
            },
          ]}
        />

        <div className="editorial-section__cta">
          <p className="page-kicker">Dress code · Colorful cocktail attire</p>
        </div>
      </section>

      <FullBleed
        image={eventPageImg}
        imageAlt="Tracey and Jordan walking together"
        eyebrow="03 · See you there"
        title="We cannot wait to celebrate with you."
      >
        <p>Bring something colorful, bring your dancing shoes, and leave a little room for a late night.</p>
        <div style={{ marginTop: "1.5rem" }}>
          <a className="editorial-button editorial-button--light" href="/rsvp">
            RSVP <span aria-hidden="true">→</span>
          </a>
        </div>
      </FullBleed>
    </>
  );
}

export default Event;
