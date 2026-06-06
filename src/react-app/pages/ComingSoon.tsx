import Layout from "../components/coming_soon_components/layout.tsx";
import PasswordGate from "../components/password_gate/PasswordGate";

type ComingSoonProps = {
	onUnlock: () => void;
};

function ComingSoon({ onUnlock }: ComingSoonProps) {
	return (
		<Layout>
			<div className="bgimg">
				<div className="bg-layout">
					<div className="middle">
						<div className="content">
							<h1 className="h1">COMING SOON</h1>
							<p>
								We are very excited to share details about our special day very
								soon!
							</p>
							<PasswordGate onUnlock={onUnlock} />
						</div>
					</div>
				</div>
				<div className="bottomleft"></div>
			</div>
		</Layout>
	);
}

export default ComingSoon;
