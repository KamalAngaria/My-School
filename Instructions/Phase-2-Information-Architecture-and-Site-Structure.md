# Phase 2 — Information Architecture & Site Structure

**Project:** East Point Public Senior Secondary School — Information & Communication Website
**Phase:** 2 — Information Architecture & Site Structure
**Depends on:** Phase 0 — Project Foundation & Rules (**Locked**); Phase 1 — Product & User Requirements

**Document Status:** LOCKED — SOURCE OF TRUTH

> Phase 0 and Phase 1 are locked/finalized project foundations. This document does not reopen, reinterpret, weaken, contradict, or replace them. Phase 2 follows the same project process gate:
>
> **DISCUSSION → DECISIONS → DOCUMENTATION → REVIEW → FINAL APPROVAL → LOCK → NEXT PHASE**
>
> Phase 2 defines structure and information architecture only.

---

## 1. Purpose of Phase 2

Phase 2 defines the structural organization of the website.

It determines:

* What major public sections the website contains
* What information belongs under each section
* How users move between major areas
* Which information deserves direct visibility
* How public information is grouped
* How the administrative control panel is structurally organized
* Which features are separate from one another
* Which content should not be unnecessarily duplicated

This phase does **not** determine:

* Visual design
* Colors
* Typography
* Spacing system
* Animation
* UI components
* Stitch prompts
* Frontend code (HTML/CSS/JS implementation)
* Backend code
* Google Sheets schema
* Apps Script API/endpoint design
* Authentication mechanism
* Security implementation
* Performance implementation details

Those belong to later phases (see Section 26).

---

## 2. Source Rules Governing Phase 2

Phase 2 must remain consistent with the following established requirements.

### 2.1 Core Principle

> **Information first, decoration second.**

The structure must make important information easy to find before considering visual presentation.

### 2.2 Primary Public Users

1. Students
2. Parents
3. Visitors

### 2.3 Administrative Users

1. Principal
2. MD
3. Clerk

All three have equal/full Version 1 CMS access. No role-based permission tiers.

### 2.4 Public Information Priority

**Tier 1 — Critical**
* Latest notifications
* Important announcements
* Admissions
* Examination information
* Examination-centre information

**Tier 2 — High importance**
* Achievements / Toppers
* Events
* Principal
* MD
* School information
* Contact information

**Tier 3 — Supporting**
* Gallery
* Facilities
* Activities
* General information
* School history

### 2.5 Notification Categories

Exactly four:
1. Admission
2. SOS Examination
3. School Announcements
4. Events

There is no generic "Other" notification category.

### 2.6 Events

Events are not merely notifications. Events require a **separate public feature/page**, even though Events are also one of the four notification categories.

### 2.7 Achievements

The achievement system is flexible. It can contain legitimate school/student achievements, including:
* Class 10 topper
* +2 topper
* Sports achievement
* Academic achievement
* Other legitimate school/student achievements

Class 10 and +2 toppers specifically require:
* Name
* Photograph
* Marks / percentage

This is not a general student-result system.

### 2.8 Examination Centre

The school must clearly communicate its HPBOSE-authorized examination-centre facility. Applicable Class 10, +2 and SOS examinations may be conducted at the school itself according to applicable authorization and examination rules. The architecture must give this feature appropriate visibility because it is a Tier 1 requirement.

### 2.9 Admissions

Admissions are informational only. Version 1 does not include:
* Online application
* Online enquiry
* Student application portal
* Parent application portal

### 2.10 CMS Principle

CMS-managed content must be updateable without changing application code. Application structure itself is not CMS-editable.

### 2.11 Content Lifecycle

All CMS content follows:

**Create → Edit → Save → Immediately Public → Delete manually**

There is no automatic expiration, archive, history, rollover, or cleanup.

### 2.12 Governing Principles Preserved From the Working Draft

The following principles established in earlier Phase 2 discussion remain in force and are elaborated throughout this document:

* Public website organized around user information needs, not technical database categories.
* Homepage as a gateway, not a replacement for the entire site.
* Avoid unnecessary content duplication.
* Public architecture and CMS architecture do not need to be identical.
* Information priority does not automatically equal navigation position.
* Mobile usability, findability, simplicity, maintainability, and accuracy guide structural decisions.
* No accidental introduction of Phase 0/1 out-of-scope features.

---

## 3. Public Website — Structural Requirement

