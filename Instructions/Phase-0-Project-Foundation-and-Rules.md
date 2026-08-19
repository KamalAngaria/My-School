# Phase 0 — Project Foundation & Rules

**Document Status:** LOCKED — SOURCE OF TRUTH
**Project:** East Point Public Senior Secondary School — Information & Communication Website
**School (Official Name):** East Point Public Senior Secondary School
**Phase:** 0 — Project Foundation & Rules

> This document is the working reference for all subsequent phases. Most previously open items have now been resolved and are marked as **FINALIZED DECISION** below. A small number of implementation-level items remain explicitly unresolved (see Section 5 — Open Decisions) and must be answered and approved before this document can be treated as final and locked. A final human review is still pending before this document moves to **Locked — Source of Truth**. Until then, no phase may treat a remaining open decision as though it has already been settled. Any future change to Phase 0 content requires an explicit revision, not an implicit override in a later phase.

---

## 1. Purpose of This Document

This document captures the current foundation, rules, constraints, and boundaries for the project before any design (Stitch prompts) or implementation (Antigravity/code) work begins. It exists so that:

- Future phases have a single, unambiguous reference point.
- Design and engineering decisions can be checked against agreed principles.
- Scope creep and silent feature additions are prevented.
- Items still under discussion are clearly separated from items already agreed, so no one mistakes a draft idea for an approved requirement.

Each item below is explicitly labeled as one of:

- **FINALIZED DECISION** — agreed and ready to be relied upon by later phases.
- **CONSTRAINT** — a binding limitation that applies regardless of finalization status.
- **OPEN DECISION** — not yet resolved; must not be treated as settled.
- **ASSUMPTION** — not yet stated by the project; to be validated, not invented.

---

## 2. Finalized Decisions

### 2.1 Project Identity — FINALIZED DECISION

- **Official School / Project Name:** East Point Public Senior Secondary School
- **Project Type:** School Information & Communication Website
- **Primary Platform:** Responsive web application

The school name is now finalized and is not a placeholder. All future phases (design, content, implementation) must use this exact name.

#### 2.1.1 School Branding / Visual Identity — FINALIZED DECISION

The school does not currently have an established visual identity that must be preserved. As part of this project, the digital visual identity/brand direction for the school will be **created**, not sourced from an existing identity.

This may include, in the appropriate later design phase:
- Logo direction
- Color palette
- Typography
- Visual language
- Design system

This is a design-direction decision only. It does **not** authorize AI or the developer to invent school history, achievements, official claims, or institutional facts (see Section 2.16 — Content Accuracy Rule).

### 2.2 Technology Stack (Version 1) — FINALIZED DECISION

**Frontend**
- HTML
- CSS
- JavaScript

**Backend / Data**
- Google Apps Script
- Google Sheets
- Google Drive

**AI / Design Tools**
- Google Stitch — UI/UX design generation and iteration
- Antigravity — AI-assisted frontend development and implementation
- ChatGPT / AI assistance — architecture, requirements, UX reasoning, prompt engineering, code review, debugging, security review, performance review, documentation, challenging design decisions

This is the Version 1 stack, not an irreversible lifetime lock. See Section 2.9 for the change-control rule.

### 2.3 Core Purpose — FINALIZED DECISION

The website is primarily an **official school information and communication platform**, while also supporting school representation, credibility, achievements, and admissions. It is not built as a marketing-first site, but representation and credibility are recognized as legitimate secondary purposes, not excluded ones.

Information must be:
> **Easy to find → easy to understand → easy to update.**

This purpose serves students, parents, visitors, and the school administration, and supports credibility through academic achievements, toppers/marks, school leadership, examination facilities, admission information, official notifications, and accurate contact information.

### 2.4 Core Product Principle — FINALIZED DECISION

> **Information first, decoration second.**

Every design decision must be evaluated against six criteria:
1. Clarity
2. Findability
3. Trust
4. Accessibility
5. Performance
6. Maintainability

### 2.5 Target Audiences (Prioritized) — FINALIZED DECISION

| Audience | Priority | Main Need |
|---|---:|---|
| Students | Highest | Notifications, exams, results, admissions |
| Parents | High | Admissions, school information, trust |
| Visitors | Medium | School identity, achievements, facilities |
| School Administration | Critical system user | Content management |

