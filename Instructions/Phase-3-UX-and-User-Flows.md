# Phase 3 — UX & User Flows

**Project:** East Point Public Senior Secondary School — Information & Communication Website
**Phase:** 3 — UX & User Flows
**Depends on:** Phase 0 — Project Foundation & Rules (**Locked**); Phase 1 — Product & User Requirements (**Locked**); Phase 2 — Information Architecture & Site Structure (**Locked**)

**Document Status:** FINAL — PENDING HUMAN APPROVAL

> Phase 0, Phase 1, and Phase 2 are finalized/locked. This document does not reopen, contradict, reinterpret, or replace any decision from those phases. Phase 3 defines **how** students, parents, visitors, and administrators move through the already-defined website structure to accomplish their tasks — not visual design, not implementation.
>
> This document follows the established project gate:
>
> **DISCUSSION → DECISIONS → DOCUMENTATION → REVIEW → FINAL APPROVAL → LOCK → NEXT PHASE**

---

## Phase 3 Objective

Define how real users should move through the website and accomplish important tasks with minimum friction.

The guiding principle is:

> **The website should make the user's task obvious instead of making the user understand the website's architecture.**

The project's core principle remains:

> **Information first, decoration second.**

UX decisions must prioritize, in order:

1. Findability
2. Clarity
3. Trust
4. Simplicity
5. Mobile usability
6. Accessibility
7. Maintainability
8. Visual quality

Visual quality is important, but when visual decoration conflicts with fast access to important information, information wins.

---

## 1. UX Personality

The experience should feel:

* Modern
* Professional
* Premium
* Simple
* Trustworthy
* Academic
* Organized
* Student-friendly
* Official

It must not feel:

* Like a generic SaaS website
* Like an AI-generated template
* Childish
* Overly corporate
* Visually chaotic
* Over-animated

The experience should communicate:

> **Modern school, not modern startup.**

---

## 2. Homepage UX

The homepage should be a **clean, premium gateway**, not a complete copy of the entire website.

It should contain:

* School logo
* Clear school identity
* Strong school-name hierarchy
* Clean navigation
* Strong landing/hero area
* Direct communication of the school's important identity and facilities
* Admission information access
* SOS examination information access
* HPBOSE-authorized examination-centre information access
* Important/current notification access
* Relevant supporting previews

The homepage should have **medium information density**:

> Important information + useful previews, without becoming overloaded.

The homepage should not behave like a sitemap.

---

## 3. Homepage First Impression

When a student opens the website, the student should quickly understand:

1. This is the official school website.
2. This is the correct school.
3. Important school information is available here.
4. Current notifications can be found here.
5. Admission information is available.
6. SOS/examination-centre information is available.

The homepage should establish trust and clarity before decorative elements.

---

## 4. Homepage Priority

The homepage should give strong visibility to:

**Primary**
* Important/current notifications
* Admission
* SOS examination information
* Examination-centre information

**Secondary**
* Events
* Principal/MD introduction
* Other useful school information
* Achievement access

**Supporting**
* Gallery
* Facilities
* Activities
* Other school information

This is consistent with the Phase 2 homepage-scope correction: detailed Achievements, Events, Leadership, School information, and Gallery content live primarily in their own destinations, with the homepage offering previews/highlights rather than full detail.

The homepage must not place a topper section inside the initial landing/hero area.

Class 10 and +2 topper information may be surfaced elsewhere on the homepage as an appropriate preview/highlight, but detailed topper information belongs to Achievements.

---

## 5. SOS Examination Notification UX

An important/current SOS examination notification must be reachable from:

1. Homepage
2. Notifications
3. Examination Centre

The same relevant information should not require users to maintain multiple independent copies (consistent with the Phase 2 single-authoritative-record principle).

From the homepage, an SOS notification should provide a clear action such as:

> **View Details**

which takes the user to the relevant notification/details.

From the Examination Centre section, the user should be able to reach the relevant SOS examination information.

---

## 6. Student — Find Notification Flow

Primary flow:

```text
Home
 ↓
Notifications
 ↓
Select Notification
 ↓
Notification Details
```

Important notifications should also be discoverable directly from the homepage.

The user should not be required to understand the difference between the website's navigation categories before finding a current notice.

---

## 7. Notification → Contextual Navigation

Notifications may provide contextual links to an existing public destination when useful. This is navigation behavior only. It does not create a "Related Information" notification field, category, or CMS concept — that concept was explicitly closed in Phase 1.

Examples:

```text
Admission Notification
        ↓
View Admission Details
```

