import PageHero from "../components/page_hero_components/page_hero";
import rsvpImg from "../assets/cana_vineyards.jpg";

function RSVP() {
  return (
    <>
      <PageHero title="RSVP" image={rsvpImg} position="65% 20%" />

      <section className="page">
        <div className="page-inner">
          <h2 className="page-title">RSVP</h2>

          <p className="page-lead">
            Please let us know whether you can make it. We can't wait to celebrate
            with you!
          </p>

          <div className="rsvp-container">
            <iframe
              title="Wedding RSVP"
              src="https://traceyandjordanswedding.rsvpify.com"
              loading="lazy"
              width="100%"
              height="1200"
              frameBorder="0"
              style={{
                border: "none",
                borderRadius: "12px",
                background: "white",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default RSVP;