- The **public website** is designed primarily around students and parents.
- The **admin panel** is designed around the school administration; the authorized administrators are now finalized — see Section 2.5.1.

#### 2.5.1 Admin Access Model — FINALIZED DECISION

The control panel is accessible to exactly three categories of authorized school administrators:

- **Principal**
- **MD**
- **Clerk**

All three have **full access to all CMS functions** available in the control panel for Version 1. There is **no role hierarchy or tiered permission model** (e.g., no "Principal = full access, MD/Clerk = limited access"). The requirement is:

```
Principal + MD + Clerk
      → Authorized Administrators
      → Full Control Panel Access (all Version 1 CMS functions)
```

This resolves the previous open question of "Principal only vs. Principal + authorized school staff."

The exact authentication mechanism, credential management, sessions, and security implementation are **not** decided in Phase 0 — these remain part of the dedicated security phase (see Section 2.12).

### 2.6 Website Personality — FINALIZED DECISION

**Should communicate:** Trustworthy, Academic, Modern, Organized, Student-friendly, Professional, Official

**Should NOT feel:** childish, overly corporate, like a generic SaaS template, overloaded with animations, like an AI-generated template, unnecessarily luxurious, visually chaotic

**Design philosophy:**
> **Modern school, not modern startup.**

### 2.7 Content Priority Tiers — FINALIZED DECISION

**Tier 1 — Critical** (extremely easy to access)
- Latest notifications
- Important announcements
- Admissions
- Examination information
- Exam centre information (HPBOSE-authorized examination centre — see Section 2.7.1)

**Tier 2 — High importance**
- 10th and +2 Toppers / Academic Achievements (see Section 2.7.2)
- Principal
- MD
- School information
- Contact details

**Tier 3 — Supporting information**
- Gallery
- Facilities
- Activities
- General information
- School history

#### 2.7.1 Examination Centre Information — FINALIZED DECISION

The school is located in Himachal Pradesh and is **officially authorized by HPBOSE** as an examination centre. Applicable Class 10, +2, and SOS examinations — which would otherwise require students to travel to other examination centres — can be conducted at this school itself, according to the applicable HPBOSE authorization and examination rules.

- The examination-centre feature is **finalized** as a Tier 1 website feature.
- The fact that the school is an HPBOSE-authorized examination centre is **finalized**.
- The website must communicate this as an important school facility, using wording that accurately reflects:
  - HPBOSE authorization;
  - the school functioning as an examination centre;
  - applicable Class 10, +2, and SOS examinations being conducted at the school itself;
  - subject to applicable authorization/examination rules.
- The wording must **not** be exaggerated into absolute claims such as "all Class 10 exams always happen here," "all +2 exams always happen here," or "every examination is conducted here."
- Exact public-facing copy can be refined later during the content/design phase without changing this underlying factual requirement.

#### 2.7.2 Toppers / Academic Achievements — FINALIZED DECISION

The school has agreed to publicly display topper information. The website will include a **dedicated public section/page** for academic toppers/achievements.

Version 1 specifically includes:

**Class 10 Toppers**
- Student name
- Student photograph
- Marks / percentage

**+2 Toppers**
- Student name
- Student photograph
- Marks / percentage

This is a specific, bounded feature: **10th toppers + +2 toppers + their marks/percentage + photographs.** The school's public-display approval covers exactly this scope.

This is **not** a general student-result database. Version 1 does **not** include:
- Publishing every student's result
- A student result portal
- Student result login
- A complete result database

Any broader results system is out of scope for Version 1 unless explicitly decided later.

### 2.8 CMS-Managed Content vs. Application Structure — FINALIZED DECISION

**Architectural rule:** Content changes should not require code changes. This applies to *content*, not to the application's structural design.

**A. CMS-managed content** (administration must be able to change without modifying code):
- Notifications
- 10th and +2 Toppers (name, photograph, marks/percentage — see Section 2.7.2)
- Approved student images
- Admission notices / admission information
- Important dates
- Leadership information (Principal / MD)
- School information
- Contact information
- Exam-centre information
- Gallery content