```text
SOS Examination Notification
        ↓
View Examination Centre / SOS Details
```

The purpose is simply to reduce unnecessary navigation, consistent with the Phase 2 cross-linking principle (direct related information → fewer unnecessary navigation steps).

---

## 8. Notification UX

Important notifications should be visually distinguishable from normal notifications, while remaining professional.

The distinction must remain simple and should not introduce multiple priority levels.

The existing Phase 1 requirement remains:

* Important/Priority is a simple indicator.
* There are no Low/Medium/High/Critical/Urgent tiers.

When a notification contains a date, the interface must make it clear what that date represents. This is a display-clarity requirement only; per Phase 1, Start Date/End Date remain informational/control fields and never automatically hide, expire, or archive a notification.

The four notification categories remain exactly:

1. Admission
2. SOS Examination
3. School Announcements
4. Events

No additional notification category should be introduced.

---

## 9. Student — Admission Flow

The admission experience should answer the student's questions in a natural order:

```text
Admissions
 ↓
Is admission currently open?
 ↓
Start Date / End Date
 ↓
Eligibility
 ↓
Required Documents
 ↓
Instructions
 ↓
Contact School
```

The current admission status should receive the strongest informational priority within the Admissions experience.

The school/admin provides the current admission status and relevant admission dates/instructions. The public website displays the information provided by the school. Phase 3 does not introduce automatic admission Open/Closed calculation from Start Date/End Date.

At the end of the admission information, contacting the school should be obvious.

Exact admission CMS fields are not defined here; Phase 1 explicitly leaves exact admission content fields open until the school provides the actual content (Phase 1, Section 22, Open Decisions).

Version 1 remains informational only and must not introduce online admission applications, online enquiries, or application portals (closed per Phase 1, Section 21 — Out of Scope).

---

## 10. Parent — Admission Flow

Parents may use the admission page as part of a broader school-evaluation journey.

The experience should allow:

```text
Admissions
 ↓
Admission Status
 ↓
Eligibility
 ↓
Requirements
 ↓
Important Dates
 ↓
Instructions
 ↓
Contact
```

Parents should also be able to naturally explore:

* School information
* Leadership
* Academics
* Facilities
* Achievements
* Examination Centre
* Contact

The website should support exploration without forcing a rigid sequence.

---

## 11. Visitor UX

Visitors are a secondary public audience per locked Phase 0/1 requirements. Their experience should be **exploratory rather than a mandatory linear funnel**.

The conceptual visitor journey is:

```text
Visitor
 ↓
Home
 ↓
Understand School
 ↓
Leadership
 ↓
Achievements
 ↓
Facilities / Gallery
 ↓
Examination Centre
 ↓
Admissions
 ↓
Contact
```

This is **not** a mandatory sequence. A visitor may enter directly through any relevant public page and should be able to explore related information naturally, using the same cross-linking and navigation structure available to other users.

The Visitor UX should help answer:

* What school is this?
* What does the school offer?
* Who leads it?
* What achievements does it have?
* What facilities/information are available?
* What examination-centre facility does it provide?
* How can I learn about admission?
* How can I contact the school?

---

## 12. Examination Centre UX

The Examination Centre is a high-priority feature.

When a user enters the Examination Centre section, the conceptual order should be:

```text
1. Explanation of HPBOSE-authorized examination-centre status
        ↓
2. SOS Examination information / relevant SOS notice
        ↓
3. Class 10 / +2 choices
        ↓
4. Current examination notices/information
```

This ordering reflects the Phase 2 structural priority: SOS → Class 10 → +2.

The website must communicate the facility accurately. Do not turn the authorized-centre status into unsupported absolute claims.

Use the factual requirement already established in Phase 0 and Phase 1:

> Applicable Class 10, +2, and SOS examinations can be conducted at the school according to applicable HPBOSE authorization and examination rules.

The UX should make the practical benefit easy to understand without exaggeration.

---

## 13. Examination Information Entry Points

Users should be able to reach examination information from both:

* Notifications
* Examination Centre

These are complementary entry points, not competing systems.

A student who starts with a notification should be able to reach the relevant examination information. A student who starts with Examination Centre should also be able to find the relevant notification/information.

---

## 14. Achievements UX

The Achievements area should be category-based.

The initial priority should be:

1. Class 10 Toppers
2. +2 Toppers
3. Other legitimate achievements

Other achievement categories may include:

* Academic Achievements
* Sports Achievements
* Other Achievements

The exact categories already established in Phase 2 must not be changed.

Class 10 and +2 toppers must remain clearly separated.

Topper information includes:

* Student name
* Photograph
* Marks/percentage

