# Content

Authored content for the site. Currently one collection:

```
src/content/
└── case-studies/     → /case-studies and /case-studies/<slug>
```

---

## Case studies

One `.mdx` file per case study. **The filename is the URL slug** —
`ai-analytics-dashboard.mdx` becomes `/case-studies/ai-analytics-dashboard`.

> **Current state:** only `ai-analytics-dashboard.mdx` remains, kept as a
> worked example of every field. Its content is placeholder — `client:
> Placeholder Client` and invented metrics. Replace or delete it once real
> work is ready to publish; don't leave it live as-is.

### Adding one

1. Drop the images into `public/assets/images/`.
2. Create `src/content/case-studies/<your-slug>.mdx` from the template below.
3. `pnpm build`.

That's it — there is no registry to update and no code to touch. The directory is
read at build time by `src/lib/case-studies.ts`, so a new file automatically gets:

- a card on `/case-studies`
- a statically prerendered detail page
- an entry in `/sitemap.xml`
- its own `<title>`, OpenGraph, and Twitter card tags
- a slot in the landing-page teaser, **if** `featured: true`

### Removing one

Delete the file. Same deal — nothing else references it.

One caveat: if the study was already live, its URL will start returning 404.
If it had inbound links or traffic worth keeping, add a redirect in
`next.config.ts` rather than letting the URL die:

```ts
async redirects() {
  return [{ source: "/case-studies/old-slug", destination: "/case-studies", permanent: true }];
}
```

### Renaming a slug

Rename the file and add the same redirect. The slug lives in the filename only —
there is no `slug` field in the frontmatter to keep in sync.

---

## Template

Copy this into a new `.mdx` file and fill it in.

```mdx
---
title: Project Name
subtitle: One line, shown under the H1 on the detail page
summary: Two lines max — this is the card blurb on the index and landing teaser.
client: Client Name
industry: SaaS
year: "2025"
featured: false
order: 9
services:
  - AI & Intelligent Automation
  - Custom Web & Mobile Apps
heroImage: /assets/images/your-hero.png
gallery:
  - /assets/images/your-shot-1.png
  - /assets/images/your-shot-2.png
metrics:
  - value: 40%
    label: Faster decision-making
  - value: 15h
    label: Saved weekly
  - value: 10M+
    label: Records handled daily
techStack:
  - Next.js
  - TypeScript
  - PostgreSQL
---

## The problem

What was actually broken, in their words. Concrete beats abstract.

## What we built

- **Bolded lead-in** then the explanation
- Keep to four or five bullets

## The outcome

- What measurably changed

> An optional pull quote from the client.
```

---

## Frontmatter reference

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | string | yes | H1 on the detail page, card heading |
| `subtitle` | string | yes | Sits under the H1 |
| `summary` | string | yes | Card blurb — index and landing teaser |
| `client` | string | yes | Shown in the detail-page meta line |
| `industry` | string | yes | Meta line, and on the card |
| `year` | string | yes | **Quote it** — bare `2025` parses as a number |
| `featured` | boolean | yes | `true` puts it in the landing-page teaser |
| `order` | number | yes | Ascending. Controls index order *and* which featured studies win the 3 slots |
| `services` | string[] | yes | Sidebar. Use the labels from the footer's Services list |
| `heroImage` | string | yes | Path under `public/`, starting with `/` |
| `gallery` | string[] | no | Two-column grid below the body. Omit or leave empty to hide |
| `metrics` | `{value, label}[]` | no | Big-number band. First two also appear on the card. **Three reads best** |
| `techStack` | string[] | no | Sidebar pills |

### Gotchas

- **`year` must be quoted.** `year: 2025` becomes a number and renders inconsistently.
- **Images must exist under `public/`.** Nothing validates the paths — a typo
  gives you a broken image, not a build error. Check with:
  ```bash
  grep -ho "/assets/images/[a-z0-9._-]*" src/content/case-studies/*.mdx | sort -u \
    | while read -r f; do [ -f "public$f" ] || echo "MISSING: $f"; done
  ```
- **`metrics` renders in a 3-column grid.** Two looks sparse, four wraps awkwardly.
- **The landing teaser takes the first 3 by `order` where `featured: true`.**
  Flip a fourth to `featured` and it won't appear until one ahead of it drops out.
  If *nothing* is featured, the whole landing section disappears — that's intentional,
  not a bug.
- **Only `.mdx` files are picked up.** Other files in `case-studies/` are ignored,
  so drafts can sit alongside as `.md` or `.txt` without shipping.
- **Both grids adapt to the count.** One study renders as a single centered
  card, two as a centered pair, three or more as the full three-column grid —
  so a short list never looks like a broken layout.
- **The dev server needs a restart for a brand-new file.** Slugs come from
  `generateStaticParams`, and unknown ones 404 by design (`dynamicParams = false`).
  Edits to an *existing* file hot-reload fine.

---

## Body conventions

The MDX body is prose only — hero image, metrics, sidebar, and gallery all come
from frontmatter, so don't repeat them in the body.

Three `##` sections, in this order:

1. `## The problem` — what was broken before
2. `## What we built` — the solution, mostly as bullets with bolded lead-ins
3. `## The outcome` — what measurably changed

A closing `>` blockquote pull-quote is optional and reads well.

Styling for every element is defined in `src/mdx-components.tsx`. Tailwind's
typography plugin is **not** installed, so an element with no mapping there will
render unstyled. If you need something new — a table, a callout — add it to that
file rather than reaching for inline HTML.
