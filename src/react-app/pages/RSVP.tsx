import PageHero from "../components/page_hero_components/page_hero";
import rsvpImg from "../assets/cana_vineyards.jpg";
import taraTreeImg from "../assets/taraTree.png"
import SectionIntro from "../components/editorial/SectionIntro";

function RSVP() {
  return (
    <>
      <PageHero title="RSVP" image={rsvpImg} position="65% 20%" />

      <section className="editorial-section editorial-section--cream">
        <SectionIntro
          eyebrow="01 · Save your seat"
          title="We hope you can join us."
          align="center"
          body={
            <p>
              RSVP details will be available here once the invitation and guest list are finalized.
            </p>
          }
        />

        <div className="invitation-shell">
          <div className="invitation-shell__image">
            <img src={taraTreeImg} alt="Cana Vineyards" />
          </div>
          <div className="invitation-shell__content">
            <p className="invitation-shell__eyebrow">June 5, 2027 · Middleburg, Virginia</p>
            <h2 className="invitation-shell__title">You are invited.</h2>
            <p className="invitation-shell__body">
              Details on where and when to RSVP are coming soon... Stay tuned!
            </p>
            <p className="invitation-shell__note">
              {/* Placeholder: replace this section with the invitation lookup form once the RSVP backend is connected. */}
            </p>
            <div style={{ marginTop: "1.7rem" }}>
              <span className="editorial-button">RSVP opening soon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RSVP;
