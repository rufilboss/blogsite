# Project Plan

**Status**: Approved
**Created**: 2026-10-13
**Mode**: NEW

---

## 1. Project Overview

**Goal**: Build a highly professional technical blog and engineering portfolio for senior engineering and DevSecOps writing, publishing repository-managed README and Markdown content first and preserving source attribution and canonical metadata for future Hashnode, Dev.to, and freeCodeCamp imports. The project is designed so that every module is independently testable.

**App Type**: Static + API

**API Login**: No

**Mode**: NEW

**Deployment Plan**: No deployment plan found

---

## 2. Technical Blog and Portfolio — frontend

| Component | Technology |
|-----------|-----------|
| **Language** | TypeScript |
| **Runtime** | Node |
| **Package Manager** | npm |
| **Test Runner** | vitest |
| **Mocking Library** | vi.mock |
| **Test Command** | npm test |
| **Framework** | Astro |
| **Content Layer** | Markdown and MDX content collections |
| **Orchestration** | docker-compose |

---

## 3. Services Required

| Azure Service | Role in App | Environment Variable | Default Value (Local) | Classification |
|---------------|------------|---------------------|----------------------|----------------|
| Azure Static Web Apps | Host the statically generated Astro blog, portfolio, RSS feed, sitemap, and article assets | — | `npm run dev` | Essential |

---

## 4. Prerequisites

### Run

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Node.js | web-app | ✅ | v22.14.0 |
| npm | web-app | ✅ | 10.9.2 |
| Astro | web-app | ❓ | Managed by the project dependency manifest |

### Debug

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Chrome | web-app | ❓ | Not confirmed by the environment scan; Linux fallback browser |

Verify every `❓` tool before running or debugging the project. No datastore emulator or container runtime is required for this repository-based static site.

---

## 5. Design System & UI

**Component Library**: Pico.css
**Style Direction**: Editorial engineering journal with a dark ink canvas, warm paper surfaces, and electric cyan signals. The interface should feel like a carefully typeset field notebook: high contrast, generous reading measure, restrained borders, and dense but calm navigation for repeated reading.
**Typography**: IBM Plex Sans, IBM Plex Mono

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#19D3C5` | Links, active navigation, article actions, and technical signal accents |
| `accent`  | `#FFB86B` | Portfolio highlights, tags, reading metadata, and editorial callouts |
| `surface` | `#101417` | Deep ink page background behind the site shell |
| `text`    | `#F3F0E8` | Primary reading text and high-priority labels |
| `muted`   | `#9AA8A8` | Dates, excerpts, bylines, and supporting metadata |
| `border`  | `#2B383A` | Hairline rules, article boundaries, and navigation separators |

### Pages

| Page | Route | Purpose | Layout |
|------|-------|---------|--------|
| Field Notes | `/` | Introduce the author, surface the latest writing, and point readers toward the portfolio. | `header, nav, hero, main, card-list, sidebar, footer` |
| Writing Archive | `/writing` | Let readers scan, filter, and compare the complete article archive by topic and format. | `header, nav, main, tabs, card-list, sidebar, footer` |
| Platform Engineering at the Edge | `/writing/platform-engineering-at-the-edge` | Present a long-form article with source metadata, reading context, and related notes. | `header, nav, main, two-column(main+sidebar), actions, footer` |
| About the Engineer | `/about` | Explain the author's engineering perspective, focus areas, and selected delivery experience. | `header, nav, main, two-column(main+sidebar), card-list, footer` |

### Sample Content

Field Notes — featured writing:
| Title | Topic | Read time | Status |
|---|---|---:|---|
| Platform Engineering at the Edge | Platform Engineering | 12 min | Featured |
| Threat Modeling the Developer Experience | DevSecOps | 9 min | Published |
| The Smallest Useful Internal Platform | Engineering Leadership | 7 min | Published |

Writing Archive — article:
| Title | Published | Format | Status |
|---|---|---|---|
| Platform Engineering at the Edge | 2026-09-28 | Essay | Published |
| Threat Modeling the Developer Experience | 2026-09-14 | Field note | Published |
| The Smallest Useful Internal Platform | 2026-08-31 | Essay | Published |
| Secure Defaults Are Product Design | 2026-08-12 | Briefing | Published |

Platform Engineering at the Edge — article metadata: 12 min read · Platform Engineering · 2026-09-28 · originally published in the local repository

About the Engineer — focus areas:
| Area | Evidence | Signal |
|---|---|---|
| Platform Engineering | Golden paths, internal developer platforms, operability | Current focus |
| DevSecOps | Threat modeling, secure defaults, delivery controls | Core practice |
| Technical Writing | Long-form essays, field notes, source-aware publishing | Public work |

---

## 6. Project Structure

```text
project-root/
├── .azure/
│   └── project-plan.md
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── ArticleCard.astro
│   │   ├── SiteHeader.astro
│   │   └── TagList.astro
│   ├── content/
│   │   └── writing/
│   │       ├── platform-engineering-at-the-edge.md
│   │       ├── threat-modeling-the-developer-experience.md
│   │       └── the-smallest-useful-internal-platform.md
│   ├── content.config.ts
│   ├── layouts/
│   │   └── SiteLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── writing/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── rss.xml.ts
│   │   └── sitemap-index.xml.ts
│   └── styles/
│       └── global.css
├── astro.config.ts
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

---

## 7. Route Definitions

| # | Method | Path | Description | Request Body | Response Body | Status Codes |
|---|--------|------|-------------|-------------|--------------|-------------|
| 1 | GET | `/` | Editorial homepage with featured writing and portfolio introduction | — | HTML document | 200 |
| 2 | GET | `/writing` | Filterable archive of repository-managed articles | — | HTML document | 200 |
| 3 | GET | `/writing/platform-engineering-at-the-edge` | Render the canonical long-form article page | — | HTML document | 200, 404 |
| 4 | GET | `/about` | Render the engineering profile and focus areas | — | HTML document | 200 |
| 5 | GET | `/rss.xml` | Publish the article feed for readers and aggregators | — | RSS XML document | 200 |
| 6 | GET | `/sitemap-index.xml` | Publish canonical site URLs for crawlers | — | XML sitemap document | 200 |

---

## 8. Next Steps

1. Run **azure-project-scaffold** to execute this plan
2. Run **azure-project-integrate** to wire the frontend to live data, smoke-test the backend, and create the migrations
3. Run **azure-debug-plan** → **azure-debug-generate** for Docker emulators and VS Code debugging
4. Run the **azure-deploy** agent when ready; it uses **azure-app-onboard** for architecture, cost estimation, IaC generation, provisioning, and health verification