The achievement system remains flexible and can contain other legitimate school/student achievements. It is not a general student-result system.

---

## 15. Achievement Lifecycle UX

Achievement records follow the project's universal manual lifecycle model:

```text
Create
 ↓
Save
 ↓
Immediately Public
 ↓
Remain Published
 ↓
Manual Edit / Replace / Delete
```

Records do not automatically disappear because the year changes.

The school controls which achievements remain publicly published. Topper information should therefore be treated as a legitimate school achievement/recognition feature that the school may continue to publish as part of its institutional representation.

No automatic yearly rollover should be introduced.

---

## 16. School Information UX

The School area should use:

> **One main page with sections that users can explore.**

The required sections remain:

* About
* History
* Mission & Vision
* Academics
* Facilities
* Activities

The experience should avoid creating unnecessary navigation depth. Users should be able to move naturally between related school information.

---

## 17. Leadership UX

The homepage may show a small introduction to:

* Principal
* MD

The homepage should primarily show:

* Photo
* Name

Detailed information belongs in the Leadership section.

Each leadership profile should support the Phase 1-finalized fields:

* Photo
* Name
* Designation
* Message/Profile
* Contact

The detailed profile should communicate both institutional authority and human credibility.

---

## 18. Contact UX

Contact information must be immediately usable.

**Principal**
* Phone → actionable phone call
* WhatsApp → actionable WhatsApp contact
* Email → actionable email

**MD**
* Phone → actionable phone call
* WhatsApp → actionable WhatsApp contact
* Email → actionable email

**School**
* Address → clearly presented
* Map → interactive location/map

The Contact page should make these actions obvious.

No contact form is introduced because it is outside Version 1 scope (closed per Phase 1/Phase 2).

---

## 19. Mobile UX

The website is **mobile-first**.

Expected priority:

> Mobile first → Laptop/Desktop

The mobile experience should use:

> **Comfortable scrolling with properly organized sections.**

Do not interpret mobile-first as:

> "Put everything into tiny cards."

The content must remain readable and comfortable.

Critical flows must work especially well on mobile:

* Notifications
* Admissions
* SOS examination
* Examination Centre
* Achievements
* Contact

---

## 20. Homepage and Page Navigation

Users should have multiple sensible entry points to important information.

For example:

```text
Home
 ↓
Notification
 ↓
Contextual Destination
```

or:

```text
Home
 ↓
Examination Centre
 ↓
SOS
 ↓
Relevant Notice
```

or:

```text
Home
 ↓
Admissions
 ↓
Contact
```

Contextual links should be used wherever they genuinely reduce friction. Do not add links simply to increase navigation density.

---

## 21. Events UX

Events are a separate public feature.

A user should be able to:

```text
Home / Events / Notification
 ↓
Event
 ↓
Poster + Event Details
```

The Event itself remains the authoritative event record (per Phase 2, Section 9). The same event may be surfaced in multiple relevant contexts without creating duplicate independent records.

Events do not automatically disappear after their date.

---

## 22. Admin Dashboard UX

After secure login, the admin should see a dashboard containing:

* Recent updates
* Quick actions
* Current content overview
* Useful management shortcuts
* Gallery capacity
* Relevant status information

The dashboard should help an administrator immediately answer:

> **"What can I update, and what needs my attention?"**

The dashboard should not behave like a developer control panel.

Secure admin access is required, per Phase 1 and Phase 2, Section 22; the authentication/security mechanism itself is not decided here and belongs to a later implementation phase.

---

## 23. Admin — Notification Flow

The primary notification creation flow should be:

```text
Admin Login
 ↓
Dashboard
 ↓
Notifications
 ↓
Add Notification
 ↓
Enter Information
 ↓
Validation
 ↓
Save
 ↓
Published Successfully
 ↓
Now Live on Website
```

Editing follows:

```text
Dashboard
 ↓
Notifications
 ↓
Select Notification
 ↓
Edit
 ↓
Save
 ↓
Updated and Live
```

Because Version 1 uses immediate publishing, there is no draft/review/approval stage.

---

## 24. Admin — Delete Flow

Deletion should require confirmation.

Conceptually:

```text
Select Content
 ↓
Delete
 ↓
Confirmation
 ↓
Confirm Delete
 ↓
Removed From Public Website
```

This is especially important because Version 1 has no revision/history system.

---

## 25. Admin — Achievement Flow

Conceptually:

```text
Dashboard
 ↓
Achievements
 ↓
Add Achievement
 ↓
Select Achievement Type
 ↓
Enter Details
 ↓
Upload Approved Image
 ↓
Save
 ↓
Immediately Public
```

