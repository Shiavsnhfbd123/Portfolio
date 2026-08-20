import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Shivansh's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Shivansh Aggarwal \| Full-Stack Developer<\/title>/i);
  assert.match(html, /Library Management System/);
  assert.match(html, /Shivansh/);
  assert.match(html, /Aggarwal/);
  assert.match(html, /Canvas Landing Page/);
  assert.match(html, /Calculator Web Application/);
  assert.match(html, /Internship Matcher/);
  assert.match(html, /Village Dudhola, District Palwal, Haryana 121102/i);
  assert.doesNotMatch(html, /77\.3178° E/);
});

test("keeps the portfolio progressive and free of the removed starter card", async () => {
  const [page, effects, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/PortfolioEffects.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<PortfolioEffects \/>/);
  assert.match(page, /data-nav-link="projects"/);
  assert.match(effects, /IntersectionObserver/);
  assert.match(effects, /prefers-reduced-motion/);
  assert.match(css, /scroll-behavior: smooth/);
  assert.match(css, /\.site-nav a\.is-active/);
  assert.match(page, /hero-snapshot/);
  assert.match(page, /hero-name">Shivansh Aggarwal<\/span>/);
  assert.doesNotMatch(page, /hero-name">Shivansh<br/);
  assert.doesNotMatch(page, /I&apos;m <strong>Shivansh Aggarwal<\/strong>, a Computer Science/);
  assert.doesNotMatch(page, /77\.3178° E|This portfolio|build-card/);
});
