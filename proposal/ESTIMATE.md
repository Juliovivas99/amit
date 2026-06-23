# Project Estimate
## Unified Real Estate Operations Platform — Amit

**Prepared by:** Layer Zero Studio  
**Date:** June 22, 2026  
**Document Version:** 1.0  
**Related Document:** CLIENT_PROPOSAL.md v1.0

---

## Estimate Summary

| | Fixed Price | Retainer (Recommended) |
|---|---|---|
| **Total Investment** | $60,000–$80,000 (full contracted V1 scope) | $8,000 / month (development capacity) |
| **Delivery commitment** | Contractual — locked SOW deliverables | Iterative — monthly prioritized releases |
| **Timeline to V1** | ~12–16 weeks (contractual) | Target ~12–16 weeks with continued engagement; not guaranteed in 3 months |
| **Initial Commitment** | Milestone-based | 3 months ($24,000) — foundation + MVP path |
| **Capacity** | Scoped to SOW | ~20 hrs/week (up to 80 hrs/mo) |

---

## Delivery Timeline by Phase

The build plan is organized into eight phases. With a solo lead engineer working approximately 20 hours per week, phases may overlap depending on priority, technical access, and which workflows are selected for the MVP. Calendar timelines below reflect realistic delivery for this team size.

| Phase | Name | Duration (est.) | Primary Deliverables |
|---|---|---|---|
| **Phase 1** | Discovery & Architecture | 1–2 weeks | Workflow documentation, tool inventory, integration priorities, user roles, data sources, dashboard requirements, and success criteria |
| **Phase 2** | Core Platform Foundation | 2–3 weeks | Authentication, user roles, navigation, database structure, dashboard shell, core records, and base admin functionality |
| **Phase 3** | Acquisition Dashboard | 2–4 weeks | Deal pipeline, broker communication tracking, deal notes, document organization, basic deal analysis, AI-ready structure |
| **Phase 4** | Property Management Dashboard | 2–4 weeks | Property records, portfolio visibility, occupancy/collections/cash flow tracking, Yardi/Entrata visibility where feasible, property-level tasks and notes |
| **Phase 5** | Internal Management Dashboard | 2–3 weeks | Internal tasks, follow-up tracking, communications visibility, team accountability, internal notes, executive summaries |
| **Phase 6** | Communications Layer | 2–4 weeks | Email/calendar integration via Microsoft 365 where feasible; entity linking to deals and properties |
| **Phase 7** | AI Search & Workflow Features | 2–4 weeks | AI search across approved platform data, summaries, document lookup, and workflow assistance |
| **Phase 8** | QA, Launch & Training | 1–2 weeks | QA, bug fixes, user testing, training, launch support, and post-launch refinements |

**Phasing approach:** Phases 1–2 establish the foundation. Phases 3–5 deliver the three core dashboards. Phases 6–7 add communications and AI capabilities once structured data exists. Phase 8 ensures the platform is tested, adopted, and refined. Under a retainer, phases can be reprioritized based on what delivers the most value earliest.

---

## Delivery Milestones

| Milestone | Target | What's Included |
|---|---|---|
| **MVP** | 8–12 weeks | Discovery, platform foundation, acquisition dashboard, and earliest usable workflows |
| **Production-ready V1** | 12–16 weeks | All three dashboards, core integrations, initial AI features, QA, training, and launch |
| **Retainer initial commitment** | 3 months ($24,000) | Foundation + MVP path — does not guarantee every advanced integration or AI feature |
| **Fixed price V1** | $60,000–$80,000 | Formally scoped V1 with defined deliverables, risk buffer, and contractual delivery commitment (~12–16 weeks) |

> **Positioning:** This is a lean internal operating system for approximately 5 users and 2–3 acquisitions reviewed per month, not a year-long enterprise rollout.

> **Note on pricing models:** **Fixed price ($60,000–$80,000)** reflects a formally scoped V1 with defined deliverables, risk buffer, and a contractual commitment to deliver the full agreed V1 within approximately 12–16 weeks. **The retainer ($8,000/month)** provides up to 80 hours of development capacity per month for iterative, prioritized delivery. The initial three-month commitment ($24,000) typically delivers discovery, platform foundation, and a usable MVP — not every advanced integration or AI feature in the first term. The engagement can continue month-to-month if needed to reach production-ready V1.

---

## Resource Allocation

