import { OGImageRoute } from "astro-og-canvas";
import projects from "../../data/projects.json";
import profile from "../../data/profile.json";

/** Card palette — mirrors the dark-mode tokens in global.css. */
const BG_FROM: [number, number, number] = [2, 6, 23]; // --color-base (dark)
const BG_TO: [number, number, number] = [21, 20, 97]; // --color-accent-900
const ACCENT: [number, number, number] = [129, 140, 248]; // --color-accent-300
const TITLE_FG: [number, number, number] = [255, 255, 255];
const DESC_FG: [number, number, number] = [148, 163, 184]; // --color-fg-soft (dark)

/** The "N" monogram from favicon.svg. Keeps logo-less projects on the same layout. */
const FALLBACK_LOGO = "/assets/og/mark.png";

/** projects.json stores logos as site-root paths; the renderer wants project-root paths. */
const toProjectPath = (path: string) => `./public/${path.replace(/^\//, "")}`;

/** Descriptions are written for the page, not the card — keep them from overflowing. */
function truncate(text: string, max = 200) {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max);
  // Prefer ending on a whole sentence, but only if that keeps enough of the text.
  const sentenceEnd = Math.max(
    cut.lastIndexOf(". "),
    cut.lastIndexOf("! "),
    cut.lastIndexOf("? "),
  );
  if (sentenceEnd > max * 0.5) return cut.slice(0, sentenceEnd + 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

interface OGPage {
  title: string;
  description: string;
  logo: string | null;
}

// Keys become the route: `home` -> /og/home.png, `pong-game` -> /og/pong-game.png
const pages: Record<string, OGPage> = {
  home: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    logo: profile.photo,
  },
  ...Object.fromEntries(
    projects.map((project) => [
      project.id,
      {
        title: project.title,
        description: project.description,
        logo: project.logo,
      },
    ]),
  ),
};

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page: OGPage) => ({
    title: page.title,
    description: truncate(page.description),
    logo: { path: toProjectPath(page.logo ?? FALLBACK_LOGO), size: [110] },
    bgGradient: [BG_FROM, BG_TO],
    border: { color: ACCENT, width: 16, side: "inline-start" },
    padding: 64,
    font: {
      title: {
        color: TITLE_FG,
        size: 62,
        weight: "Bold",
        lineHeight: 1.2,
        families: ["Karla"],
      },
      description: {
        color: DESC_FG,
        size: 30,
        lineHeight: 1.4,
        families: ["Karla"],
      },
    },
    fonts: [
      "./src/fonts/karla-latin-700-normal.ttf",
      "./src/fonts/karla-latin-400-normal.ttf",
    ],
  }),
});
