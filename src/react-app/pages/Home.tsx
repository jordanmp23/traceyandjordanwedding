function Home() {
	return (
		<section className="page page-home">
			<div className="page-inner">
				<h2 className="page-title">Welcome</h2>
				<p className="page-lead">
					We're so excited you're here. Below you'll find everything you need
					to celebrate with us — and we can't wait to share the day with you.
				</p>

				<div className="card-grid">
					<article className="info-card">
						<h3>The Ceremony</h3>
						<p>
							Date and time to be announced. Please check back soon for full
							details about the ceremony and reception.
						</p>
					</article>
					<article className="info-card">
						<h3>Dress Code</h3>
						<p>
							Garden-formal attire. Think soft palettes, breathable fabrics,
							and shoes you can dance in.
						</p>
					</article>
					<article className="info-card">
						<h3>Questions?</h3>
						<p>
							Reach out to either of us directly, or check the Location and
							Accommodations pages for the most common answers.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Home;
