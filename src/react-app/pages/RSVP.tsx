import { useState } from "react";
import PageHero from "../components/page_hero_components/page_hero";
import rsvpImg  from "../assets/cana_vineyards.jpg"

function RSVP() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<>
			<PageHero title="RSVP" image={rsvpImg} position="85% 20%" />
			<section className="page">
				<div className="page-inner narrow">
					<h2 className="page-title">RSVP</h2>
					<p className="page-lead">
						Please let us know whether you can make it by <strong>TBD</strong>.
						We can't wait to celebrate with you.
					</p>

					{submitted ? (
						<div className="callout">
							<h3>Thank you!</h3>
							<p>
								Your placeholder RSVP has been received. (Wire this form up to a
								real backend later.)
							</p>
						</div>
					) : (
						<form
							className="rsvp-form"
							onSubmit={(e) => {
								e.preventDefault();
								setSubmitted(true);
							}}
						>
							<label className="field">
								<span>Full Name</span>
								<input type="text" name="name" required placeholder="Jane Doe" />
							</label>

							<label className="field">
								<span>Email</span>
								<input
									type="email"
									name="email"
									required
									placeholder="jane@example.com"
								/>
							</label>

							<fieldset className="field">
								<legend>Will you attend?</legend>
								<label className="radio">
									<input type="radio" name="attending" value="yes" defaultChecked />
									<span>Joyfully accepts</span>
								</label>
								<label className="radio">
									<input type="radio" name="attending" value="no" />
									<span>Regretfully declines</span>
								</label>
							</fieldset>

							<label className="field">
								<span>Number of guests</span>
								<input
									type="number"
									name="guests"
									min={1}
									max={4}
									defaultValue={1}
								/>
							</label>

							<label className="field">
								<span>Anything we should know? (dietary, songs, etc.)</span>
								<textarea name="notes" rows={4} />
							</label>

							<button type="submit" className="btn-primary">
								Send RSVP
							</button>
						</form>
					)}
				</div>
			</section>
		</>
	);
}

export default RSVP;