The public website should be organized around the user's information needs rather than around technical database categories.

The architecture must allow a student to quickly answer questions such as:

* What is happening at school?
* Is there an important notification?
* What are the exam details?
* What is the admission information?
* Where will my examination take place?
* Who are the toppers?
* How can I contact the school?

Parents and visitors should similarly be able to understand:

* What is this school?
* Who leads it?
* What does it offer?
* What are its achievements?
* How do admissions work?
* Where is it located?
* What examination facilities does it provide?

---

## 4. Final Information Architecture

The following conceptual structure replaces the earlier ambiguous working sitemap.

```text
PUBLIC WEBSITE

HOME

SCHOOL
└── About School
    ├── About
    ├── History
    ├── Mission & Vision
    ├── Academics
    ├── Facilities
    └── Activities

LEADERSHIP
├── Principal
└── MD

INFORMATION
├── Admissions
├── Notifications
│   ├── All
│   ├── Admission
│   ├── SOS Examination
│   ├── School Announcements
│   └── Events
└── Examination Centre
    ├── SOS Examination
    ├── Class 10
    └── +2

ACHIEVEMENTS
├── Toppers
│   ├── Class 10
│   └── +2
├── Academic Achievements
├── Sports Achievements
└── Other Achievements

EVENTS

GALLERY
├── School Building
├── School Office
└── Exam Hall

CONTACT
├── School
├── Principal
└── MD
```

**This is a conceptual information architecture, not a final visual navigation design.** Visual layout, styling, and component design are decided in later phases.

---

## 5. Navigation Structure

The public navigation must remain clean and mobile-friendly.

The major public destinations must all remain accessible:

* Home
* School
* Leadership
* Information
* Achievements
* Events
* Gallery
* Contact

Under **Information**:
* Admissions
* Notifications
* Examination Centre

Navigation must use **grouped navigation** so the structure remains manageable, especially on mobile, rather than a huge flat navigation bar listing every sub-item.

Important features must not be hidden merely to make the navigation look minimal. The Examination Centre — a school-specific, high-priority feature — must remain easy to find.

---

## 6. School vs. Leadership

School information and leadership are separate conceptual areas.

**SCHOOL** contains:
* About
* History
* Mission & Vision
* Academics
* Facilities
* Activities

**LEADERSHIP** contains:
* Principal
* MD

Phase 1 explicitly requires Principal Message and MD Message as part of the required public school/leadership information. This requirement is preserved here, not treated as optional, and not presented as separate child pages. Instead:

* Principal is a leadership profile that includes the required Principal Message/profile content.
* MD is a leadership profile that includes the required MD Message/profile content.

Each leadership profile supports the full Phase 1 leadership fields:
* Name
* Photo
* Designation
* Principal Message / MD Message

Leadership is authoritative for identity/profile information.
Contact is authoritative for contact-routing information.

The message is content **within** the leadership profile, not a separate public navigation destination. There is no `/principal-message`, `/md-message`, or other separate duplicate message page.

This remains consistent with Phase 1. Leadership is a separate public destination, not a subsection of School.

---

## 7. Examination Centre — High-Priority Architecture

This is one of the most important architectural decisions in this document.

The school is an HPBOSE-authorized examination centre, and the website must communicate this clearly and accurately.

The Examination Centre structure prioritizes:

```text
EXAMINATION CENTRE
├── SOS Examination
├── Class 10
└── +2
```

SOS receives the strongest structural priority because many SOS/open-school candidates come to the school specifically for examinations. This is a **structural/information priority**, not a factual exaggeration.

The website must continue to use the factual wording established in Phase 0 and Phase 1:

> Applicable Class 10, +2, and SOS examinations can be conducted at the school according to applicable HPBOSE authorization and examination rules.

The following are not permitted unless explicitly provided by the school as fact:
* "All exams always happen here."
* "Every Class 10 exam happens here."
* "Every +2 exam happens here."
* "Every SOS exam happens here."

The Examination Centre area should allow users to find:
* SOS examination information
* Relevant dates/notices
* Instructions
* Class 10 examination information
* +2 examination information
* Centre-related information

There is no separate, competing "Examinations" section that duplicates Examination Centre.

---

## 8. Notifications Architecture

Notifications must have exactly four categories:
1. Admission
2. SOS Examination
3. School Announcements
4. Events

Public Notifications structure:

