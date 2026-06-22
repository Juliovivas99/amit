# Design Upgrade Prompt

Copy everything below the line into Cursor, Claude, v0, or your design tool.

---

## PROMPT START

You are a senior product designer and front-end engineer. Redesign an existing client proposal website to look **executive-grade, polished, and presentation-ready** — the kind of document a $10K+/month infrastructure studio would send to a real estate investment client before a board-level review.

### Project Context

This is a **confidential B2B proposal package** for a client named **Amit** (real estate investment & property management, ~5 users). The proposing company is **[Layer Zero Studio](https://www.layerzero.studio)** — they build production-grade AI infrastructure and custom operational systems. Their public site is dark, technical, and confident: black/cream palette, orange accents, mono status labels, bold uppercase typography, 2px borders, infrastructure-engineer positioning (not agency fluff).

### Current State

The site already exists as static HTML in this folder:

```
proposal/
├── index.html          # Package hub / landing
├── proposal.html       # Full 10-section client proposal
├── estimate.html       # Phase-by-phase cost & effort estimate
├── assets/
│   ├── layerzero.css   # Shared stylesheet
│   └── logo.svg        # Simple orange-square + text logo
```

**What works today:** Content is complete and accurate. Basic Layer Zero colors are applied. Three pages share one CSS file. Structure is logical.

**What feels unprofessional today (fix these):**
- Layout reads like a styled document, not a premium client deliverable
- Hero sections are generic; no depth, texture, or visual hierarchy beyond font size
- Tables dominate pages without breathing room or scan-friendly data design
- Emoji used as card icons (⚡👁⏱) — replace with proper iconography or abstract marks
- ASCII architecture diagrams and timelines feel developer-internal, not executive-facing
- No cover-page moment on the hub (`index.html`) — it should feel like opening a proposal deck
- Typography hierarchy is flat; sections blur together on long scroll
- No sticky section nav or progress indicator on `proposal.html` (10 sections)
- Print/PDF output will look mediocre without dedicated `@media print` polish
- Mobile experience is functional but not refined
- Missing micro-interactions, scroll reveals, and spacing rhythm that signal craft
- Logo is a placeholder orange square — needs a proper mark aligned with Layer Zero Studio
- No visual system for pricing cards, phase timeline, or recommendation callouts
- Footer CTA is repetitive across pages without variation

### Brand Reference — Layer Zero Studio

Study **https://www.layerzero.studio** and match their energy:

| Token | Value |
|---|---|
| Background dark | `#050505`, `#0A0A0A` |
| Background light | `#F3F1ED` |
| Accent orange | `#f97316`, `#FF4D00`, `#ea580c` |
| Text muted | `#666666`, zinc-500 range |
| Borders | `2px solid #000` on light sections; `1px solid rgba(255,255,255,0.1)` on dark |
| Headlines | Bold, `tracking-tighter`, often uppercase |
| Status labels | Mono font, e.g. `SYSTEM_STATUS: OPERATIONAL` with pulsing dot |
| Voice | Infrastructure engineers. Security-first. Code ownership. Production-grade. Not a chatbot agency. |
| Footer | Large faded `LAYERZERO` watermark, "Made in Miami" |

Do **not** clone their marketing homepage layout 1:1 — this is a **proposal document site**, not a landing page. Borrow the design language, not the page structure.

### Design Direction

Elevate to: **"Private client portal / executive proposal"** — think Stripe Atlas docs × Layer Zero Studio × high-end consulting PDF, rendered as a responsive web experience.

**Tone:** Confident, minimal, expensive. Lots of whitespace on light sections. Dark hero moments. Orange used sparingly for emphasis only. No stock photos. No illustrations unless abstract/geometric and on-brand.

**Target audience:** Amit and their leadership team. They should feel this was built specifically for them, not generated from a template.

### Required Improvements

#### 1. Hub Page (`index.html`)
- Create a **cover experience**: client name, project title, date, confidentiality notice, Layer Zero branding
- Two large document cards (Proposal / Estimate) should feel like opening physical binders — hover states, subtle shadows, document metadata (page count, last updated)
- Add a **quick-glance executive summary strip**: investment range, timeline, recommended model, first deliverable
- Optional: password/confidentiality modal or banner (visual only, no auth needed)

#### 2. Proposal Page (`proposal.html`)
- Add **sticky side navigation** (desktop) or **sticky top section tabs** (mobile) for 10 sections
- Replace emoji card icons with SVG icons or numbered system markers
- Convert ASCII architecture diagram into a **proper SVG or CSS diagram** with three modules + integration layer
- Convert ASCII roadmap timeline into a **horizontal phase timeline** with labeled milestones
- Design distinct **section headers** — section number, title, one-line summary
- Pricing section: make Option 2 (retainer) visually dominant without being tacky — subtle "Recommended" treatment
- Recommendation section should feel like a **decision slide**, not another paragraph block
- Add **pull quotes / stat callouts** for key numbers ($65K, $8K/mo, 8–10 weeks, 5 users)

#### 3. Estimate Page (`estimate.html`)
- Lead with a **summary dashboard**: total hours, total cost range, phase count, recommended model
- Phase tables: improve scannability — zebra rows, right-aligned numbers, phase color coding
- Add a **cumulative cost chart** (CSS or lightweight SVG bar chart — no chart library required unless justified)
- Resource allocation: visualize as a simple horizontal bar or donut, not just a table
- Integration risk section: use a proper risk matrix visual (likelihood × impact grid)

#### 4. Global Design System (`assets/layerzero.css`)
Refactor CSS into a coherent system:
- CSS custom properties for spacing scale (4/8/16/24/32/48/64/96)
- Type scale with named roles: `--text-display`, `--text-h1`, `--text-h2`, `--text-body`, `--text-caption`, `--text-mono`
- Reusable components: `.section`, `.section-header`, `.data-table`, `.stat-card`, `.phase-badge`, `.callout`, `.pricing-card`, `.timeline`, `.diagram`
- Subtle background textures on dark heroes (grid pattern, radial glow — like layerzero.studio)
- Consistent `max-width` and section padding rhythm
- Smooth scroll + `scroll-margin-top` for anchor links under sticky nav

#### 5. Logo & Iconography
- Design a proper **Layer Zero Studio logo mark** (SVG) — geometric, minimal, works on dark and light
- Replace all emoji with consistent 24px stroke icons (inline SVG or single icon sprite)
- Favicon + social share meta tags (`og:title`, `og:description`)

#### 6. Motion & Polish
- Subtle fade-in on scroll for sections (CSS only or minimal JS — prefer `@media (prefers-reduced-motion)` respect)
- Table row hover states
- Nav background blur on scroll
- Focus states for accessibility (keyboard navigation through TOC)

#### 7. Print / PDF Excellence
- Dedicated `@media print` stylesheet or rules:
  - Page breaks before major sections
  - Hide nav, footer CTA, sticky elements
  - Force backgrounds/colors for headers
  - Page numbers in footer
  - Cover page prints as page 1 on hub export
- Each page should produce a **client-ready PDF** via browser Print → Save as PDF

### Technical Constraints

- **Keep it static HTML/CSS** — no React, no build step, no npm unless absolutely necessary
- **Do not change proposal content** — wording, numbers, and section structure must stay the same
- **Preserve all three HTML files** and shared `assets/layerzero.css`
- **Maintain working relative links** between index / proposal / estimate
- **Mobile-first responsive** — must work on iPad (likely presentation device) and iPhone
- **Performance:** no heavy JS frameworks; target < 100KB total CSS; lazy-load nothing critical
- **Accessibility:** semantic HTML, proper heading order, sufficient color contrast, focus indicators

### Files to Deliver

Update in place:
1. `proposal/index.html`
2. `proposal/proposal.html`
3. `proposal/estimate.html`
4. `proposal/assets/layerzero.css`
5. `proposal/assets/logo.svg` (improved)
6. Optional: `proposal/assets/icons.svg` (sprite), `proposal/assets/print.css`

### Success Criteria

When done, the site should:
1. Look like it cost $5K+ to design, not like a Markdown export with CSS
2. Be presentable on a screen share with an executive in under 30 seconds of navigation
3. Export to PDF cleanly with no broken layouts
4. Feel unmistakably **Layer Zero Studio** without copying their homepage
5. Make the **retainer recommendation** visually obvious but professionally restrained
6. Pass the test: *"Would I sign a $72K–$96K engagement based on how this looks?"*

### What NOT To Do

- Do not add lorem ipsum or placeholder content
- Do not use generic AI slop aesthetics (purple gradients, Inter + floating cards cliché, excessive glassmorphism)
- Do not use stock photography of office workers shaking hands
- Do not add a chatbot widget
- Do not oversell with animation — this is a proposal, not a product demo
- Do not change pricing, timelines, or client name
- Do not require a server or database

### Reference Comparisons (aspirational quality bar)

- Stripe documentation clarity
- Linear.app marketing polish (spacing and typography discipline)
- Layer Zero Studio own site (brand voice and dark/light contrast)
- High-end strategy consulting PDFs (McKinsey/BCG deck density and hierarchy — but modernized)

Start by auditing the current files, then implement the redesign systematically: design tokens → global components → hub → proposal → estimate → print styles. Show me the updated files.

## PROMPT END
