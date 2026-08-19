# Phase 1 — Product & User Requirements

**Document Status:** LOCKED — SOURCE OF TRUTH
**Project:** East Point Public Senior Secondary School — Information & Communication Website
**Phase:** 1 — Product & User Requirements
**Depends on:** `Phase-0-Project-Foundation-and-Rules.md` (**Locked — Source of Truth**)

> Phase 0 is locked and is not modified, contradicted, or reinterpreted by this document. Where Phase 1 references a Phase 0 decision, it is restating that decision for context, not re-deciding it. This document defines **what** the website and CMS must accomplish for its users — not **how** it will be technically built. Information architecture, UX flows, visual design, Google Stitch prompts, frontend implementation, backend/data architecture, and admin UI implementation are out of scope for Phase 1 and belong to later phases.

Each item below is labeled as one of:

- **FINALIZED DECISION (Phase 1)** — agreed at this phase and ready to be relied upon by later phases.
- **CARRIED FROM PHASE 0** — a Phase 0 decision restated here for context; Phase 0 remains the source of truth.
- **OPEN DECISION** — not yet resolved; must not be treated as settled.
- **OUT OF SCOPE** — explicitly not part of Version 1.

---

## 1. Purpose of This Document

Phase 1 defines the product and user requirements that sit between the Phase 0 foundation and later design/implementation phases. It answers:

> "What does the website need to accomplish?"

It deliberately does **not** answer:

> "How will we technically build it?"

This document exists so that information architecture, UX flows, visual design (Stitch), and implementation (Antigravity/code) all have a single, agreed reference point for *requirements*, before any of those downstream activities begin — consistent with the Phase 0 process gate (Discussion → Decisions → Documentation → Review → Final Approval → Lock → Next Phase).

---

## 2. Context Carried From Phase 0 — CARRIED FROM PHASE 0

For reference only. Phase 0 remains authoritative for all of the following:

- **Project:** East Point Public Senior Secondary School — Information & Communication Website.
- **Version 1 technology:** HTML, CSS, JavaScript (frontend); Google Apps Script (backend/integration); Google Sheets (structured data); Google Drive (images/files).
- **AI tools:** Google Stitch, Antigravity, ChatGPT/AI assistance — used as development accelerators, not product owners.
- **Core product principle:** "Information first, decoration second."
- **Primary purpose:** The website is primarily an official school information and communication platform, while also supporting school representation, credibility, achievements, and admissions.
- **Primary public audiences:** Students, Parents, Visitors.
- **Administrative users:** Principal, MD, Clerk — all three with equal/full access to all Version 1 CMS functions; no role-based permission tiers.
- **Examination centre:** The school is an HPBOSE-authorized examination centre; applicable Class 10, +2, and SOS examinations can be conducted at the school itself according to applicable authorization and examination rules.
- **Achievement/topper feature scope:** Public display of Class 10 and +2 toppers is school-approved (student name, photograph, marks/percentage). No general student-result database.
- **Image management scope:** Upload, replace, delete of approved website images/files only.
- **Publishing behavior:** Saving CMS content makes it immediately public; no Draft → Review → Publish workflow in Version 1.
- **Content responsibility:** The school administration is responsible for the accuracy, authorization, and publication of information entered through the CMS.

---

## 3. User Groups — FINALIZED DECISION (Phase 1)

### 3.1 Public Users

| User Group | Nature of Use |
|---|---|
| Students | Primary day-to-day audience; needs notifications, exam and admission information quickly. |
| Parents | Needs to evaluate the school, understand admissions, and reach the school. |
| Visitors | General public; needs to understand the school's identity and credibility. |

### 3.2 Administrative Users

| User Group | Access Level |
|---|---|
| Principal | Full, equal access to all Version 1 CMS functions |
| MD | Full, equal access to all Version 1 CMS functions |
| Clerk | Full, equal access to all Version 1 CMS functions |

There is no role hierarchy or tiered permission model among Principal, MD, and Clerk (carried from Phase 0, Section 2.5.1). This applies uniformly across every requirement in this document.

---

## 4. Student Requirements — FINALIZED DECISION (Phase 1)

The website must help students:

