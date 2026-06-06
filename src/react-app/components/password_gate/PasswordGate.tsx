import { useState, type FormEvent } from "react";
import { markAuthed } from "../../lib/auth";

import "./password_gate.css";

type PasswordGateProps = {
	/** Called after the server confirms the password is correct. */
	onUnlock: () => void;
	/** Placeholder text shown in the password input. */
	placeholder?: string;
	/** Label on the submit button. */
	submitLabel?: string;
};

const PasswordGate = ({
	onUnlock,
	placeholder = "Password",
	submitLabel = "Enter",
}: PasswordGateProps) => {
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (submitting || password.length === 0) return;
		setError(null);
		setSubmitting(true);
		try {
			const res = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ password }),
			});
			if (res.ok) {
				markAuthed();
				onUnlock();
				return;
			}
			if (res.status === 401) {
				setError("Incorrect password. Please try again.");
			} else {
				setError("Something went wrong. Please try again.");
			}
		} catch {
			setError("Couldn't reach the server. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<form className="password-gate" onSubmit={handleSubmit} noValidate>
			<label className="password-gate-field">
				<span className="visually-hidden">Password</span>
				<input
					type="password"
					name="password"
					placeholder={placeholder}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="off"
					autoCapitalize="off"
					autoCorrect="off"
					spellCheck={false}
					disabled={submitting}
					required
				/>
			</label>
			<button
				type="submit"
				disabled={submitting || password.length === 0}
				className="password-gate-submit"
			>
				{submitting ? "Checking…" : submitLabel}
			</button>
			{error && (
				<p className="password-gate-error" role="alert">
					{error}
				</p>
			)}
		</form>
	);
};

export default PasswordGate;
