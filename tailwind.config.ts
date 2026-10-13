import type { Config } from "tailwindcss";

// Lets utilities like bg-bg/90 work with CSS-variable colours.
const withAlpha = (v: string) =>
  `color-mix(in oklab, var(${v}) calc(<alpha-value> * 100%), transparent)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: withAlpha("--bg"),
        surface: withAlpha("--surface"),
        "surface-raised": withAlpha("--surface-raised"),
        line: withAlpha("--line"),
        text: withAlpha("--text"),
        "text-muted": withAlpha("--text-muted"),
        accent: withAlpha("--accent"),
        "accent-strong": withAlpha("--accent-strong"),
        ink: withAlpha("--ink"),
        "ink-text": withAlpha("--ink-text"),
        "ink-muted": withAlpha("--ink-muted"),
        "ink-line": withAlpha("--ink-line"),
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
