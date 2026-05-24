function Location() {
	return (
		<section className="page">
			<div className="page-inner">
				<h2 className="page-title">Location</h2>
				<p className="page-lead">
					Everything you need to know about getting to the venue — and what
					to do while you're in town.
				</p>

				<div className="venue-block">
					<h3>The Venue</h3>
					<p className="venue-name">Cana Vineyards</p>
					<p className="venue-address">
						38600 Little River Tpke
						<br />
						 Middleburg, VA 20117
					</p>
					<p>
						TODO(Jordan): Talk about the winery here... the vineyards, middleburg, etc. Maybe include a photo of the venue? We can also link to
						the venue's website and/or directions on google maps.
					</p>
				</div>

				<div className="card-grid">
					<article className="info-card">
						<h3>Getting There</h3>
						<p>
							The nearest airport is <strong>Dulles International Airport (IAD)</strong>,
							about a 30-minute drive from the venue. 
							- something about the hotel and shuttles
							- maybe some info about parking if people are driving themselves
						</p>
					</article>

					<article className="info-card">
						<h3>Things To Do</h3>
						<p>
							uh.... middleburg???
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}

export default Location;
