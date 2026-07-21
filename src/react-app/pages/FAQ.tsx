import PageHero from "../components/page_hero_components/page_hero";
import faqImg from "../assets/cana_vineyards.jpg";

function FAQ() {
	return (
		<>
			<PageHero title="FAQ" image={faqImg} position="65% 20%" />
			<section className="page">
				<div className="page-inner">
					<h2 className="page-title">FAQ</h2>
					<p className="page-lead">
						Frequently asked questions about the venue, parking, transportation,
						and more.
					</p>

					<div className="faq-list">
						<article className="info-card">
							<h3>What time should I arrive?</h3>
							<p>
								The ceremony will start promptly at 6pm, so please plan to
								arrive with enough time to find a seat and get settled before
								everything starts.
							</p>
						</article>

						<article className="info-card">
							<h3>Will transportation be provided?</h3>
							<p>
								Yes! A shuttle will run between the wedding block hotel and the
								venue. We will share exact pick-up and drop-off times as it gets
								closer.
							</p>
						</article>

						<article className="info-card">
							<h3>
								If I am not using the provided transportation, is parking
								available?
							</h3>
							<p>
								Yes, plenty of parking is available on site at the venue. If you
								are planning on drinking alcohol, please make other plans prior
								to the event to get home rather than driving. There are not many
								Ubers available in Middleburg, VA.
							</p>
						</article>

						<article className="info-card">
							<h3>Where and when should I RSVP by?</h3>
							<p>
								Please RSVP by the date provided on your invitation sent by
								mail. You can RSVP on our wedding website, at{" "}
								<a href="https://traceyandjordan.com">traceyandjordan.com</a>.
							</p>
						</article>

						<article className="info-card">
							<h3>What should I do if I can't make it?</h3>
							<p>
								We'll miss celebrating with you! If you or others in your party
								are unable to attend please RSVP "no" as soon as possible so we
								can plan accordingly.
							</p>
						</article>

						<article className="info-card">
							<h3>Is the wedding indoors or outdoors?</h3>
							<p>
								Weather permitting, the ceremony will take place in the
								vineyard, cocktail hour will take place under a covered patio
								and the reception will take place in a covered pavilion.
							</p>
						</article>

						<article className="info-card">
							<h3>What is the dress code?</h3>
							<p>
								Yes! Please wear colorful cocktail attire. Please no denim,
								hats, or flip flops. We are expecting the temperature to be
								fairly warm so lighter fabrics are recommended.
							</p>
							<p>
								For the ladies, please note that the ceremony will most likely
								take place on grass. Please plan your footwear accordingly.
							</p>
						</article>

						<article className="info-card">
							<h3>Can I bring children?</h3>
							<p>
								Yes! Children are welcome, but please let us know when you RSVP
								so we can plan accordingly. Also, let us know if you will need a
								high chair.
							</p>
						</article>

						<article className="info-card">
							<h3>Can I bring a plus one?</h3>
							<p>
								If a plus one has been extended, it will be noted on your
								invitation. Thank you for understanding.
							</p>
						</article>

						<article className="info-card">
							<h3>Food allergies and dietary restrictions?</h3>
							<p>
								Please note any food allergies or dietary restrictions when you
								RSVP on our website.
							</p>
						</article>

						<article className="info-card">
							<h3>Don't see your question here?</h3>
							<p>
								Please email{" "}
								<a href="mailto:traceyandjordan15@gmail.com">
									traceyandjordan15@gmail.com
								</a>{" "}
								for any wedding logistics or other questions that come up while
								planning.
							</p>
						</article>
					</div>
				</div>
			</section>
		</>
	);
}

export default FAQ;
