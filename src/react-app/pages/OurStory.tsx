import PageHero from "../components/page_hero_components/page_hero";
import ourStoryImg  from "../assets/vt_pic.jpg"

function OurStory() {
	return (
		<>
			<PageHero title="Our Story" image={ourStoryImg} position="85% 20%" />
			<section className="page">
				<div className="page-inner narrow">
					<h2 className="page-title">Our Story</h2>
					<p className="page-lead">
						A short version of how we met, fell in love, and decided to throw a
						party about it.
					</p>

					<div className="timeline">
						<div className="timeline-item">
							<h3>How We Met</h3>
							<p>
								Placeholder text about how we first crossed paths. Replace with
								the real story — coffee shop, mutual friend, dog park, etc.
							</p>
						</div>
						<div className="timeline-item">
							<h3>First Adventure</h3>
							<p>
								Placeholder text about an early trip or memory that made it
								feel serious. Add a favorite photo here later.
							</p>
						</div>
						<div className="timeline-item">
							<h3>The Proposal</h3>
							<p>
								Placeholder text about the proposal — the where, the how, and
								the immediate reaction.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default OurStory;
