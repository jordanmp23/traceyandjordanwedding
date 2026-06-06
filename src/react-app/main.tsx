import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import { isAuthed } from "./lib/auth";

function Root() {
	const [authed, setAuthed] = useState(isAuthed);

	if (!authed) {
		return <ComingSoon onUnlock={() => setAuthed(true)} />;
	}

	return <App />;
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</StrictMode>,
);