1. Find important school notifications quickly.
2. Find admission information.
3. Find SOS examination-date information.
4. Understand the school's HPBOSE-authorized examination-centre facility.
5. Find relevant examination information and instructions published by the school.
6. View Class 10 and +2 toppers and other published school achievements.
7. See achievement/topper names, photographs, and marks/percentage where applicable.
8. Find important school announcements and events.
9. Find official school contact information.

No additional student-facing features are included at this phase.

---

## 5. Parent Requirements — FINALIZED DECISION (Phase 1)

The website must help parents:

1. Understand who the school is.
2. Understand the school's academic identity and information.
3. Learn about school leadership.
4. Find Principal and MD information/contact details when provided.
5. Understand admission information.
6. Find relevant admission dates, requirements, and instructions when published.
7. See academic achievements / toppers.
8. Understand the examination-centre facility.
9. Find official school contact information.
10. Understand relevant school facilities/information.

This is an informational experience for parents, not an online parent portal (see Section 21 — Out of Scope). Online admission application or enquiry is not part of Version 1 (see Section 14).

---

## 6. Visitor Requirements — FINALIZED DECISION (Phase 1)

Visitors should be able to:

1. Understand the school's identity.
2. Learn about the school.
3. See leadership information.
4. See achievements.
5. Understand relevant facilities.
6. Understand the examination-centre facility.
7. Find admission information.
8. Find contact information.

The experience should build trust in line with the Phase 0 personality principle ("Modern school, not modern startup") without becoming a generic marketing site.

---

## 7. Administrator Requirements — FINALIZED DECISION (Phase 1)

Principal, MD, and Clerk must all have equal/full access to all Version 1 CMS functions. They must be able to manage:

**Notifications**
- Create
- Edit
- Delete
- Save/publish immediately

**Achievements** (including toppers)
- Manage Class 10 toppers
- Manage +2 toppers
- Manage other legitimate school/student achievements
- Update achievement details/description
- Update relevant image/photo
- Add or remove achievement records as needed

**School information**
- Update school information (About the School, School History, Mission/Vision, Academics, Facilities, Activities, Principal Message, MD Message)

**Leadership**
- Update Principal information (Name, Photo, Designation, Contact information, Message/Profile)
- Update MD information (Name, Photo, Designation, Contact information, Message/Profile)

**Admissions**
- Update admission information
- Update relevant dates
- Update relevant instructions

**Examination Centre**
- Update examination-centre information

**Events**
- Create, edit, replace, delete published events
- Manage event poster/banner and invitation/message details

**Gallery / Images / Files**
- Upload approved website images/files
- Replace approved website images/files
- Delete approved website images/files
- Manage the three named gallery sections (School Building, School Office, Exam Hall) within a total gallery capacity of up to 15 images (see Section 18)

No role-based permissions and no draft/review/publish workflow are introduced (carried from Phase 0).

---

## 8. Notification System — FINALIZED DECISION (Phase 1)

The notification system is a major core feature.

### 8.1 Notification Categories

There are exactly **four** notification categories. There is no "Other" category.

**Primary categories** (must receive the strongest visual prominence on the public website):
1. Admission
2. SOS Examination

**Secondary categories:**
3. School Announcements
4. Events

### 8.2 Notification Data Fields

The CMS notification structure must support:

- Title
- Category
- Description
- Start Date
- End Date
- Time information where required by the school's notification
- Important / Priority

**Field clarification:**
- **Start Date / End Date** = manually entered and maintained by the Principal, MD, or Clerk as information about the notification's relevant date period. These dates do not automatically control whether the notification remains publicly available. The system does not automatically treat a notification as expired merely because the End Date has passed.
- **Important / Priority** = a simple indicator, not a complex multi-level priority system (no Low/Medium/High/Critical/Urgent tiers).

### 8.3 Notification Behavior

- Administrators can create, edit, and delete notifications.
- Saving a notification immediately makes it public (carried from Phase 0 publishing behavior).
- Notifications follow the Universal Current-State / Manual Lifecycle Model (Section 9). There is no notification history, archive, version history, automatic expiration, automatic deletion, or automatic hiding. If the school does not update a notification, it remains published exactly as stored.

---

## 9. Universal Current-State / Manual Lifecycle Model — FINALIZED DECISION (Phase 1)