**B. Application structure** (not editable via CMS; changes require development work):
- Navigation architecture
- Reusable UI components
- Layout system
- Design system
- Footer structure
- Frontend behavior
- Other technical/application structure

This distinction must not be blurred: the authorized administrators (Principal, MD, Clerk — Section 2.5.1) will be able to manage **content**, not the site's underlying architecture or UI structure.

### 2.9 Technology Rules — FINALIZED DECISION

- No unnecessary framework will be introduced simply because an AI tool suggests one.
- **Version 1** uses Google Sheets for structured data.
- **Version 1** uses Google Drive for image/file storage.
- Google Apps Script acts as the backend/integration layer bridging frontend and Google services.
- This is the Version 1 architecture, not a permanent, unchangeable commitment. Any future architecture or infrastructure change requires **explicit discussion and approval** before implementation — it is not a decision AI tools or a single contributor can make unilaterally.

### 2.9.1 Image Management (Version 1 Scope) — FINALIZED DECISION

For Version 1, image management means authorized administrators (Principal, MD, Clerk) can:

- Upload approved website images/files
- Replace approved website images/files
- Delete approved website images/files

Image management does **not** include, for Version 1:
- Advanced photo editing
- Image cropping software
- Photoshop-like functionality
- A complex media library
- Automatic design tools

Image management stays simple and CMS-focused: upload, replace, delete only.

### 2.9.2 School Content Ownership / Responsibility — FINALIZED DECISION

The school administration is responsible for the truth, accuracy, authorization, and publication of information entered into the website through the control panel.

- The **Principal, MD, and Clerk** are the authorized administrators responsible for managing website content through the control panel.
- AI tools and the developer are **not** the authoritative source for school facts.

AI/developer may:
- Structure information
- Format information
- Implement the CMS
- Technically publish information through the system

The school is responsible for:
- Verifying information
- Approving information
- Deciding what information should be published
- Maintaining the accuracy of information entered through the control panel

### 2.9.3 Publishing Behavior (Version 1) — FINALIZED DECISION

For Version 1, when an authorized administrator saves CMS content, it becomes publicly visible **immediately**.

```
Authorized Admin → Enter / Edit Content → Save → Immediately Public
```

- Version 1 does **not** include a Draft → Review → Publish workflow, unless explicitly decided later.
- The control panel does not require a separate publishing approval stage.
- This does **not** remove the school's responsibility (Section 2.9.2) for ensuring information is correct before saving it.

### 2.10 AI Usage Rules — FINALIZED DECISION

AI is a **development accelerator, not the product owner.**

- **Google Stitch:** visual exploration, UI generation, layout exploration, design iteration, responsive design ideas.
- **Antigravity:** frontend implementation, code generation, refactoring, debugging, testing, iteration.
- **ChatGPT / AI assistance:** architecture, requirements, UX reasoning, prompt engineering, code review, debugging, security review, performance review, documentation, challenging design decisions.

### 2.11 AI Quality Rule — FINALIZED DECISION

We will never accept: **"AI generated it, so it's good."**

Mandatory workflow for every AI-generated result:
```
AI generates → We inspect → We question → We test → We improve → We approve
```

- Unnecessary complexity created by AI → removed.
- Bad UX created by AI → rejected.
- Insecure code created by AI → replaced.

### 2.12 Security Rule

**Security requirement — FINALIZED DECISION:**
- Public users: **READ** public information only.
- Authorized administrators (**Principal, MD, Clerk** — see Section 2.5.1): **READ, CREATE, UPDATE, DELETE**, with full and equal access to all Version 1 CMS functions.
- Frontend JavaScript alone must **never** be relied on for authentication or authorization.
- The backend must enforce access control.

**Security implementation — OPEN DECISION:**
- The specific authentication method, session handling, and admin credential management are **not yet designed**.
- The set of authorized administrators (Principal, MD, Clerk) is finalized; the mechanism used to authenticate and authorize them is not.
- Formal security architecture is deferred to a dedicated security phase (see Section 5).

### 2.13 Performance Rule — FINALIZED DECISION

Design target: real students using mobile phones, not just a developer on fast Wi-Fi.

