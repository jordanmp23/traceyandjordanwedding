function TravelAndStay() {
	return (
		<section className="page">
			<div className="page-inner">
				<h2 className="page-title">Travel & Stay</h2>
				<p className="page-lead">
					We've reserved a handful of room blocks at hotels near the venue.
					TODO(Jordan): Add details about the hotel(s?)
				</p>

				<div className="card-grid">
					<article className="info-card">
						<h3>The Placeholder Hotel</h3>
						<p className="card-meta">Approx. 5 minutes from venue</p>
						<p>
							Cozy boutique hotel with a charming on-site cafe(Cuppa Giddy Up). Mention the
							"Tracey &amp; Jordan" block at booking for the group rate.
						</p>
						<p className="card-detail">From $TBD / night · Book by TBD</p>
					</article>

					<article className="info-card">
						<h3>Another Placeholder Inn???</h3>
						<p className="card-meta">Approx. 10 minutes from venue</p>
						<p>
							A larger property with a pool and on-site dining. Good option
							for families or longer stays.
						</p>
						<p className="card-detail">From $TBD / night · Book by TBD</p>
					</article>

				</div>

				<div className="callout">
					<h3>Getting Around</h3>
					<p>
						We're planning to provide a shuttle between the host hotels and
						the venue. Details to come.
					</p>
				</div>
			</div>
		</section>
	);
}

export default TravelAndStay;