This is a major, phase-wide requirement that applies to **all CMS-managed content** across the entire project.

The website is **not** an archival or historical content-management system. The CMS maintains current content exactly as the school administration has entered it.

**Universal rule:**

```
CREATE           → Current content exists
EDIT / UPDATE     → Current content is changed/replaced
SAVE              → Updated content becomes immediately public
DELETE            → Current content is removed
```

There must be **no automatic lifecycle behavior**. Specifically, Version 1 must **not** automatically:

- Expire content
- Archive content
- Delete content because a date has passed
- Replace content because a new year has started
- Create version history
- Create revision history
- Create automatic snapshots
- Roll over academic years
- Clean up old content automatically
- Hide content merely because its date is in the past

**Dates and years are informational/control data fields only.** They do not, by themselves, automatically control the lifetime or visibility of a CMS record — any such control is exercised manually by an administrator.

**Example:** *2026 — Class 10 Topper — Rahul — 96%.* If the school does nothing in 2027 or 2028, that exact record remains published. If the school wants to change it, the Principal/MD/Clerk manually edits, replaces, or deletes it.

This principle applies to:
- Notifications
- Admission information
- SOS examination information
- School announcements
- Events
- Achievements (including toppers)
- Marks
- Dates
- Times
- Principal information
- MD information
- School information
- Examination-centre information
- Images
- Files
- Gallery content
- Other CMS-managed content

**Important distinction — "no automatic history" does not mean single-record only:**

The school may manually create multiple legitimate records if it wants them. For example, the school could deliberately create a 2026 topper record and a 2027 topper record; both may remain published if the school chooses to keep both. The system must not automatically decide that one is "old" and remove it. **The school controls content lifecycle through the CMS**, manually, at all times.

---

## 10. Content Responsibility — FINALIZED DECISION (Phase 1)

The school administration is the authoritative source for official website information.

Principal, MD, and Clerk are responsible for:
- Verifying information
- Deciding what should be published
- Entering/updating information
- Maintaining accuracy

AI and the developer are **not** authoritative sources for school facts. The system provides the ability to publish information but does not replace the school's responsibility for verifying it. (Carried from Phase 0, Section 2.9.2.)

---

## 11. Basic Input Validation — FINALIZED DECISION (Phase 1)

Content responsibility (factual correctness) and technical input validation are distinct concerns.

- The school is responsible for **factual correctness** of published content.
- The CMS is responsible for preventing **obviously malformed technical input**, for example:
  - Required title cannot be empty.
  - Invalid date format should be rejected.
  - Invalid time format should be rejected where time is required.
  - Required fields must be present.
  - Invalid file types should be rejected where applicable.

The detailed validation system and any complex business rules are **not** designed at this phase.

---

## 12. Achievements (Including Toppers) — FINALIZED DECISION (Phase 1)

The public achievement system is **flexible** and is **not** defined as only a "topper" system.

Achievements may include, for example:
- Class 10 topper
- +2 topper
- Sports achievement
- Academic achievement
- Other legitimate school/student achievements

The system must not assume every achievement is a topper record.

An achievement should support:
- Achievement data/details
- Description
- Relevant image/photo when provided

The exact final field structure may be refined later, but the product requirement is that achievements are flexible and not restricted to academic toppers.

Within this flexible achievement system, Version 1 specifically includes a dedicated presentation of:

**Class 10 Toppers**
- Student name
- Student photograph
- Marks / percentage

**+2 Toppers**
- Student name
- Student photograph
- Marks / percentage

The school has approved public display of this topper information (carried from Phase 0, Section 2.7.2).

This is **not**:
- A complete student result database
- Student login
- Individual student result lookup
- A general result portal
- Automatic yearly result rollover

Achievements (including toppers) follow the Universal Current-State / Manual Lifecycle Model (Section 9): the school decides whether to add a new record, edit an existing record, keep multiple records, or delete a record. Dates/years do not automatically expire or replace achievement records; multiple achievement records may coexist when administrators deliberately create them.

---

## 13. Events — FINALIZED DECISION (Phase 1)

Events are **not** merely another notification category for the public experience. Events have a **separate public page/feature**, distinct from the notification system, even though "Events" is also one of the four notification categories used to announce them (Section 8.1).