Priorities:
- Optimized images
- Responsive images
- Lazy loading where appropriate
- Minimal unnecessary JavaScript
- Minimal unnecessary animations
- Efficient API requests
- Clean CSS
- Sensible fonts
- Fast initial page load

### 2.14 Mobile-First Principle — FINALIZED DECISION

The website must work properly on: Mobile, Tablet, Laptop, Desktop, Large screens.

Guiding question for every design decision:
> **What happens on a student's phone?**

### 2.15 Accessibility Rule — FINALIZED DECISION

Accessibility is part of the product, not a final decoration. Considerations include:
- Semantic HTML
- Keyboard navigation
- Readable font sizes
- Sufficient contrast
- Meaningful labels
- Alt text
- Focus states
- Accessible forms
- Reduced-motion considerations

### 2.16 Content Accuracy Rule — FINALIZED DECISION

This is an official school website; fabricated information is unacceptable.

- AI may help **format or structure** content.
- AI must **not invent**: school achievements, marks, names, contact numbers, dates, admission rules, examination information, official statements.
- Real school data must come from the school.
- This applies directly to the Examination Centre facts (Section 2.7.1): AI must not exaggerate the finalized HPBOSE authorization into absolute claims (e.g., "all exams always happen here"), and must not invent facts beyond what the school has confirmed.

### 2.17 Privacy Rule — FINALIZED DECISION

- Only publish information the school has explicitly approved for public display.
- Special care required for: student photographs, names, marks, results, contact information.
- The admin system must avoid exposing unnecessary private data through public APIs.
- The school has confirmed public-display approval specifically for **Class 10 and +2 toppers** (name, photograph, marks/percentage — Section 2.7.2). This approval does not extend to any broader student dataset; approval for any other student information must be separately and explicitly confirmed before publication.

### 2.18 Scope for Version 1 — Included — FINALIZED DECISION

**Public website**
- Homepage
- School information
- Leadership
- Notifications
- Admissions
- 10th and +2 Toppers / Academic Achievements (see Section 2.7.2)
- Examination centre — HPBOSE-authorized (see Section 2.7.1)
- Contact
- Gallery where appropriate

**Admin system**
- Secure admin access for Principal, MD, and Clerk (see Section 2.5.1)
- Notification management
- Topper management (10th and +2 toppers only — see Section 2.7.2)
- School information management
- Admission information management
- Exam-centre information management
- Image management (upload/replace/delete — see Section 2.9.1)

**Technical**
- Responsive frontend
- Google Apps Script integration
- Google Sheets data
- Google Drive images
- Basic security
- Performance optimization
- Accessibility
- Testing

### 2.19 Explicitly Out of Scope for V1

