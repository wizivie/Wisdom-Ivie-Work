# Wisdom Ivie — personal site

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind 3.4 · Instrument Serif / Inter / JetBrains Mono.

```bash
npm install --legacy-peer-deps
npm run dev
```

## Where things live

- `src/data/profile.ts` — name, hero copy, highlights, summary, about, contact
- `src/data/experience.ts` — employers and roles, aligned with LinkedIn, plus the First Central AI Engineer secondment (Jun 2026). The site shows the first 3 bullets per role; the CV shows all of them.
- `src/data/credentials.ts` — education and certifications
- `src/data/skills.ts` — skill groups on the site; `src/data/cv.ts` — CV-only key achievements and skills
- `src/data/writing.ts` + `src/content/posts/*.tsx` — articles (register new ones in `src/content/posts/index.ts`)
- `src/app/cv/page.tsx` — the CV page (A4 sheet on screen, prints to 2 pages)
- `src/app/globals.css` — grey colour tokens (light + dark), type scale, print rules

## Regenerating the CV PDF

`public/Wisdom-Ivie-CV.pdf` is printed from `/cv` by headless Chrome/Edge. After changing CV content:

```bash
npm run build
npx next start -p 3011
CV_URL=http://localhost:3011/cv npm run cv:pdf
```

Keep it to two pages. If content grows, trim bullets in `src/data/experience.ts` rather than shrinking text.

## Worth checking with Wisdom

- Collections Specialist caseload is "$650K" on LinkedIn — probably meant £650K.
- University of Derby field on LinkedIn reads "Specialized Sales, Merchandising and Marketing Operations" alongside "Bachelor of Laws"; the site shows only "Bachelor of Laws".
- AI Engineer secondment bullets and the AI skills group are general descriptions, not taken from LinkedIn.

Set `NEXT_PUBLIC_SITE_URL` in production for correct canonical/OG URLs.
