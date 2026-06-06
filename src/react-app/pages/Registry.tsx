import PageHero from "../components/page_hero_components/page_hero";
import eventPageImg  from "../assets/engagement_walking.jpg"

function FAQ() {
	return (
		<>
			<PageHero title="Registry" image={eventPageImg} position="85% 20%" />		
			<section className="page">
				<div className="page-inner">
					<h2 className="page-title">Registry</h2>
					<p className="page-lead">
						Find out about our registry and how to contribute to our new life together.
					</p>
				</div>
			</section>
		</>
	);
}

export default FAQ;