For Class 10/+2 toppers, the administrator must be able to manage the required topper information (name, photograph, marks/percentage).

---

## 26. Admin — Leadership Flow

```text
Dashboard
 ↓
School
 ↓
Leadership
 ↓
Principal / MD
 ↓
Edit
 ↓
Update Profile / Photo / Contact / Message
 ↓
Save
 ↓
Immediately Public
```

All three authorized administrators (Principal, MD, Clerk) have equal access.

---

## 27. Admin — Contact Flow

Conceptually:

```text
Dashboard
 ↓
Contact
 ↓
Select Contact Type
 ↓
School / Principal / MD
 ↓
Edit Contact Information
 ↓
Save
 ↓
Immediately Public
```

**School**
* School address
* Map/location information

**Principal**
* Phone
* WhatsApp
* Email

**MD**
* Phone
* WhatsApp
* Email

* Principal, MD, and Clerk have equal/full access.
* Saving makes the updated contact information immediately public.
* Contact information must remain consistent with the finalized Phase 1 public contact requirements.
* No contact form is introduced.
* No new communication feature is introduced.
* No additional contact methods are introduced beyond the finalized Phase 1 requirements.
* The technical implementation of phone links, WhatsApp links, email links, and map integration belongs to later implementation phases.
* This section defines UX behavior only.

---

## 28. Admin — Admissions Flow

```text
Dashboard
 ↓
Admissions
 ↓
Edit
 ↓
Update the current admission information provided by the school
 ↓
Save
 ↓
Immediately Public
```

The admin experience must support whatever admission information, relevant dates, and instructions the school has approved for publication. Exact admission CMS fields remain open until the school provides the actual admission content, as specified in Phase 1.

Exact admission fields remain dependent on the school's actual admission content — this remains an open item carried from Phase 1 (Section 22, Open Decisions). Do not invent admission requirements.

---

## 29. Admin — School Information Flow

Conceptually:

```text
Dashboard
 ↓
School Information
 ↓
Select Section
 ↓
About / History / Mission & Vision / Academics / Facilities / Activities
 ↓
Edit Information
 ↓
Save
 ↓
Immediately Public
```

* Principal, MD, and Clerk have equal/full access.
* Saving makes the updated information immediately public.
* No draft/review/approval workflow exists.
* No additional school-information sections are introduced beyond those established in Phase 1/Phase 2.
* This is UX behavior only; exact visual layout belongs to later phases.

---

## 30. Admin — Examination Centre Flow

Conceptually:

```text
Dashboard
 ↓
Examination Centre
 ↓
Select Information
 ↓
Update Examination Centre Information
 ↓
Save
 ↓
Immediately Public
```

* Principal, MD, and Clerk have equal/full access.
* Examination-centre information is CMS-managed.
* Saving makes the updated information immediately public.
* The public website must accurately communicate the HPBOSE-authorized examination-centre facility.
* Do not introduce unsupported claims.
* Do not introduce automatic expiration or archival.
* Exact technical implementation belongs to later phases.

---

## 31. Admin — Events Flow

Conceptually:

```text
Dashboard
 ↓
Events
 ↓
Create / Select Event
 ↓
Add or Edit Event Poster/Invitation + Event Details
 ↓
Save
 ↓
Immediately Public
```

Editing:

```text
Dashboard
 ↓
Events
 ↓
Select Event
 ↓
Edit / Replace
 ↓
Save
 ↓
Updated and Live
```

Deletion:

```text
Dashboard
 ↓
Events
 ↓
Select Event
 ↓
Delete
 ↓
Confirmation
 ↓
Confirm Delete
 ↓
Removed From Public Website
```

* Events are a separate public feature from the notification system.
* Events may also be announced through the Events notification category. This does not create duplicate independent event records.
* Principal, MD, and Clerk have equal/full access.
* Events follow the universal manual lifecycle.
* Event dates do not automatically expire, archive, or delete events.
* Saving makes event changes immediately public.
* The event supports the already-finalized Phase 1 content: poster/banner and invitation/message details.
* Do not introduce registration, RSVP, ticketing, or other new functionality.

---

## 32. Admin — Gallery Flow

```text
Dashboard
 ↓
Gallery
 ↓
Select Section
 ↓
School Building / School Office / Exam Hall
 ↓
Upload / Replace / Delete
 ↓
Save
 ↓
Immediately Public
```

The dashboard/control panel should show the total gallery capacity, for example:

> **Gallery: 12 / 15 images**

