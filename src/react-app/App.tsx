import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Event from "./pages/Event";
import OurStory from "./pages/OurStory";
import FAQ from "./pages/FAQ";
import TravelAndStay from "./pages/TravelAndStay";
import RSVP from "./pages/RSVP";
import Registry from "./pages/Registry";
import "./App.css";

function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}

function App() {
	return (
		<div className="site">
			<ScrollToTop />
			<Header />
			<main className="site-main">
				<Routes>
					<Route path="/" element={<Event />} />
					<Route path="/our-story" element={<OurStory />} />
					<Route path="/travelandstay" element={<TravelAndStay />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/rsvp" element={<RSVP />} />
					<Route path="/registry" element={<Registry />} />
				</Routes>
			</main>
			<footer className="site-footer">
				<p>Tracey &amp; Jordan · With love</p>
			</footer>
		</div>
	);
}

export default App;
