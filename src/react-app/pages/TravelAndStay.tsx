import PageHero from "../components/page_hero_components/page_hero";
import appalachianMtnImg  from "../assets/Appalachian-Mountains.webp"

function TravelAndStay() {
	return (
		<>
			<PageHero title="Travel + Stay" image={appalachianMtnImg} position="85% 20%" />		
			<section className="page">
				<div className="page-inner">
					<h2 className="page-title">Travel & Stay</h2>
					<div className="card-grid">
						<article className="info-card">
							<h3>SpringHill Suites by Marriot - Ashburn Dulles North</h3>
							<p className="card-meta">Approx. 30 minutes from venue</p>
							<p>
								Convienently located just a few minutes from Dulles Aiport (IAD)<br></br>
								For your convience, we have reserved a block of rooms at this location. To book and get the group rate, click <a href="https://urldefense.com/v3/__https://app.marriott.com/resview2?id=1787066789396&key=GRP&app=resvlink__;!!FOfmI8qiWcWBHqypJtzENF0!0pD4hSEfoC4sLYUUi_pcPtb4jgesFp2cpQsuSX8VMYSk-F8aqCq4d2oD48t16ZFrAMLxkDpIGxfQ8JAPgnTubWFQTy9XJLdV1A$">here</a>
							</p>
							<p className="card-detail"> $175-199 / night · Book by May 04, 2027</p>
						</article>

					</div>

					<div className="callout">
						<h3>Getting Around</h3>
						<p>
							We're planning to provide a shuttle between the SpringHill Suites and
							the venue. Details to come.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default TravelAndStay;
