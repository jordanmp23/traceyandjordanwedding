import PageHero from "../components/page_hero_components/page_hero";
import appalachianMtnImg from "../assets/Appalachian-Mountains.webp";
import venueImg from "../assets/cana_vineyards.jpg";
import SectionIntro from "../components/editorial/SectionIntro";
import PhotoTextBlock from "../components/editorial/PhotoTextBlock";
import FullBleed from "../components/editorial/FullBleed";

function TravelAndStay() {
  return (
    <>
      <PageHero title="Travel + Stay" image={appalachianMtnImg} position="85% 20%" />

      <section className="editorial-intro">
        <SectionIntro
          eyebrow="01 · Getting here"
          title="A little trip to the Virginia countryside."
          align="center"
          body={
            <p>
              We have a hotel block near Dulles and plan to provide transportation between the hotel and venue.
            </p>
          }
        />
      </section>

      <section className="editorial-section editorial-section--ivory">
        <PhotoTextBlock
          eyebrow="02 · Where to stay"
          title="SpringHill Suites by Marriott"
          image={appalachianMtnImg}
          imageAlt="Virginia mountains"
          caption="Approx. 30 minutes from the venue"
        >
          <p>
            SpringHill Suites by Marriott — Ashburn Dulles North is conveniently located a few minutes from Dulles
            International Airport (IAD).
          </p>
          <p>
            We have reserved a block of rooms here for guests. The current room rate is approximately $175–199 per
            night. Please book by May 4, 2027 to receive the group rate.
          </p>
          <a
            className="editorial-button"
            href="https://app.marriott.com/resview2?id=1787066789396&key=GRP&app=resvlink"
            target="_blank"
            rel="noreferrer"
          >
            Book the hotel <span aria-hidden="true">↗</span>
          </a>
        </PhotoTextBlock>
      </section>

      <section className="editorial-section editorial-section--cream">
        <SectionIntro
          eyebrow="03 · The details"
          title="Getting around should be the easy part."
          body={
            <>
              <p>
                We are planning to provide a shuttle between the hotel and Cana Vineyards. Exact pickup and return
                times will be shared closer to the wedding.
              </p>
              <p>
                Guests who choose to drive can park at the venue. Because rideshares are limited in Middleburg, we
                strongly recommend using the provided transportation if you plan to drink.
              </p>
            </>
          }
        />
      </section>

      <FullBleed
        image={venueImg}
        imageAlt="Cana Vineyards"
        eyebrow="04 · The destination"
        title="Leave a little room for the view."
      />
    </>
  );
}

export default TravelAndStay;
