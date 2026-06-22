# Unified Real Estate Operations Platform
## Client Proposal for Amit

**Prepared by:** Meridian Systems Consulting  
**Date:** June 22, 2026  
**Document Version:** 1.0  
**Classification:** Confidential — For Client Review Only

---

| | |
|---|---|
| **Prepared For** | Amit — Real Estate Investment & Property Management |
| **Engagement Type** | Custom Platform Development & Systems Integration |
| **Team Size** | ~5 users |
| **Deal Volume** | 2–3 acquisitions evaluated per month |
| **Proposal Validity** | 60 days from date of issue |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Current Challenges](#2-current-challenges)
3. [Proposed Solution](#3-proposed-solution)
4. [Platform Architecture Overview](#4-platform-architecture-overview)
5. [Development Roadmap](#5-development-roadmap)
6. [Scope of Work](#6-scope-of-work)
7. [Assumptions and Risks](#7-assumptions-and-risks)
8. [Pricing Options](#8-pricing-options)
9. [Recommendation](#9-recommendation)
10. [Next Steps](#10-next-steps)

---

## 1. Executive Summary

Amit operates a real estate investment and property management business across a fragmented technology landscape — Microsoft Teams, Outlook, Yardi, Entrata, CoStar, Excel, Word, PowerPoint, and AI tools such as Claude. While each system serves a purpose, the lack of integration creates information silos, manual handoffs, and operational blind spots that slow deal evaluation and increase the risk of missed follow-ups.

Meridian Systems Consulting proposes the design and development of a **Unified Real Estate Operations Platform** — a purpose-built system that connects your existing tools into a single operational layer. Rather than replacing Yardi, Entrata, or CoStar, the platform will orchestrate data and workflows across them, giving your team one place to manage deals, monitor portfolio performance, and hold each other accountable.

### Engagement at a Glance

| Dimension | Detail |
|---|---|
| **Primary Objective** | Create a seamless operational ecosystem with a single source of truth |
| **Platform Modules** | Acquisitions, Property Management, Internal Operations |
| **Recommended Approach** | Strategic Development Retainer |
| **Estimated Timeline** | 9–12 months to full platform maturity |
| **Investment Range** | $65,000 (fixed) or $8,000/month (retainer) |

### Why This Matters Now

Your team of five handles high-stakes, recurring workflows — weekly and daily reviews, cash flow analysis, collections tracking, broker outreach, and deal evaluation — across systems that were never designed to work together. The cost is not just time; it is visibility, accountability, and speed. A unified platform addresses the root cause: **disconnected operations**, not insufficient tooling.

We recommend a phased delivery model that delivers operational value within the first 60–90 days, then expands into acquisitions and property management depth over subsequent phases.

---

## 2. Current Challenges

Through discovery conversations, we identified the following operational challenges. These are not technology problems in isolation — they are business problems amplified by fragmented systems.

### 2.1 Fragmented Systems & Information Silos

| System | Primary Use | Integration Gap |
|---|---|---|
| Microsoft Teams / Outlook | Communication | No linkage to deals, tasks, or property records |
| Yardi | Property management & accounting | Data not surfaced in operational dashboards |
| Entrata | Leasing & resident management | Disconnected from portfolio-level views |
| CoStar | Market research & comps | Manual export/import into deal workflows |
| Excel / Word / PowerPoint | Analysis, memos, presentations | No version control or single source of truth |
| Claude (AI) | Ad-hoc assistance | Reactive Q&A; no workflow integration or accountability |

**Impact:** Team members spend significant time switching contexts, re-entering data, and searching for information that should be immediately accessible.

### 2.2 Follow-Up & Task Accountability Gaps

The client identified follow-up reminders and task generation as **critical** requirements. Today, follow-ups likely live in email threads, calendar reminders, spreadsheets, or individual memory — none of which provide team-wide visibility or escalation when items slip.

**Impact:** Deals stall, broker relationships suffer, and operational issues compound before they surface in weekly reviews.

### 2.3 Communication Visibility

Internal and external communications (brokers, property managers, vendors) are distributed across Teams, email, and phone. There is no unified thread tied to a specific deal, property, or operational initiative.

**Impact:** Context is lost during handoffs. Leadership lacks real-time visibility into what was promised, by whom, and when.

### 2.4 Time-Intensive Review Cycles

Weekly and daily operational reviews consume disproportionate time because data must be assembled manually from Yardi, Entrata, Excel, and email before analysis can begin.

**Impact:** Reviews become data-gathering exercises rather than decision-making sessions.

### 2.5 Repetitive Operational Workflows

Cash flow reviews, collections tracking, and broker outreach follow predictable patterns but are executed manually each cycle.

**Impact:** Skilled team members spend time on repetition rather than judgment, relationship-building, and deal evaluation.

### 2.6 Underutilized AI

AI is currently used reactively — answering questions — rather than proactively ensuring work gets done. The client explicitly wants AI that drives completion, not just conversation.

**Impact:** AI potential is unrealized; the team still relies on manual discipline for follow-through.

---

## 3. Proposed Solution

### Unified Real Estate Operations Platform

We propose a custom platform organized into three integrated modules, delivered through a unified web application with role-based access for your team of five.

```
┌─────────────────────────────────────────────────────────────────┐
│           UNIFIED REAL ESTATE OPERATIONS PLATFORM               │
├─────────────────┬─────────────────────┬─────────────────────────┤
│   ACQUISITIONS  │  PROPERTY MGMT      │  INTERNAL OPERATIONS    │
│   DASHBOARD     │  DASHBOARD          │  DASHBOARD              │
├─────────────────┴─────────────────────┴─────────────────────────┤
│                    INTEGRATION & DATA LAYER                        │
│   CoStar │ Yardi │ Entrata │ Outlook/Teams │ AI Services       │
├─────────────────────────────────────────────────────────────────┤
│              TASK ENGINE │ NOTIFICATIONS │ KNOWLEDGE BASE         │
└─────────────────────────────────────────────────────────────────┘
```

### 3.1 Module 1: Acquisitions Dashboard

Purpose-built for your deal evaluation workflow (2–3 deals/month).

| Capability | Description |
|---|---|
| **Deal Pipeline Management** | Visual pipeline from sourcing through closing; stage-based tracking |
| **Broker Communications** | Log and track all broker interactions tied to specific deals |
| **Deal Tracking** | Centralized deal records with documents, notes, and status history |
| **Market Research** | Integrated research workspace with CoStar data ingestion |
| **CoStar Integration** | Automated or semi-automated data pull for comps and market data |
| **Investment Memos** | Structured memo templates with collaborative editing |
| **AI-Generated Deal Summaries** | Automated summaries of deal packages, comps, and communications |
| **Follow-Up Automation** | Scheduled reminders and escalation for broker and internal follow-ups |
| **Task Management** | Auto-generated and manual tasks tied to deal stages |

### 3.2 Module 2: Property Management Dashboard

Portfolio-level visibility connected to your property management systems.

| Capability | Description |
|---|---|
| **Portfolio Overview** | Unified view across all managed properties |
| **Property Performance Tracking** | KPIs per property and portfolio aggregate |
| **Occupancy Metrics** | Real-time or near-real-time occupancy from Entrata/Yardi |
| **Collections Tracking** | Aging, delinquency trends, and follow-up status |
| **Cash Flow Visibility** | Income, expenses, and net cash flow by property and period |
| **Yardi Integration** | Financial and operational data sync |
| **Entrata Integration** | Leasing, resident, and occupancy data sync |
| **Reporting & Analytics** | Standard and custom reports for operational and investor review |

### 3.3 Module 3: Internal Operations Dashboard

The operational nerve center — where communication, accountability, and AI converge.

| Capability | Description |
|---|---|
| **Unified Communications** | Aggregated view of relevant Teams/email threads by deal, property, or project |
| **Task Management** | Team-wide task board with assignments, due dates, and status |
| **Follow-Up Tracking** | Persistent follow-up queue with overdue escalation |
| **Team Accountability** | Workload visibility, completion rates, and ownership clarity |
| **AI-Generated Action Items** | AI extracts action items from meetings, emails, and reviews |
| **Executive Summaries** | Daily/weekly AI-generated operational briefings |
| **Knowledge Search** | Search across deals, properties, documents, and communications |
| **Reporting** | Cross-module operational reports for leadership review |

### 3.4 Design Principles

1. **Integrate, don't replace** — Yardi, Entrata, and CoStar remain systems of record; the platform is the operational layer.
2. **Tasks and follow-ups are first-class** — Every module generates and tracks actionable items.
3. **AI drives completion** — AI creates tasks, summaries, and reminders; it does not replace accountability.
4. **Start simple, expand deliberately** — Phase 1 delivers immediate value; later phases add depth.
5. **Built for five users, designed to scale** — Right-sized for current team with room to grow.

---

## 4. Platform Architecture Overview

### 4.1 High-Level Architecture

| Layer | Components | Purpose |
|---|---|---|
| **Presentation** | Responsive web application | Unified UI for all three modules |
| **Application** | API services, workflow engine, notification service | Business logic, task orchestration, integrations |
| **Integration** | Connectors for Yardi, Entrata, CoStar, Microsoft 365 | Data sync and communication aggregation |
| **AI Services** | LLM integration (Claude or equivalent), embedding/search | Summaries, action item extraction, knowledge search |
| **Data** | Relational database, document storage, audit log | Single source of truth with full history |

### 4.2 Integration Strategy

| System | Integration Approach | Data Flow | Priority |
|---|---|---|---|
| **Microsoft 365 (Outlook/Teams)** | Microsoft Graph API | Read email/calendar; optional Teams message indexing | Phase 1 |
| **Yardi** | API or scheduled data export (per client API access) | Financial, property, and occupancy data | Phase 3 |
| **Entrata** | Entrata open API | Leasing, resident, occupancy data | Phase 3 |
| **CoStar** | Export automation or API (subject to CoStar licensing) | Market data, comps, property research | Phase 2 |
| **Claude / AI** | API integration | Summaries, action items, search, workflow assistance | Phase 1 (basic), Phase 4 (advanced) |

### 4.3 Security & Compliance

- Role-based access control (RBAC) for all five users
- Encrypted data in transit (TLS 1.2+) and at rest
- Audit logging for sensitive operations
- Secure credential management for third-party API connections
- Data retention policies aligned with client requirements

### 4.4 Technology Approach

We will select a modern, maintainable technology stack appropriate for a team of this size — prioritizing reliability, integration capability, and long-term supportability over novelty. Specific technology choices will be finalized during the architecture phase based on integration requirements confirmed in discovery.

---

## 5. Development Roadmap

### Phase Overview

| Phase | Name | Duration | Primary Value |
|---|---|---|---|
| **Phase 1** | Operations Hub | Months 1–3 | Task management, follow-ups, communications visibility, basic AI |
| **Phase 2** | Acquisitions Dashboard | Months 3–6 | Deal pipeline, broker tracking, CoStar integration, investment memos |
| **Phase 3** | Property Management Dashboard | Months 6–9 | Portfolio views, Yardi/Entrata integration, collections, cash flow |
| **Phase 4** | Advanced AI & Automation | Months 9–12 | Proactive AI workflows, advanced automation, executive intelligence |

---

### Phase 1: Operations Hub
**Duration:** 10–12 weeks  
**Goal:** Establish the operational foundation — the system your team uses daily within 60–90 days.

#### Deliverables

| # | Deliverable | Description |
|---|---|---|
| 1.1 | Discovery & Architecture Document | Confirmed requirements, integration inventory, technical architecture |
| 1.2 | UX Wireframes & Design System | Core layouts for dashboard, tasks, and communications |
| 1.3 | Operations Hub Application (v1) | Deployed web application with authentication and RBAC |
| 1.4 | Task Management System | Create, assign, track, and complete tasks across the team |
| 1.5 | Follow-Up Engine | Scheduled reminders, overdue alerts, escalation rules |
| 1.6 | Unified Communications View | Aggregated email/Teams threads linked to entities |
| 1.7 | Microsoft 365 Integration | Outlook/Teams connectivity via Microsoft Graph |
| 1.8 | Basic AI Features | Action item extraction, daily summary generation |
| 1.9 | Knowledge Search (v1) | Search across platform records and indexed communications |
| 1.10 | Deployment & Training | Production deployment, user onboarding, documentation |

#### Key Milestones

| Week | Milestone |
|---|---|
| 2 | Discovery complete; architecture approved |
| 4 | Design approved; development sprint 1 begins |
| 8 | Operations Hub beta — internal team testing |
| 10–12 | Production launch; Phase 1 complete |

---

### Phase 2: Acquisitions Dashboard
**Duration:** 10–12 weeks  
**Goal:** Centralize deal evaluation and broker relationship management.

#### Deliverables

| # | Deliverable | Description |
|---|---|---|
| 2.1 | Deal Pipeline Module | Stage-based pipeline with deal records |
| 2.2 | Broker Communication Log | All broker interactions tied to deals |
| 2.3 | Deal Document Management | Upload, version, and organize deal documents |
| 2.4 | Investment Memo Templates | Structured memo creation and collaboration |
| 2.5 | CoStar Integration | Market data ingestion (scope per API/licensing) |
| 2.6 | Market Research Workspace | Research notes, comps, and analysis per deal |
| 2.7 | AI Deal Summaries | Automated deal package and communication summaries |
| 2.8 | Deal-Linked Task Automation | Auto-generated tasks based on deal stage transitions |
| 2.9 | Acquisitions Reporting | Pipeline status, activity, and velocity reports |

---

### Phase 3: Property Management Dashboard
**Duration:** 10–12 weeks  
**Goal:** Portfolio-level visibility with live data from property management systems.

#### Deliverables

| # | Deliverable | Description |
|---|---|---|
| 3.1 | Portfolio Overview Dashboard | All properties with key KPIs |
| 3.2 | Property Performance Module | Per-property and aggregate performance tracking |
| 3.3 | Occupancy Metrics | Occupancy rates, trends, and alerts |
| 3.4 | Collections Tracking | Aging reports, delinquency tracking, follow-up status |
| 3.5 | Cash Flow Visibility | Income, expense, and net cash flow views |
| 3.6 | Yardi Integration | Financial and operational data sync |
| 3.7 | Entrata Integration | Leasing and resident data sync |
| 3.8 | PM Reporting & Analytics | Standard reports for operational and investor review |
| 3.9 | Cross-Module Linking | Connect properties to deals and operational tasks |

---

### Phase 4: Advanced AI & Automation
**Duration:** 8–10 weeks  
**Goal:** Transform AI from assistive to proactive — ensuring work gets done.

#### Deliverables

| # | Deliverable | Description |
|---|---|---|
| 4.1 | Proactive AI Workflows | AI monitors data and triggers tasks/reminders automatically |
| 4.2 | Executive Intelligence Briefings | Automated weekly executive summaries across all modules |
| 4.3 | Advanced Follow-Up Automation | Multi-step sequences for broker, collections, and ops follow-ups |
| 4.4 | Workflow Automation Engine | Configurable rules for recurring operational processes |
| 4.5 | Enhanced Knowledge Search | Semantic search across all platform data and documents |
| 4.6 | Performance Optimization | System tuning, caching, and reporting enhancements |
| 4.7 | Platform Documentation | Full technical and user documentation |

---

### Roadmap Timeline (Visual)

```
Month:  1    2    3    4    5    6    7    8    9   10   11   12
        |----Phase 1----|
                    |----Phase 2----|
                              |----Phase 3----|
                                        |--Phase 4--|
        
        ▲              ▲              ▲              ▲
        Ops Hub        Acquisitions   Property Mgmt  Advanced AI
        Launch         Launch         Launch         Maturity
```

---

## 6. Scope of Work

### 6.1 In Scope

| Category | Items |
|---|---|
| **Discovery & Planning** | Requirements workshops, integration assessment, architecture design |
| **Design** | UX/UI design for all three modules, responsive web application |
| **Development** | Custom platform development per phased roadmap |
| **Integrations** | Microsoft 365, Yardi, Entrata, CoStar (per API availability), AI services |
| **Testing** | Functional, integration, and user acceptance testing |
| **Deployment** | Production environment setup and launch |
| **Documentation** | User guides and technical documentation |
| **Training** | Team onboarding sessions per phase |

### 6.2 Out of Scope

| Item | Notes |
|---|---|
| Yardi / Entrata / CoStar license fees | Client maintains existing subscriptions |
| Microsoft 365 licensing | Client maintains existing subscriptions |
| AI API usage costs | Passed through at cost or billed separately |
| Cloud hosting / infrastructure | Estimated separately (~$200–500/month); client-owned account recommended |
| Data migration from legacy spreadsheets | Limited initial import included; bulk historical migration quoted separately |
| Mobile native applications | Web-responsive design included; native apps not included |
| Third-party system configuration | Changes within Yardi, Entrata, or CoStar admin panels |
| Ongoing support post-engagement | Available under retainer model or separate support agreement |

### 6.3 Client Responsibilities

| Responsibility | Detail |
|---|---|
| **Stakeholder availability** | Key user available 2–4 hours/week during discovery and UAT |
| **System access** | API credentials and admin access for Yardi, Entrata, CoStar, Microsoft 365 |
| **Timely feedback** | Design and deliverable reviews within 5 business days |
| **Decision authority** | Single point of contact for scope and priority decisions |
| **Test data** | Representative data for development and testing |

### 6.4 Acceptance Criteria

Each phase will be considered complete when:

1. All phase deliverables are deployed to the production environment
2. Client completes user acceptance testing with no critical defects open
3. Training session is delivered and documentation is provided
4. Client sign-off is obtained within 10 business days of UAT completion

---

## 7. Assumptions and Risks

### 7.1 Key Assumptions

| # | Assumption |
|---|---|
| A1 | Client has active subscriptions and API access (or ability to obtain access) for Yardi, Entrata, and CoStar |
| A2 | Microsoft 365 tenant admin can grant Graph API permissions for email/Teams integration |
| A3 | Team of ~5 users with defined roles; no complex multi-tenant requirements |
| A4 | Deal volume remains at 2–3 per month; platform sized accordingly |
| A5 | Client provides timely feedback and decisions to maintain schedule |
| A6 | CoStar integration scope depends on CoStar's API/export capabilities and licensing terms |
| A7 | English-language platform; no localization required |
| A8 | Client owns cloud infrastructure account (recommended) |

### 7.2 Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Third-party API limitations** (Yardi, Entrata, CoStar) | Medium | High | Early integration assessment in Phase 1; fallback to scheduled exports |
| **Scope evolution** as users interact with platform | High | Medium | Phased delivery with retainer flexibility; formal change control under fixed price |
| **CoStar integration restrictions** | Medium | Medium | Confirm API/export access during discovery; scope integration accordingly |
| **Client availability delays** | Medium | Medium | Scheduled review cadence; async feedback channels |
| **AI accuracy for action items** | Low | Medium | Human review step built into all AI-generated tasks; iterative tuning |
| **Data quality in source systems** | Medium | Medium | Data validation layer; flag inconsistencies rather than silently propagate |
| **Underestimated integration complexity** | Medium | High | Integration spike in Week 1–2 of each phase; adjust timeline if needed |

---

## 8. Pricing Options

Meridian Systems Consulting offers two engagement models. Both deliver the same platform vision; they differ in flexibility, risk allocation, and long-term partnership structure.

---

### Option 1: Fixed Price Engagement

| | |
|---|---|
| **Total Investment** | **$65,000** |
| **Timeline** | 6–9 months |
| **Payment Structure** | 30% at signing / 30% at Phase 2 start / 40% at final delivery |

#### Included

| Category | Coverage |
|---|---|
| Discovery & requirements | Full discovery workshops and documentation |
| Architecture & design | System architecture, UX/UI design |
| Development | All four phases per agreed scope document |
| Integrations | Microsoft 365, Yardi, Entrata, CoStar (per confirmed API access) |
| Testing | Functional, integration, and UAT support |
| Deployment | Production launch and initial training |

#### Fixed Price Terms

- Scope is defined in a formal Statement of Work (SOW) prior to development
- Changes to scope, integrations, or requirements may require a Change Order with additional cost and timeline impact
- Timeline assumes timely client feedback and system access
- Does not include ongoing support, enhancements, or AI API usage costs after delivery
- Hosting and third-party license fees are client responsibility

#### Best Suited For

Organizations with well-defined, stable requirements who prioritize budget certainty over flexibility.

---

### Option 2: Strategic Development Retainer *(Recommended)*

| | |
|---|---|
| **Monthly Investment** | **$8,000 / month** |
| **Included Hours** | Up to 80 development hours per month |
| **Estimated Duration** | 9–12 months to full platform maturity |
| **Estimated Total** | $72,000 – $96,000 |
| **Payment Structure** | Monthly invoicing; 30-day payment terms |

#### Included Each Month

| Category | Coverage |
|---|---|
| Development hours | Up to 80 hours/month (architecture, design, development, testing) |
| Roadmap planning | Monthly prioritization and roadmap review sessions |
| Integrations | Ongoing integration development and maintenance |
| AI workflow implementation | Iterative AI feature development and tuning |
| Enhancements | Feature refinements based on user feedback |
| Support | Bug fixes and platform stability for delivered features |
| Communication | Bi-weekly status updates; monthly executive review |

#### Retainer Terms

- Unused hours do not roll over month to month
- Hours exceeding 80/month billed at $125/hour with prior approval
- 30-day written notice required to terminate; client retains all delivered work product
- Minimum initial commitment: 3 months
- AI API usage and cloud hosting billed separately at cost

#### Best Suited For

Organizations where requirements will evolve as users adopt the platform — which, based on our discovery, is the expected case for Amit.

---

### Pricing Comparison

| Dimension | Fixed Price ($65K) | Retainer ($8K/mo) |
|---|---|---|
| **Budget certainty** | High | Moderate (monthly cap) |
| **Scope flexibility** | Low — change orders required | High — reprioritize monthly |
| **Time to first value** | 10–12 weeks | 8–10 weeks (faster iteration) |
| **AI iteration** | Limited to defined scope | Ongoing tuning and expansion |
| **Post-launch support** | Not included | Included |
| **Integration risk buffer** | Absorbed by vendor (or change order) | Managed incrementally |
| **Total estimated cost** | $65,000 | $72,000 – $96,000 |
| **Long-term partnership** | Project ends at delivery | Continuous improvement |

### Additional Costs (Both Options)

| Item | Estimated Cost |
|---|---|
| Cloud hosting (AWS/Azure) | $200 – $500 / month |
| AI API usage (Claude or equivalent) | $50 – $200 / month |
| Domain & SSL | $15 – $50 / year |

---

## 9. Recommendation

Based on our discovery conversations and assessment of this engagement, **we recommend Option 2: Strategic Development Retainer** at $8,000 per month.

This is not a recommendation driven by higher revenue. It is driven by fit.

### Why the Retainer Model Is the Better Fit

**1. Requirements will evolve — and they should.**

You are building an operational platform for five people who will use it daily. The first version will surface needs that no discovery session can fully anticipate. A retainer model allows you to reprioritize monthly based on what your team actually experiences — not what we guessed in a requirements document.

**2. Integration complexity favors incremental delivery.**

Yardi, Entrata, and CoStar each present unique integration challenges — API availability, data formats, licensing restrictions. A fixed-price engagement forces us to guess integration scope upfront, which either inflates the price to cover unknowns or creates friction when reality differs from assumptions. A retainer lets us validate each integration in practice and adjust.

**3. AI must be tuned to your workflows, not deployed generically.**

Your stated goal — AI that ensures completion of work, not just answers questions — requires iterative development. Action item extraction accuracy, summary relevance, and follow-up automation rules all improve with usage data and feedback. This is inherently an ongoing process, not a one-time deliverable.

**4. Your team size benefits from a partnership, not a project handoff.**

With five users, you do not need a large support organization — you need a responsive development partner who knows your platform and can make changes quickly. A retainer provides that continuity.

**5. The cost difference is modest relative to the risk reduction.**

The retainer model estimates $72,000–$96,000 over 9–12 months versus $65,000 fixed. The $7,000–$31,000 difference buys flexibility, ongoing support, and a platform that improves monthly rather than degrading after handoff.

### When Fixed Price Would Be Appropriate

If your requirements were stable, your integrations were confirmed and straightforward, and you had internal technical capacity to maintain and enhance the platform post-delivery, fixed price would be a reasonable choice. Based on our discovery, none of these conditions are met.

### Our Recommendation Summary

| | |
|---|---|
| **Recommended Model** | Strategic Development Retainer — $8,000/month |
| **Minimum Commitment** | 3 months ($24,000) |
| **Expected Duration** | 9–12 months |
| **Expected Total Investment** | $72,000 – $96,000 + hosting/API costs |
| **First Deliverable** | Operations Hub live within 8–10 weeks |

---

## 10. Next Steps

| Step | Action | Owner | Target Date |
|---|---|---|---|
| 1 | **Proposal review** — Client reviews this proposal and estimate | Amit | Within 1 week |
| 2 | **Clarification call** — 30-minute call to address questions | Both | Within 1 week |
| 3 | **Engagement selection** — Client selects pricing model | Amit | Within 2 weeks |
| 4 | **MSA & SOW execution** — Sign master agreement and statement of work | Both | Within 2 weeks |
| 5 | **Kickoff & access provisioning** — Schedule kickoff; client provides system access | Both | Week of kickoff |
| 6 | **Phase 1 discovery begins** — Requirements workshops and integration assessment | Meridian | Kickoff + 1 week |

### To Proceed

Please contact us to schedule a proposal review call:

**Meridian Systems Consulting**  
Email: proposals@meridiansystems.io  
Phone: (555) 014-2200

We look forward to partnering with Amit to build the operational platform your business needs.

---

*This proposal is confidential and intended solely for the use of Amit. Reproduction or distribution without written consent is prohibited.*

*© 2026 Meridian Systems Consulting. All rights reserved.*