The 15-image limit is total across all three sections, not per section (per Phase 2, Section 12).

---

## 33. Admin Feedback

After successful saving, the system should clearly communicate the result.

Example concept:

> **Published successfully. This information is now live on the website.**

The exact visual treatment belongs to later UI design. The important UX requirement is that administrators must know whether the action succeeded and whether the content is now public.

---

## 34. Empty States

If there are currently no events:

> **No upcoming events**

should be shown where the Events area is intentionally being presented.

If there are no gallery images:
* Do not show an empty gallery experience unnecessarily.
* Hide the gallery content until approved images exist.

If a Principal/MD photo has not yet been uploaded:
* Show a generic professional placeholder.
* Never invent or generate a fake representation of the actual person.

For any empty CMS-managed content, never invent school facts merely to fill the interface.

This is consistent with the Phase 2 Empty Content Architecture and Image Fallback rules (Sections 17–18).

---

## 35. Loading UX

The website must not force users to wait through a decorative intro.

A very brief school-logo visual transition may be used if it does not delay access to the website.

For actual content loading, skeleton loading may be used where technically appropriate.

Important rule:

> **Loading UI must communicate actual loading, not become an unnecessary animation experience.**

Users should never be forced to watch an animation before accessing important information.

---

## 36. Animation UX

Use:

> **Small, smooth, purposeful animations.**

Animations should support:
* Feedback
* Transitions
* Orientation
* Visual polish

They should not:
* Delay information
* Hide content
* Distract from notifications
* Make navigation slower
* Turn the school website into a visual-effects showcase

---

## 37. Student UX Success Test

The most important real-world test is:

> **If I am a student, can I immediately recognize that this is the correct school website and quickly find the information/notification I came for?**

The website succeeds when the student can answer:

* Is this my school?
* Is there an important notification?
* Is there an exam notice?
* Is there admission information?
* Where is the examination centre information?
* Where can I find the relevant details?

without wasting time.

---

## 38. UX Friction Rules

**Avoid:**
* Unnecessary popups
* Forced intro screens
* Long loading animations
* Excessive dropdown depth
* Huge decorative carousels
* Unnecessary forms
* Repeated content
* Dead-end pages
* Hidden important information
* Excessive animation
* Navigation that requires understanding technical categories

**Prefer:**
* Clear actions
* Direct paths
* Contextual links
* Strong information hierarchy
* Consistent navigation
* Short readable content
* Mobile-friendly interactions
* Clear success/error feedback
* Useful empty states

---

## 39. Critical UX Principle

> **A beautiful interface that makes a student struggle to find an exam notice is a bad interface.**

And:

> **A simple interface that lets the student find the correct information immediately is successful UX.**

Visual quality must support usability rather than compete with it.

---

## 40. Phase 3 Boundaries

Do not introduce decisions about:

* Final colors
* Typography
* Exact visual layouts
* Detailed component styling
* Stitch prompts
* HTML/CSS/JS implementation
* Google Sheets schema
* Apps Script API design
* Authentication mechanism
* Security implementation
* Performance implementation details

Those belong to later phases.

---

## 41. Phase 3 Acceptance Criteria

Phase 3 is ready to lock when the document clearly defines:

* Student user flows
* Parent user flows
* Visitor user flows
* Admin user flows, covering every CMS-managed capability finalized in Phase 1:
  * Notification management
  * Achievement/topper management
  * School information management
  * Leadership management
  * Contact information management
  * Admission information management
  * Examination Centre management
  * Event management
  * Gallery/image/file management
* Homepage UX behavior
* Notification UX
* Admission UX
* Examination Centre UX
* Achievement UX
* Leadership UX
* Contact UX
* Events UX
* Cross-linking behavior
* Mobile-first UX rules
* Loading behavior
* Animation rules
* Empty states
* Admin feedback
* Delete confirmation
* Critical user tasks
* UX friction rules

Before locking, verify that no Phase 0, Phase 1, or Phase 2 requirement has been contradicted or silently changed.

---

## 42. Document Governance

**Current status: FINAL — PENDING HUMAN APPROVAL.**

This document follows the established project gate:

> **DISCUSSION → DECISIONS → DOCUMENTATION → REVIEW → FINAL APPROVAL → LOCK → NEXT PHASE**

Phase 3 is **not** marked as locked. It becomes LOCKED only after explicit human approval.

After Phase 3 is locked, the project may proceed to:

> **Phase 4 — Brand & Visual Direction**

Phase 4 work does not begin inside this document.

---

### Phase 3 Final Review Status

**READY FOR FINAL APPROVAL — NO OPEN ISSUES**