```text
NOTIFICATIONS
├── All
├── Admission
├── SOS Examination
├── School Announcements
└── Events
```

There is no "Other," "Miscellaneous," or "General" category.

Admission and SOS Examination remain the two primary notification categories requiring the strongest public visibility.

Notifications are manually managed and remain published until an administrator edits or deletes them. There is no automatic expiry, archive, history, automatic hiding, or automatic academic-year rollover.

---

## 9. Events — Single Authoritative Record

Events are a separate public feature/page. An Event is the authoritative content record.

One Event may be surfaced:
* On the Events page
* On the homepage where relevant
* In the Events notification context

Administrators are **not** required to maintain two independent copies of the same event simply because it appears in both Events and Notifications.

The Event record may contain:
* Event poster/banner
* Event/invitation message
* Event details

Events remain publicly visible until an administrator manually removes them. There is no automatic "upcoming/past" lifecycle behavior that hides or deletes records based on dates. Dates may be displayed as information, but the administrator controls visibility manually.

---

## 10. Achievements Architecture

```text
ACHIEVEMENTS
├── Toppers
│   ├── Class 10
│   └── +2
├── Academic Achievements
├── Sports Achievements
└── Other Achievements
```

Class 10 and +2 topper records specifically support:
* Student name
* Student photograph
* Marks / percentage

The achievement system remains flexible and may contain other legitimate school/student achievements. It is not:
* A student result portal
* A general student-result database
* Student login
* Individual result lookup

Multiple achievement records may coexist. There is no automatic yearly rollover, automatic deletion, automatic archival, automatic replacement, or mandatory year-based filtering. The system displays whatever achievement records administrators have deliberately added and not deleted.

---

## 11. Contact and Leadership Data

Leadership is the authoritative source for the Principal and MD identity/profile records. Their contact fields (phone, WhatsApp, email) are maintained as part of those same leadership records. The Contact section is the authoritative **public destination** for presenting school, Principal, and MD contact information, but it does not create a second, independent copy of the contact records.

```text
LEADERSHIP
├── Principal   (authoritative profile record, including contact fields)
└── MD          (authoritative profile record, including contact fields)

CONTACT
├── School
│   ├── Address
│   └── Map/location
├── Principal   (surfaces contact fields from the Leadership record)
└── MD          (surfaces contact fields from the Leadership record)
```

Leadership pages may also surface the same Principal/MD contact information. This does not create contradictory independent contact records — the public website may present the same authoritative contact information in multiple relevant places (see Section 16 — Content Source-of-Truth Mapping).

There is no contact form, no Principal personal physical address, and no MD personal physical address.

---

## 12. Gallery Architecture

One Gallery destination containing three named organizational sections:

```text
GALLERY
├── School Building
├── School Office
└── Exam Hall
```

The Gallery may contain a flexible collection of approved school images that the school chooses to publish within these three named sections. The school decides which approved images are published and where they belong within School Building, School Office, and Exam Hall.

**Total maximum capacity: 15 published images across the entire Gallery** — this is the total Gallery capacity, not 15 images per section. There is no fourth "Flexible Collection" navigation/category, and no section is required to contain a fixed number of images.

There is no advanced image editing, no albums, no tags, no filters, no search, no complex media management, and no automatic image organization. There is no automatic expiration, deletion, archive, history, or cleanup — gallery images follow the project's universal manual lifecycle model (manual upload, replace, delete; save makes content immediately public).

---

## 13. Search

Version 1 has **no site-wide search**. Any future addition of search requires an explicit project decision through the established project change-control process.

---

## 14. Homepage Architecture

The homepage is a gateway. It must not attempt to contain the complete website.

The homepage should give especially strong visibility to:
1. Admission information/process
2. SOS examination information
3. Important/current notifications

Detailed content belongs primarily to its dedicated destination, not to the homepage:
* Detailed Achievements belong primarily to the **Achievements** destination.
* Detailed Events belong primarily to the **Events** destination.
* Detailed Leadership belongs primarily to the **Leadership** destination.
* Detailed School information belongs primarily to the **School/About** destination.
* Detailed Gallery belongs primarily to the **Gallery** destination.
* Contact information remains available through **Contact**.

The homepage may contain limited contextual links/highlights where genuinely useful (for example, a brief pointer toward an achievement or event), but it must not become a condensed copy of the whole website.

