import PageHero from "../components/location_components/page_hero";
	// import gardenWeddingImg from "../assets/GardenWedding.jpg";
import eventPageImg  from "../assets/event_page.jpg"

function Event() {
	return (
		<>
			<PageHero title="Events" image={eventPageImg} position="85% 20%" />

			<section className="page page-event">
				<div className="page-inner">
					<h2 className="event-section-title">Wedding Day</h2>
					<hr />
					<p className="event-time">June 5, 2027 ~ 6-11pm</p>

					<div className="venue-block">
						<h3>Ceremony &amp; Reception</h3>
						<p className="venue-name">Cana Vineyards</p>
						<p className="venue-address">
							<a href="https://maps.app.goo.gl/ML5vwPuG9z3ShByD6">
								38600 Little River Tpke
								<br />
								Middleburg, VA 20117
							</a>
						</p>
						<p>
							Ceremony will begin promptly at 6pm.
							<br />
							Cocktail hour and reception to follow immediately after the
							ceremony.
							<br />
							Transportation will be provided to and from the venue; details
							can be found on our FAQ page. Parking is also available for those
							who wish to drive.
						</p>
						<p className="dress-code">Dress code is cocktail attire.</p>
					</div>

					<h2 className="event-section-title">The Day Before</h2>
					<hr />
				</div>
			</section>
		</>
	);
}

export default Event;
