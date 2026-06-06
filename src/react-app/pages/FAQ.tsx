import PageHero from "../components/page_hero_components/page_hero";
import faqImg  from "../assets/cana_vineyards.jpg"


function FAQ() {
	return (
		<>
			<PageHero title="FAQ" image={faqImg} position="65% 20%" />
			<section className="page">
				<div className="page-inner">
					<h2 className="page-title">FAQ</h2>
					<p className="page-lead">
						Frequently asked questions about the venue, parking, transportation, and more.
					</p>

					<div className="card-grid">
						<article className="info-card">
							<h3>todo...</h3>
							<p>
								stuffs
							</p>
						</article>

						<article className="info-card">
							<h3>another question</h3>
							<p>
								another answer
							</p>
						</article>
					</div>
				</div>
			</section>
		</>
	);
}

export default FAQ;