Toward the lower/supporting area of the homepage, school/MD information, map/location, and contact information may be surfaced as limited highlights only — not as detailed content.

The homepage must not be overloaded with every subsection. Every detailed feature has an appropriate dedicated destination where required. **Homepage is a gateway, not a replacement for the entire website.**

---

## 15. Cross-Linking Principle

Users should not have to repeatedly navigate backward and forward through unrelated pages to reach logically related information. Cross-links should be direct and contextual.

Examples:

| From | To |
|---|---|
| Admission notification | Admissions |
| SOS notification | Examination Centre / SOS Examination |
| Homepage topper highlight | Achievements / relevant topper section |
| Homepage event highlight | Event details / Events |
| Principal information | Leadership / Principal |
| Contact information | Contact |

Only logically related information should be directly connected. Excessive cross-links added merely for navigation density are not introduced.

**Goal:** direct related information → fewer unnecessary navigation steps.

---

## 16. Content Source-of-Truth Mapping

A CMS-managed record has one authoritative content source while being allowed to surface in multiple public contexts.

| Content | Authoritative CMS Area | May Also Surface On |
|---|---|---|
| Admission information | Admissions | Home, relevant Notifications |
| Event | Events | Home, Events, Event notification context |
| Achievement | Achievements | Home, Achievements |
| Principal | Leadership / Principal profile | Contact (contact information only) |
| MD | Leadership / MD profile | Contact (contact information only) |
| Examination Centre | Examination Centre | Home, relevant SOS/Class 10/+2 contexts |

No content is duplicated into multiple independent copies merely because it is displayed in multiple places.

---

## 17. Empty Content Architecture

If a CMS-managed section has no published content, the public website should hide that section rather than show an unnecessary empty block.

Examples:
* No events → Events content section may be hidden.
* No gallery images → corresponding gallery content may be hidden.
* No achievement records → achievement content section may be hidden.

This does **not** mean the entire navigation item must necessarily disappear — navigation structure and content availability are separate concerns. No placeholder school facts are invented to fill an empty section.

---

## 18. Image Fallback

If an approved profile/content image is missing, the public experience should support a generic placeholder rather than a broken image. This applies especially to:
* Principal
* MD
* Achievements
* Events
* Gallery/content imagery where appropriate

A real person's photograph is never invented or substituted.

---

## 19. Public Page vs. Section Rule

A clear distinction is maintained between:

**A. Major public destinations:**
* Home
* School
* Leadership
* Information
* Achievements
* Events
* Gallery
* Contact

**B. Sections inside those destinations** — related information grouped within a destination.

Separate pages are not created merely because a content field exists. The architecture remains simple and navigable.

---

## 20. URL Architecture

Phase 2 establishes the requirement for clean, simple, predictable public destinations. Conceptually:

```text
/about
/leadership
/admissions
/notifications
/examination-centre
/achievements
/events
/gallery
/contact
```

Conceptual navigation hierarchy does not require URL nesting. URLs may remain flat and do not need to mirror the visual/navigation nesting of the information architecture. This is intentional because the project requires clean, simple, predictable URLs.

Exact technical routing implementation belongs to a later frontend phase. URL structures are not over-engineered. URLs should be:
* Readable
* Predictable
* Minimal
* Easy to navigate
* Aligned with public information architecture

---

## 21. Footer Architecture

The footer provides quick access to important areas, including:
* Admissions
* Notifications
* Examination Centre
* Achievements
* Events
* Contact

The footer may also surface essential school identity/contact/location information where appropriate. The footer does not duplicate the entire primary navigation.

---

## 22. Admin Control Panel Architecture

The admin structure is minimal and organized, replacing a large flat structure:

```text
ADMIN DASHBOARD

CONTENT
├── Notifications
├── Events
├── Admissions
├── Examination Centre
├── Achievements
└── Gallery

SCHOOL
├── School Information
├── Leadership
└── Contact
```

All Principal, MD, and Clerk users have equal/full access to all Version 1 CMS functions. No role-based permission tiers or unnecessary admin modules are introduced.

The admin control panel is a protected administrative area requiring secure admin access, as required by Phase 1. The authentication/security mechanism is **not** decided in Phase 2 and belongs to the appropriate later implementation phase.

---

## 23. Admin Dashboard Responsibility

The dashboard should structurally surface:
* Quick content-management actions
* Current notifications
* Recent updates
* Number of achievements
* Number of events
* Gallery usage (e.g., 12/15)
* Important warnings
* Basic system status

