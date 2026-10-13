# Integration hand-off

## Frontend
- Project folder: `.`
- Dev command: `npm run dev`
- Build command: `npm run build`
- Preview command: `npm run preview`
- API seam: static Astro content collection; no runtime API client required
- Mock files: none (content is repository-managed markdown)

## Routes
- GET `/`
- GET `/writing`
- GET `/writing/:slug`
- GET `/about`
- GET `/rss.xml`
- GET `/sitemap-index.xml`

## Database
- Type: none
- Migration tool: none
- Connection env vars: none
- Seed data: none

## Services
- Azure Static Web Apps — host frontend and static content
- Classification: Essential

## Quality gates
- Confirm homepage matches planned editorial layout and dark palette.
- Confirm writing archive and article pages render article metadata and tags.
- Confirm RSS and sitemap endpoints are valid XML.