See [Section 6 — Out-of-Scope Items](#6-out-of-scope-items).

### 2.20 Success Definition — FINALIZED DECISION

The project is successful if:

- **Student can:** Open website → immediately see important information → find notification/exam/admission information quickly.
- **Parent can:** Understand the school → evaluate credibility → find admission details → contact the school.
- **Visitor can:** Understand the school's identity, achievements, leadership and facilities without confusion.
- **Admin (Principal, MD, Clerk — Section 2.5.1) can:** Update important website content without asking the developer.
- **Developer can:** Maintain the system without fighting a giant AI-generated codebase.

### 2.21 Project Quality Standard — FINALIZED DECISION

The final website must satisfy all of the following (a site is not finished merely because "it looks good"):

```
UX               ✓
Visual Design    ✓
Responsive       ✓
Accessibility    ✓
Performance      ✓
Security         ✓
Maintainability  ✓
Content Accuracy ✓
Admin Usability  ✓
```

### 2.22 Project Development Rule (Process Gate) — FINALIZED DECISION

Mandatory sequence for every phase — no jumping ahead:

```
PHASE → DISCUSSION → DECISIONS → DOCUMENTATION → REVIEW → FINAL APPROVAL → LOCK → NEXT PHASE
```

Explicit example given: Stitch prompts will **not** be created during Phase 0. Product foundation must be established first. This document itself remains in **Ready for Final Review** status until it completes this same gate (remaining Section 5 open items resolved → final human review → approved → locked).

---

## 3. Constraints

These are binding limitations future phases must respect, regardless of which items above are still open:

1. **Stack constraint (Version 1):** Frontend limited to HTML/CSS/JavaScript; backend limited to Google Apps Script; data limited to Google Sheets; files limited to Google Drive — unless a stack or architecture change is explicitly discussed and agreed first. Not an irreversible lifetime lock.
2. **No frontend-only auth:** Authentication/authorization logic must be enforced server-side, never trusted from client-side JavaScript alone. (Specific implementation is still open — see Section 5.)
3. **No fabricated content:** AI tools (Stitch, Antigravity, ChatGPT/AI assistance) must not invent school-specific facts, achievements, marks, names, numbers, dates, rules, or statements — including examination-centre details and branding history.
4. **No unapproved publication beyond agreed scope:** Toppers' names, photographs, and marks/percentage may be published for Class 10 and +2 toppers only (Section 2.7.2), per the school's approval. This approval does not extend to a general student-result database. Any other student photographs, names, marks, results, or contact information may only be published with separate, explicit school approval.
5. **Mobile-first mandate:** All design/technical decisions must be evaluated against the mobile experience, not just desktop.
6. **Process gate:** No phase (e.g., Stitch design prompts, implementation) may begin before the current phase's decisions are documented, reviewed, and approved.
7. **CMS/structure separation:** Only items classified as "CMS-managed content" (Section 2.8-A) are editable by administration without a code change. Application structure (Section 2.8-B) is not administrator-editable.
8. **Equal admin access:** Principal, MD, and Clerk each receive full, equal access to all Version 1 CMS functions — no role hierarchy or tiered permissions.
9. **Immediate publish, no approval stage:** Saved CMS content goes live immediately (Section 2.9.3); this does not remove the school's responsibility for accuracy before saving (Section 2.9.2).
10. **Image management scope:** Administrator image tools are limited to upload, replace, and delete of approved files — no editing/cropping tools (Section 2.9.1).
11. **No silent resolution:** No future phase may treat an item listed in Section 5 as decided without an explicit, documented decision.

---

## 4. Assumptions

No assumptions have been explicitly stated by the project as agreed premises. This section is intentionally left empty pending future clarification. Any assumption introduced in later phases must be recorded and validated here or in the relevant phase document — it must not be silently treated as a finalized decision, and it must not be invented on the project's behalf.

---

## 5. Open Decisions

The following items remain explicitly **unresolved**. Future phases must not silently resolve these without documented discussion, and must not present any of them as finalized. All other items previously listed here (school name, branding/logo availability, admin access model, topper public-approval, and examination-centre verification) have now been resolved — see Sections 2.1, 2.1.1, 2.5.1, 2.7.1, and 2.7.2.

1. **Detailed security architecture** (Section 2.12) — Authentication method, session handling, and admin credential management design are deferred to a dedicated security phase. The set of authorized administrators (Principal, MD, Clerk) is finalized; the implementation is not.
2. **Future stack/architecture changes** — Phase 0 allows the Version 1 stack to change if a genuine technical reason is found, but requires prior discussion and approval; no such discussion or decision has occurred yet.

---

## 6. Out-of-Scope Items

Explicitly **not** being built in Version 1 (unless a later, explicit decision changes this):

- Student login system
- Online classes
- Attendance system
- Fee payment system
- Complete student ERP
- Online examination system
- Live chat
- Complex parent portal
- Student messaging
- AI chatbot
- Unnecessary social-media features

**Rationale (as stated in source):** Including these would turn a focused information website into a completely different product. Scope discipline matters.

---

## 7. Document Governance

- This document reflects the current state of Phase 0 discussion, distinguishing **FINALIZED DECISION**, **CONSTRAINT**, **OPEN DECISION**, and **ASSUMPTION** items explicitly.
- No open decision listed in Section 5 may be silently treated as resolved, defaulted, or finalized by any future phase, document, design prompt, or implementation step.
- No features, technologies, or requirements beyond what is documented here should be assumed by future phases.
- This document may only move from **Ready for Final Review** to **Locked — Source of Truth** after a final human review, and after all remaining Section 5 items are explicitly answered, documented, and approved.
- Any modification to this document must go through the same process gate defined in Section 2.22 (Discussion → Decisions → Documentation → Review → Final Approval → Lock).