### Primary Development Resource

**Lead Software Engineer — Julio Vivas**

Julio will be responsible for:

- Product architecture
- Frontend development
- Backend development
- Database design
- API integrations
- AI search and automation implementation
- Deployment and infrastructure
- Testing and QA
- Client communication
- Project management

Additional specialized resources, such as design, infrastructure, security, or vendor-specific integration support, may be brought in only if needed and subject to client approval.

---

## Cost Breakdown — Fixed Price Option

### Milestone Payments (Example at $70,000 mid-range)

| Milestone | Deliverable | Amount | % |
|---|---|---|---|
| M1: Engagement Start | Signed agreement; Phase 1 discovery complete | $21,000 | 30% |
| M2: Core Platform Live | Phases 2–3 accepted; foundation and acquisition dashboard | $24,500 | 35% |
| M3: Final Delivery | Remaining phases complete; platform accepted | $24,500 | 35% |
| **Total (mid-range example)** | | **$70,000** | **100%** |

Actual fixed price within the $60,000–$80,000 range depends on final scope defined during Phase 1. Material changes require a written change order.

The fixed price option requires a clearly defined scope before development begins. Material changes to scope, integrations, or AI functionality may require a written change order.

---

## Cost Breakdown — Retainer Option

| Period | Focus | Monthly | Cumulative |
|---|---|---|---|
| Months 1–2 | Phases 1–3: Discovery, foundation, and acquisition dashboard (MVP path) | $8,000 | $16,000 |
| Month 3 | Phases 4–5: Property management and internal dashboards (if prioritized) | $8,000 | $24,000 |
| Month 4+ (optional) | Phases 6–8, integrations, AI, launch, and ongoing enhancements | $8,000 | Continues month-to-month |

**Initial commitment:** 3 months ($24,000)  
**What it typically delivers:** Discovery, platform foundation, and an acquisition-focused MVP path — not every advanced integration or AI feature in the first term  
**After initial term:** Continues month-to-month at $8,000/month for enhancements, support, integrations, automation, and AI workflow expansion unless canceled with written notice  
**Capacity:** ~20 hours per week (up to 80 hours per month)

The retainer funds ongoing development capacity and monthly prioritization. It is not priced or structured as a discounted alternative to the fixed-price V1 deliverable.

---

## Ongoing Costs (Client Responsibility)

| Item | Monthly (Low) | Monthly (High) | Annual (Low) | Annual (High) |
|---|---|---|---|---|
| Cloud hosting (AWS/Azure) | $200 | $500 | $2,400 | $6,000 |
| AI API usage | $50 | $200 | $600 | $2,400 |
| Domain & SSL | — | — | $15 | $50 |
| **Total Ongoing** | **$250** | **$700** | **$3,015** | **$8,450** |

---

## Integration Considerations

| Integration | Complexity | Risk | Approach |
|---|---|---|---|
| Microsoft 365 / Outlook | Low–Medium | Low | Graph API for email/calendar where admin access allows |
| Yardi | Medium–High | Medium | API or export-based sync; may require vendor approval |
| Entrata | Medium | Medium | Open API where available; export fallback |
| CoStar | Medium–High | High | May require manual export workflow depending on licensing |
| AI Services | Low | Low | API integration; usage costs separate |

---

## Scope Changes (Fixed Price)

Additional work outside the agreed scope may require a separate written change order or proposal.

---

## Estimate Assumptions

1. Client provides API access and credentials within agreed timeframes of kickoff
2. Client feedback on deliverables within agreed timeframes
3. Single environment (production) plus staging; no multi-region deployment
4. Five user accounts with role-based access; no complex permission hierarchies
5. English-language platform only
6. CoStar integration scoped to data export/import workflow if API unavailable
7. AI features use Claude API or equivalent; client approves AI provider
8. No mobile native application development
9. Historical data import limited unless specifically scoped
10. Timeline depends on client responsiveness and scope decisions

---

## Estimate Validity

This estimate is valid for **60 days** from the date of issue.

This proposal is intended to define the initial direction, scope, and pricing structure for the project. Final implementation details may be adjusted based on discovery, technical feasibility, and client priorities.

Pricing may be revised based on:

- Changes in scope or requirements
- Integration access limitations discovered during discovery
- Significant changes in third-party API pricing or availability

---

*© 2026 Layer Zero Studio. All rights reserved.*
