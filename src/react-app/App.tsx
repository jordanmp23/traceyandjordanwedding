import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Accommodations from "./pages/Accommodations";
import Location from "./pages/Location";
import RSVP from "./pages/RSVP";
import "./App.css";

function App() {
	return (
		<div className="site">
			<Header />
			<main className="site-main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/our-story" element={<OurStory />} />
					<Route path="/accommodations" element={<Accommodations />} />
					<Route path="/location" element={<Location />} />
					<Route path="/rsvp" element={<RSVP />} />
				</Routes>
			</main>
			<footer className="site-footer">
				<p>Tracey &amp; Jordan · With love</p>
			</footer>
		</div>
	);
}

export default App;
