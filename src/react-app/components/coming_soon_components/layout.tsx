import { useEffect, type ReactNode } from "react";

import "./layout.css";

type LayoutProps = {
	children: ReactNode;
	title?: string;
};

const Layout = ({ children, title = "Tracey & Jordan" }: LayoutProps) => {
	useEffect(() => {
		const previous = document.title;
		document.title = title;
		return () => {
			document.title = previous;
		};
	}, [title]);

	return <div className="container">{children}</div>;
};

export default Layout;