This is **structural scope only**. Visual dashboard cards, charts, colors, and UI components are not designed in Phase 2.

---

## 24. Information Priority

Preserving the Phase 0/1 priority hierarchy:

**Tier 1**
* Latest notifications
* Important announcements
* Admissions
* Examination information
* Examination Centre

**Tier 2**
* Achievements / Toppers
* Events
* Principal
* MD
* School information
* Contact

**Tier 3**
* Gallery
* Facilities
* Activities
* General information
* History

**Special structural priority:**

Within Examination Centre:
1. SOS Examination
2. Class 10
3. +2

Within Notifications:
1. Admission
2. SOS Examination
3. School Announcements
4. Events

This is information priority, not necessarily visual styling.

---

## 25. Mobile-First Navigation Principle

The architecture must support clean mobile navigation. Preferred conceptual grouping:

```text
Home

School
└── About School
    ├── About
    ├── History
    ├── Mission & Vision
    ├── Academics
    ├── Facilities
    └── Activities

Leadership
├── Principal
└── MD

Information
├── Admissions
├── Notifications
└── Examination Centre

Achievements
Events
Gallery
Contact
```

Excessive navigation depth is avoided. Users are not required to pass through unrelated parent pages merely to reach a specific important feature.

---

## 26. Architectural Principle Priority

When two structural choices conflict, this priority order applies:

1. Simplicity
2. Findability
3. Maintainability
4. Accuracy
5. Visual flexibility

Every decision remains subordinate to the locked requirements of Phase 0 and Phase 1. No Phase 2 decision may override a Phase 0/1 constraint.

---

## 27. What Phase 2 Must Not Decide

Phase 2 explicitly does **not** decide:

* Final visual layout
* Colors
* Typography
* Spacing system
* Animation
* UI components
* Stitch prompts
* Frontend code
* Backend code
* Google Sheets schema
* Apps Script endpoints
* Authentication mechanism
* Security implementation
* Performance implementation details

Those belong to later phases.

---

## 28. Phase 2 Final Structural Model

**FINALIZED STRUCTURAL PROPOSAL — PENDING PHASE 2 FINAL REVIEW**

```text
HOME

SCHOOL
└── About School
    ├── About
    ├── History
    ├── Mission & Vision
    ├── Academics
    ├── Facilities
    └── Activities

LEADERSHIP
├── Principal
└── MD

INFORMATION
├── Admissions
├── Notifications
│   ├── All
│   ├── Admission
│   ├── SOS Examination
│   ├── School Announcements
│   └── Events
└── Examination Centre
    ├── SOS Examination
    ├── Class 10
    └── +2

ACHIEVEMENTS
├── Toppers
│   ├── Class 10
│   └── +2
├── Academic Achievements
├── Sports Achievements
└── Other Achievements

EVENTS

GALLERY
├── School Building
├── School Office
└── Exam Hall

CONTACT
├── School
├── Principal
└── MD
```

---

## 29. Phase 2 Acceptance Criteria

Phase 2 is ready for final review when:

* Public information architecture is defined.
* Major public destinations are defined.
* School and Leadership are clearly separated.
* Information is grouped logically.
* Examination Centre has explicit priority for SOS, then Class 10, then +2.
* Notification categories are finalized and correctly structured.
* Events and Event Notifications have a clear non-duplicative relationship.
* Achievements are flexible but Toppers remain clearly structured.
* Contact data has a clear authoritative conceptual location.
* Gallery structure and 15-image total are preserved.
* Search is explicitly excluded.
* Homepage responsibility is defined.
* Cross-linking rules are defined.
* Content source-of-truth rules are defined.
* Empty content behavior is defined.
* Image fallback behavior is defined.
* Footer responsibility is defined.
* Clean URL requirements are defined without over-engineering.
* Admin architecture is minimal and organized.
* Dashboard responsibilities are defined.
* Mobile-first navigation structure is defined.
* No Phase 0/1 requirement is contradicted.
* No Phase 0/1 out-of-scope feature is introduced.
* Phase 2 remains within its proper boundary.

---

## 30. Document Status

**Current status: Draft — Pending Final Review.** Phase 2 is **not** locked.

Phase 2 has completed its final pre-lock correction pass and is ready for final human approval. No Phase 3 work should begin until Phase 2 is explicitly approved and locked.