Each event should support:
- Event poster/banner
- Event/invitation message/details

The exact technical implementation (page layout, data structure) is **not** decided in Phase 1.

Events follow the Universal Current-State / Manual Lifecycle Model (Section 9):
- Create, edit, replace, delete
- Save = immediately public
- No automatic expiration, archive, history, or deletion based on event date.

If the school does not update or delete an event, it remains published according to the universal CMS rule.

---

## 14. Admissions — FINALIZED DECISION (Phase 1)

Version 1 requires public admission **information**. Administrators must be able to update admission-related information and relevant dates/instructions.

**Online admission is excluded from Version 1.** There is no:
- Online admission application
- Online admission enquiry
- Online admission form
- Student application portal
- Parent application portal

This exclusion is final and is not carried forward as an open decision (see Section 21 — Out of Scope).

The exact admission content fields will be defined later, when the school provides them (see Section 21 — Open Decisions).

Admission information follows the Universal Current-State / Manual Lifecycle Model (Section 9).

---

## 15. Examination Centre — FINALIZED DECISION (Phase 1)

The website must clearly communicate the school's HPBOSE-authorized examination-centre facility, explaining the practical benefit that applicable Class 10, +2, and SOS examinations can be conducted at the school itself according to applicable authorization and examination rules.

The authorization must not be exaggerated into unsupported absolute claims (carried from Phase 0, Section 2.7.1).

Examination-centre information is CMS-managed and follows the Universal Current-State / Manual Lifecycle Model (Section 9).

---

## 16. School Information & Leadership — FINALIZED DECISION (Phase 1)

### 16.1 School Information

The public website must provide school information. The CMS must allow administrators to manage:

- About the School
- School History
- Mission / Vision
- Academics
- Facilities
- Activities
- Principal Message
- MD Message

All of these are CMS-managed. Principal, MD, and Clerk can update the information. Saving updated information makes it immediately public. No additional school-information sections are added beyond this list unless separately established as a project requirement.

### 16.2 Leadership Information

Leadership information includes:
- Principal
- MD

For both Principal and MD, the CMS must allow editing of:
- Name
- Photo
- Designation
- Contact information
- Message/Profile

All three administrators — Principal, MD, Clerk — have full access to these controls. No additional leadership roles are introduced at this phase.

Both school information and leadership information follow the Universal Current-State / Manual Lifecycle Model (Section 9): no automatic replacement, no automatic history, no automatic expiration.

---

## 17. Contact Information — FINALIZED DECISION (Phase 1)

The public website must provide:

**School contact/location**
- School address
- Embedded school map/location (map embedding is a website-implementation detail, not decided further at this phase)

**Principal and MD contact**
- Phone
- WhatsApp
- Email

Principal and MD **personal physical addresses are not included**. No additional contact methods are added. No contact form is included in Version 1.

---

## 18. Gallery / Images / Files — FINALIZED DECISION (Phase 1)

Gallery is a required Version 1 public website feature.

### 18.1 Gallery Structure

The gallery has three main named sections:
1. School Building
2. School Office
3. Exam Hall

The control panel allows the school to manage **up to 15 gallery images in total**, distributed/organized across the three named gallery sections: School Building, School Office, and Exam Hall. This is a total capacity of 15 images, not 15 images in addition to the three named sections. The school decides how the images are distributed across the sections and what approved images to place there.

### 18.2 Gallery Management

Administrators can upload, replace, and delete approved images/files across the three named gallery sections, up to the total 15-image capacity. There is no requirement for:
- Advanced image editing
- Cropping software
- Photoshop-like features
- Albums, tags, filters, or search
- Complex media management
- Automatic image organization

### 18.3 Gallery Lifecycle

Gallery image management follows the Universal Current-State / Manual Lifecycle Model (Section 9):
- Create/upload
- Edit/replace
- Delete
- Save makes the current content public immediately

There is no automatic expiration, automatic deletion, automatic archival, version history, automatic replacement, or automatic cleanup. Replacing an image/file means an administrator has decided to replace it — the system does not automatically delete or replace assets because of dates, years, or age.

---

## 19. Public Information Priority — FINALIZED DECISION (Phase 1)

This preserves the Phase 0 priority hierarchy (Phase 0, Section 2.7) as a **product priority requirement**, not yet a page/layout decision.

