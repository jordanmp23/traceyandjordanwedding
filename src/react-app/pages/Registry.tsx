import { useEffect } from "react";
import PageHero from "../components/page_hero_components/page_hero";
import registryImg from "../assets/engagement_hug.jpg";

const ZOLA_SCRIPT_ID = "zola-wjs";
const ZOLA_SCRIPT_SRC = "https://widget.zola.com/js/widget.js";

function Registry() {
	useEffect(() => {
		// Zola's widget looks for `.zola-registry-embed` anchors when the script
		// loads and swaps them for the styled registry button. Inject the script
		// once — the id guard makes this idempotent across remounts.
		if (document.getElementById(ZOLA_SCRIPT_ID)) return;
		const firstScript = document.getElementsByTagName("script")[0];
		const script = document.createElement("script");
		script.id = ZOLA_SCRIPT_ID;
		script.async = true;
		script.src = ZOLA_SCRIPT_SRC;
		firstScript?.parentNode?.insertBefore(script, firstScript);
	}, []);

	return (
		<>
			<PageHero title="Registry" image={registryImg} position="70% 20%" />
			<section className="page">
				<div className="page-inner">
					<h2 className="page-title">Registry</h2>
					<p className="page-lead">
						Find out about our registry and how to contribute to our new life
						together.
					</p>

					<div className="registry-embed">
						<a
							className="zola-registry-embed"
							href="https://www.zola.com/registry/traceyandjordan2027"
							data-registry-key="traceyandjordan2027"
						>
							Our Zola Wedding Registry
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default Registry;
