const STORAGE_KEY = "tj_authed";

export function isAuthed(): boolean {
	if (typeof window === "undefined") return false;
	return window.localStorage.getItem(STORAGE_KEY) === "1";
}

export function markAuthed(): void {
	window.localStorage.setItem(STORAGE_KEY, "1");
}

export function clearAuth(): void {
	window.localStorage.removeItem(STORAGE_KEY);
}