**Tier 1 — Critical**
- Latest notifications
- Important announcements
- Admissions
- Examination information
- Examination-centre information

Within notifications, the two primary categories deserving strong public visibility are explicitly:
- Admission
- SOS Examination

**Tier 2 — High importance**
- Achievements (including 10th and +2 toppers)
- Events
- Principal
- MD
- School information
- Contact information

**Tier 3 — Supporting information**
- Gallery
- Facilities
- Activities
- General information
- School history

---

## 20. Must-Have V1 Product Capabilities — FINALIZED DECISION (Phase 1)

### Public

- School information (About, History, Mission/Vision, Academics, Facilities, Activities, Principal Message, MD Message)
- Leadership (Principal and MD profiles)
- Notifications (Admission, SOS Examination, School Announcements, Events)
- Admission information
- SOS examination information
- Examination-centre information
- Achievements, including Class 10 and +2 toppers
- Events (dedicated public page/feature)
- Contact information (school address/map; Principal/MD phone, WhatsApp, email)
- Gallery (School Building, School Office, Exam Hall — up to 15 images total)

### Admin

- Secure admin access
- Full, equal access for Principal, MD, and Clerk
- Notification CRUD
- Achievement/topper CRUD
- Event CRUD
- School information management
- Leadership management
- Admission information management
- Examination-centre information management
- Gallery/image/file upload, replace, delete
- Immediate publishing on save

---

## 21. Out of Scope / Not Currently Required — OUT OF SCOPE

The following are explicitly excluded from Phase 1 and Version 1. They must not be introduced or reopened as Phase 1 or Version 1 requirements. These are closed decisions and are not carried forward as open questions:

- Online admission application
- Online admission enquiry
- Student login
- Parent portal
- Online classes
- Attendance system
- Fee payment
- Student ERP
- Online examination system
- Live chat
- Student messaging
- AI chatbot
- General student-result database
- Notification history/archive system
- Automatic notification expiration
- Automatic content expiration
- Automatic academic-year rollover
- Version history/revision history
- Automatic content cleanup
- Complex media-management system
- Role-based admin permissions

---

## 22. Open Decisions

The following Phase 1 questions remain genuinely unresolved. They are not treated as failures — they are intentionally deferred until the relevant content or decision is available. No new open items are introduced beyond what is listed here:

1. **Admission information/content fields** — exact fields to be defined once the school provides admission content.

Technical implementation questions (architecture, security implementation, database schema, UI design, map embedding method, achievement field structure finalization) belong to later phases and are intentionally excluded from this list — see Phase 0, Section 5 for the currently open Phase 0 technical items (security implementation, future stack changes).

The following items are considered **closed** and must not be reopened here: school name, branding direction, admin users and their equal/full access, HPBOSE examination-centre status, public topper/achievement information approval, online admission exclusion, the four notification categories, absence of notification history/archive, the universal manual lifecycle model, immediate publishing, school content responsibility, gallery structure and total 15-image capacity, finalized contact methods (no contact form), and the removal of the "Related Information" notification concept from Phase 1.

---

## 23. Acceptance Principles

Phase 1 should be considered successful when this document clearly answers:

- Who uses the website?
- Why do they use it?
- What information do they need?
- What must the public website allow them to do?
- What must the admin panel allow Principal/MD/Clerk to do?
- Which information is highest priority?
- What are the primary notification categories?
- What information belongs in a notification?
- How does content lifecycle work?
- Who is responsible for factual content?
- What is explicitly NOT being built?

---

## 24. Document Governance

- **Current status:** Draft — Pending Final Review. Phase 1 is **not** locked.
- Phase 1 must not be claimed complete unless all unresolved Phase 1 decisions (Section 22) have actually been discussed and approved.
- This document follows the same process gate established in Phase 0: Discussion → Decisions → Documentation → Review → Final Approval → Lock → Next Phase.
- Phase 1 does **not** include Stitch prompts, UI designs, database schemas, API specifications, code, or detailed security architecture — these belong to later phases and must not be silently introduced here.
- Phase 0 remains locked and unmodified. Any apparent conflict between this document and Phase 0 must be resolved in favor of Phase 0, and flagged for correction rather than silently reinterpreted.
