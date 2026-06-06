import { Hono } from "hono";

type Bindings = Env & {
	SITE_PASSWORD?: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.post("/api/login", async (c) => {
	const expected = c.env.SITE_PASSWORD;
	if (!expected) {
		console.error("SITE_PASSWORD secret is not configured");
		return c.json({ error: "Server not configured" }, 500);
	}

	let body: { password?: unknown };
	try {
		body = await c.req.json<{ password?: unknown }>();
	} catch {
		return c.json({ error: "Invalid request" }, 400);
	}

	const provided = typeof body.password === "string" ? body.password : "";

	if (constantTimeEqual(provided, expected)) {
		return c.json({ ok: true });
	}

	return c.json({ ok: false }, 401);
});

function constantTimeEqual(a: string, b: string): boolean {
	if (a.length !== b.length) return false;
	let result = 0;
	for (let i = 0; i < a.length; i++) {
		result |= a.charCodeAt(i) ^ b.charCodeAt(i);
	}
	return result === 0;
}

export default app;
