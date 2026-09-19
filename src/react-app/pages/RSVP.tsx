import PageHero from "../components/page_hero_components/page_hero";
import rsvpImg from "../assets/cana_vineyards.jpg";

function RSVP() {
	return (
		<>
			<PageHero title="RSVP" image={rsvpImg} position="65% 20%" />

			<section className="page">
				<div className="page-inner narrow">
					<h2 className="page-title">RSVP</h2>

					<p className="page-lead">
						Please let us know whether you can make it. We can't wait to
						celebrate with you!
					</p>

					<div className="callout">
						<h3>Coming soon</h3>
						<p>
							Details on how to RSVP will be here once those details are ready.
							Stay tuned!
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default RSVP;
