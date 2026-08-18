# Phase 6 — Frontend Implementation Architecture & Codebase Rules

**Project:** East Point Public Senior Secondary School — Information & Communication Website  
**Phase:** 6 — Frontend Implementation  
**Depends on:** Phase 0, Phase 1, Phase 2, Phase 3, Phase 4, Phase 5  
**Document Status:** Implementation Foundation — Ready for Review

> This document defines how the approved Stitch UI designs are to be translated into a maintainable frontend codebase.
>
> It does **not** redesign the product, information architecture, UX, brand, or visual system. It establishes implementation rules so that Antigravity or any other AI-assisted coding tool does not duplicate components, create an uncontrolled folder structure, invent frameworks, or turn the frontend into a difficult-to-maintain codebase.

---

# 1. Purpose

The purpose of Phase 6 is to establish a controlled implementation architecture before individual pages and the admin dashboard are implemented.

The central rule is:

> **Implement the design system and reusable architecture first. Implement pages second.**

The frontend must remain understandable to a human developer after AI-assisted implementation.

The project success definition from Phase 0 explicitly requires that the developer can maintain the system without fighting a giant AI-generated codebase.

Therefore:

```text
Approved Stitch UI
        ↓
Implementation analysis
        ↓
Shared design tokens
        ↓
Reusable components
        ↓
Shared layouts
        ↓
Page shells
        ↓
Pages
        ↓
CMS/data integration
```

Never:

```text
Stitch screen
        ↓
AI creates isolated page
        ↓
Copy/paste styles
        ↓
Another screen
        ↓
Another copy
        ↓
Duplicated components
        ↓
Unmaintainable codebase
```

---

# 2. Governing Project Rules

The implementation must preserve all locked requirements from Phase 0–5.

The following principles remain authoritative:

- Information first, decoration second.
- Modern school, not modern startup.
- Premium — Academic — Modern.
- Mobile-first.
- Accessibility is part of the product.
- Performance matters for real students using mobile devices.
- CMS-managed content must be changeable without changing application structure.
- Public users are read-only.
- Principal, MD, and Clerk have equal/full Version 1 CMS access.
- Version 1 uses HTML, CSS, and JavaScript on the frontend.
- Version 1 uses Google Apps Script, Google Sheets, and Google Drive for backend/data/file integration.
- No unnecessary framework may be introduced simply because an AI tool recommends one.
- AI is a development accelerator, not the product owner.
- AI-generated code must be inspected, questioned, tested, improved, and approved.

Phase 0 specifically requires:

```text
AI generates
    ↓
We inspect
    ↓
We question
    ↓
We test
    ↓
We improve
    ↓
We approve
```

---

# 3. Technology Boundary

## 3.1 Frontend

Version 1 frontend technology is:

- HTML
- CSS
- JavaScript

Do not introduce a frontend framework simply because Stitch, Antigravity, or another AI tool generates framework-based code.

Do not silently migrate the project to:

- React
- Vue
- Angular
- Svelte
- Next.js
- Nuxt
- Tailwind
- Bootstrap
- Material UI
- Another UI framework

unless an explicit architecture-change decision is made and approved.

The project does not need a framework merely because the generated design contains reusable UI.

Reusable architecture must be achieved using the approved Version 1 frontend stack.

---

# 4. Core Architecture Principle

The codebase must have a clear separation between:

## A. Design System

Defines visual rules.

Examples:

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Breakpoints
- Motion
- Component states

## B. Reusable Components

Defines repeatable interface structures.

Examples:

- Header
- Mobile navigation
- Button
- Section heading
- Notification item
- Achievement item
- Event item
- Form field
- Empty state
- Loading state
- Error state
- Success state
- Modal/dialog

## C. Layouts

Defines shared page-level structure.

Examples:

- Public layout
- Admin layout

## D. Pages

Defines page-specific composition.

Examples:

- Home
- School
- Leadership
- Admissions
- Notifications
- Examination Centre
- Achievements
- Events
- Gallery
- Contact
- Admin Dashboard
- Admin CRUD screens

The rule is:

> **Pages compose components. Pages do not redefine components.**

---

# 5. Folder Structure Rule

The final folder structure must be established before large-scale page implementation begins.

A suitable Version 1 structure is:

```text
/
├── index.html
│
├── pages/
│   ├── public/
│   │   ├── school.html
│   │   ├── leadership.html
│   │   ├── admissions.html
│   │   ├── notifications.html
│   │   ├── examination-centre.html
│   │   ├── achievements.html
│   │   ├── events.html
│   │   ├── gallery.html
│   │   └── contact.html
│   │
│   └── admin/
│       ├── login.html
│       ├── dashboard.html
│       ├── notifications.html
│       ├── events.html
│       ├── admissions.html
│       ├── examination-centre.html
│       ├── achievements.html
│       ├── gallery.html
│       ├── school-information.html
│       ├── leadership.html
│       └── contact.html
│
├── components/
│   ├── public/
│   ├── admin/
│   └── shared/
│
├── layouts/
│   ├── public/
│   └── admin/
│
├── styles/
│   ├── tokens.css
│   ├── base.css
│   ├── typography.css
│   ├── utilities.css
│   ├── components/
│   ├── layouts/
│   └── pages/
│
├── scripts/
│   ├── core/
│   ├── components/
│   ├── pages/
│   ├── admin/
│   └── services/
│
├── assets/
│   ├── logo/
│   ├── icons/
│   ├── images/
│   └── fonts/
│
└── docs/
```

This is an implementation architecture proposal for Phase 6 and must be reviewed before being treated as an immutable repository structure.

The important architectural requirement is not the exact spelling of every folder. The important requirement is:

> **There must be one predictable home for each kind of code.**

Do not allow an AI tool to create arbitrary folders such as:

```text
components2/
new-components/
final-components/
final-final/
homepage-components/
misc/
temp/
test2/
new-ui/
generated/
```

---

# 6. Folder Ownership Rules

Each folder has one responsibility.

## `pages/`

Contains page-specific HTML entry points and page composition.

Do not place globally reusable components here.

## `components/`

Contains reusable UI pieces.

A component belongs here only when it is genuinely reusable or intentionally part of the shared component system.

## `layouts/`

Contains shared structural shells.

Examples:

- Public header + navigation + notification control + footer
- Admin sidebar/header/content shell

## `styles/`

Contains CSS organized by responsibility.

Do not create one giant CSS file containing unrelated page and component styles.

## `scripts/`

Contains JavaScript organized by responsibility.

Do not place all JavaScript into one uncontrolled file.

## `services/`

Contains communication with external/data systems.

Examples may include:

- Public content retrieval
- Admin data operations
- Image/file operations

The service layer must not contain visual markup.

## `assets/`

Contains project assets.

Do not place random generated images, screenshots, temporary files, or unrelated assets here.

## `docs/`

Contains implementation documentation.

---

# 7. Component Reuse Rule

Before creating a component, AI must check whether an existing component already performs the required job.

Required process:

```text
Need UI element
    ↓
Search existing components
    ↓
Can existing component handle it?
    ├── YES → reuse/configure it
    └── NO → create a new component only if justified
```

Never create:

```text
NotificationCard
NotificationCard2
NotificationItem
NotificationBox
LatestNotificationCard
HomeNotificationCard
AdmissionNotificationCard
```

when these are actually the same visual/behavioral component.

Prefer one reusable component with controlled content/configuration.

---

# 8. Duplication Rule

The following must not be duplicated independently across pages:

- Header
- Footer
- Mobile navigation
- Information dropdown
- Notification access control
- Buttons
- Typography styles
- Section headings
- Notification presentation
- Achievement presentation
- Event presentation
- Contact actions
- Loading states
- Empty states
- Error states
- Success feedback
- Form controls
- Modal/dialog patterns

If two interfaces look and behave the same, they should normally share the same implementation.

If two interfaces intentionally differ, the difference must be justified by a real UX requirement rather than created accidentally by AI generation.

---

# 9. Public Layout Rule

All public pages must use the same public layout system.

The public layout includes the approved shared structure:

```text
Public Layout
├── Header
├── Navigation
├── Information dropdown
├── Persistent notification access
├── Page content
└── Footer
```

Do not recreate the header manually inside:

- School page
- Admissions page
- Notifications page
- Achievements page
- Events page
- Gallery page
- Contact page

The page should use the shared public layout.

---

# 10. Admin Layout Rule

All admin pages must use the same admin layout system.

Conceptually:

```text
Admin Layout
├── Admin Header
├── Admin Navigation / Sidebar
├── Page Content
└── Shared Feedback / State System
```

The admin navigation must preserve the approved Phase 5 structure:

```text
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

Do not create a separate sidebar for every admin page.

---

# 11. Design Token Rule

All global visual values must be centralized.

At minimum, establish tokens for:

- Typography families
- Typography weights
- Typography sizes
- Colors
- Spacing
- Border radius
- Shadows
- Breakpoints
- Motion timing
- Focus styles
- Common control dimensions where required

Do not scatter the same visual values throughout dozens of files.

Bad:

```css
color: #1C1C1C;
```

repeated arbitrarily across many files for unrelated purposes.

Better:

```css
color: var(--color-ink);
```

The exact implementation token names are an engineering choice, but the principle is mandatory.

---

# 12. Typography Implementation

The locked typography system is:

- Paytone One — display/headings
- Urbanist — body/UI

No intentional third design typeface may be introduced.

Typography must be centralized so that:

```text
Page Heading
Section Heading
Body
Label
Metadata
Button
Navigation
```

do not each invent their own typography rules.

If Stitch produces a heading with a new font, it must be converted back into the locked typography system.

---

# 13. Color Implementation

The approved visual palette consists of:

- Navy/blue
- Yellow/gold
- Near-black

The near-black source value is:

```text
#1C1C1C
```

The yellow/gold swatch has unresolved printed HEX metadata in the Phase 4 reference.

Therefore:

> **Do not guess the yellow/gold implementation HEX value.**

Until the value is explicitly confirmed, implementation must preserve the approved visual appearance without inventing a false source value.

Do not introduce unrelated colors merely because Stitch generated them.

Do not allow each page to define its own palette.

---

# 14. Component Styling Rule

A reusable component must own its own structural styling.

For example:

```text
Button
→ button structure + button states

Notification item
→ notification structure + notification states

Gallery item
→ gallery structure + gallery states
```

A page should control composition, not redefine the internal component styling repeatedly.

Avoid page-level CSS that overrides reusable components unnecessarily.

---

# 15. Page CSS Rule

Page-specific CSS is permitted only for page-specific composition.

Good:

```text
Homepage hero arrangement
Homepage section spacing
Page-specific grid composition
```

Bad:

```text
Homepage button style
Admissions button style
Events button style
Contact button style
```

if all buttons are actually the same shared component.

---

# 16. JavaScript Architecture Rule

JavaScript must be separated by responsibility.

Avoid one enormous script such as:

```text
main.js
```

containing:

- navigation
- notifications
- gallery
- admin CRUD
- API calls
- modals
- forms
- dashboard logic
- authentication logic

Instead separate:

```text
scripts/
├── core/
├── components/
├── pages/
├── admin/
└── services/
```

The exact file breakdown may evolve, but responsibilities must remain separated.

---

# 17. Service Layer Rule

Communication with Google Apps Script / backend services must be isolated from UI code.

Pages and components should not contain scattered raw backend requests throughout their markup logic.

Conceptually:

```text
UI
 ↓
Page logic
 ↓
Service
 ↓
Backend
```

not:

```text
Button
 ↓
raw API request
 ↓
HTML manipulation
 ↓
another raw API request
```

This makes backend integration replaceable and easier to test.

---

# 18. Data vs. Presentation Rule

CMS data and UI presentation must remain separate.

A notification record is data.

A notification component is presentation.

Do not mix the two unnecessarily.

Conceptually:

```text
Notification Data
        ↓
Notification Component
        ↓
Rendered UI
```

This is especially important because CMS-managed content is expected to change without changing application structure.

---

# 19. Dynamic Content Rule

The frontend must be designed around dynamic CMS-managed content.

CMS-managed areas include:

- Notifications
- Achievements
- Events
- Admissions
- Examination Centre
- School information
- Leadership
- Contact
- Gallery/images/files

Do not hard-code normal school content into reusable components.

Do not require HTML source edits whenever an administrator changes ordinary school information.

---

# 20. Content Accuracy Rule

AI must never invent school-specific facts.

Never generate or hard-code fictional:

- Student names
- Marks
- Percentages
- Principal name
- MD name
- Phone numbers
- WhatsApp numbers
- Email addresses
- Admission dates
- Admission rules
- Examination dates
- School history
- Achievements
- Facilities
- Official claims

Placeholder content must be clearly identifiable as placeholder content during development and must not be mistaken for official content.

---

# 21. Page Composition Rule

A page should look conceptually like:

```text
Page
├── Shared layout
├── Page heading
├── Page-specific sections
├── Reusable components
└── Shared states
```

A page must not become a second component library.

If a section becomes reusable across multiple pages, move it into the component system rather than copying it.

---

# 22. Homepage Implementation Rule

The homepage is a composition of reusable sections.

Its implementation must preserve the locked hierarchy:

```text
Header
Hero
Important Information / Quick Access
Latest Notifications
Admission Preview
Examination Centre
Achievements / Toppers Preview
Events Preview
School / Leadership Highlight
Gallery Preview
Contact / Location
Footer
```

The implementation must not allow a lower-priority section to accidentally dominate because Stitch generated a visually larger component.

Visual creativity is permitted inside the approved hierarchy.

Structural reordering is not.

---

# 23. Notification Component Rule

Notifications are a shared system.

The same underlying notification presentation should support:

- Homepage preview
- Notifications page
- Notification details
- Contextual notification presentation where appropriate

Do not create independent notification card designs for every location.

The four categories remain exactly:

- Admission
- SOS Examination
- School Announcements
- Events

"All" is a viewing/filter state, not a category.

---

# 24. Achievement Component Rule

Achievement presentation must support the flexible achievement system while preserving the required topper presentation.

Do not build a completely separate UI system for every achievement type unless the content requirements genuinely differ.

Class 10 and +2 toppers must support:

- Name
- Photograph
- Marks/percentage

The system must not become a general student-results system.

---

# 25. Event Component Rule

Events are a separate public feature.

The Event record is authoritative.

The same event may be surfaced in multiple contexts without creating duplicate independent records.

Do not create:

```text
HomepageEvent
EventsPageEvent
NotificationEvent
```

as three separate implementations when they represent the same reusable event presentation.

Use a shared event model/component with context-specific composition where necessary.

---

# 26. Gallery Component Rule

Gallery has exactly:

```text
School Building
School Office
Exam Hall
```

Maximum:

```text
15 total images
```

The frontend must not accidentally communicate a 15-image limit per section.

Gallery presentation should be reusable between:

- Gallery page
- Homepage preview

Do not create a second gallery implementation for the homepage.

---

# 27. Contact Component Rule

Contact actions should use reusable patterns for:

- Phone
- WhatsApp
- Email
- Map/location

Principal and MD contact information originates from the appropriate authoritative content source and may be surfaced in multiple relevant contexts.

Do not maintain contradictory copies of the same contact information in separate page-specific code.

---

# 28. Shared State System

Reusable UI states must be established once.

Required conceptual states include:

```text
Loading
Empty
Success
Error
Disabled
Focus
Active
```

Examples:

```text
Loading notifications
No notifications
Notification load error
Notification saved successfully
Notification save error
```

Do not invent a completely different loading or error pattern on every page.

---

# 29. Empty State Rule

Empty content must never trigger invented content.

Examples:

```text
No events currently available.
```

or an appropriately minimal neutral state.

If a content section should be hidden when empty according to the approved UX/IA rules, the implementation should support that behavior.

Navigation structure and content availability remain separate.

---

# 30. Image Rule

Use only:

- Official school logo
- School-approved photography
- Approved assets
- Neutral placeholders where appropriate

Do not use:

- Stock school photography
- Generic education photography
- Fake student photographs
- AI-generated real-person replacements
- Random internet images

Images must not be distorted.

Use responsive image handling and lazy loading where appropriate.

---

# 31. Responsive Architecture

Responsive behavior must be planned as part of component implementation.

Do not create:

```text
desktop component
mobile component
tablet component
```

as separate copies merely because the layout changes.

Prefer one semantic component with responsive CSS/layout behavior.

Create separate implementations only when there is a genuine structural interaction difference that cannot reasonably be handled within the shared component.

---

# 32. Mobile-First Rule

The default implementation mindset is:

```text
Mobile
   ↓
Tablet
   ↓
Desktop
```

Do not build desktop first and merely shrink it.

Critical experiences must remain especially usable on mobile:

- Notifications
- Admissions
- Examination Centre
- Achievements
- Contact
- Navigation

---

# 33. Mobile Navigation Rule

The mobile navigation is a shared public component.

It must provide:

```text
Home
School
Leadership
Achievements
Events
Gallery
Contact

Information
    Admissions
    Notifications
    Examination Centre
```

It must:

- Open as the approved full-screen mobile navigation layer.
- Provide an obvious close control.
- Preserve the desktop information architecture.
- Prevent inappropriate background interaction while open.
- Support keyboard accessibility where applicable.
- Use a subtle, fast transition.
- Avoid unnecessary nesting.

Do not build separate mobile navigation implementations on different pages.

---

# 34. Header Rule

The header is a single shared public component.

Desktop:

```text
Logo
Home
School
Leadership
Achievements
Events
Gallery
Contact
Information
```

Mobile:

```text
Logo
Menu
```

The persistent notification control is also a shared public element.

Do not manually rebuild the header for each page.

---

# 35. Information Dropdown Rule

The Information dropdown must contain exactly:

```text
Admissions
Notifications
Examination Centre
```

No mega-menu.

No extra categories.

No page-specific variations.

---

# 36. Notification Access Control Rule

The persistent notification control must remain a shared component.

Its visual meaning is:

```text
Bell
Notifications
Activity indicator
```

The activity indicator must not be implemented as an unread-notification tracking system unless that feature is explicitly approved later.

Do not invent notification counts.

---

# 37. Accessibility Rule

Accessibility must be implemented at component level wherever possible.

Shared components must provide:

- Semantic HTML
- Keyboard operation
- Focus states
- Accessible names
- Appropriate labels
- Correct button/link semantics
- Meaningful alt text where applicable
- Appropriate heading hierarchy
- Touch-friendly interaction

Do not fix accessibility separately on every page if the underlying component can be fixed once.

---

# 38. Performance Rule

The frontend must be designed for real student devices and imperfect connections.

Avoid:

- Unnecessary JavaScript
- Giant assets
- Unnecessary dependencies
- Heavy animation
- Large background images
- Unnecessary font variants
- Duplicate libraries
- Duplicate code

Use:

- Optimized images
- Responsive images
- Lazy loading where appropriate
- Efficient requests
- Clean CSS
- Sensible font loading

---

# 39. Dependency Rule

Do not add a dependency because it makes one small task easier.

Before adding a library, determine:

1. Is the capability actually required?
2. Can the approved HTML/CSS/JS stack handle it cleanly?
3. Does the dependency create long-term maintenance cost?
4. Is the dependency necessary across the product?
5. Has the architecture change been explicitly approved if required?

The default is:

> **No dependency unless there is a clear reason.**

---

# 40. AI Coding Tool Rules

Antigravity or another AI coding tool must not be allowed to make architectural decisions silently.

Before a major implementation change, the tool must respect:

- Existing folder structure
- Existing component system
- Existing design tokens
- Existing page architecture
- Existing naming conventions
- Existing service/data boundaries

The AI must not:

- Create a new architecture because it prefers one.
- Introduce a framework.
- Duplicate existing components.
- Rename major folders without approval.
- Move the project into a different build architecture.
- Replace the design system.
- Change navigation.
- Change information architecture.
- Add out-of-scope features.
- Invent school content.

---

# 41. "Search Before Create" Rule

This is a mandatory AI workflow.

Before creating a:

- Component
- Utility
- CSS token
- Service
- Layout
- State pattern
- Form pattern
- Modal
- Navigation pattern

the AI must first inspect the existing implementation.

Required logic:

```text
Does it already exist?
        ↓
YES → reuse
        ↓
NO
        ↓
Can an existing component be extended?
        ↓
YES → extend
        ↓
NO
        ↓
Create new component
```

Do not duplicate first and refactor later.

---

# 42. "Extend Before Duplicate" Rule

If an existing component is close to the required behavior, extend it through controlled configuration or a justified variant.

Example:

```text
NotificationItem
    ├── default
    └── important
```

is preferable to:

```text
NotificationItem
ImportantNotificationCard
HomepageImportantNotification
AdmissionNotificationCard
SOSNotificationCard
```

unless the UX genuinely requires structurally different components.

---

# 43. Variant Rule

Variants are allowed when the same component has a legitimate controlled difference.

A variant must not become an excuse for unrelated designs.

Good:

```text
Button
├── primary
├── secondary
└── text
```

Bad:

```text
Button
├── homepage-button
├── admission-button
├── event-button
├── school-button
├── admin-button
├── dashboard-button
...
```

if these are visually/functionally the same control.

---

# 44. Naming Rule

Names must describe responsibility.

Prefer:

```text
NotificationList
NotificationItem
AchievementCard
EventCard
SectionHeading
PageHeading
FormField
EmptyState
LoadingState
```

Avoid:

```text
Thing
Box
BlueCard
NewCard
Card2
FinalCard
MagicComponent
ComponentNew
```

Names must remain understandable without opening the file.

---

# 45. File Size Rule

Do not create giant files containing unrelated systems.

If a file starts handling multiple unrelated responsibilities, split it.

However, do not split every tiny line of code into a separate file merely to appear "architectural."

The goal is:

> **Clear responsibility, not maximum fragmentation.**

---

# 46. CSS Architecture Rule

CSS must have a clear hierarchy:

```text
Tokens
    ↓
Base
    ↓
Utilities
    ↓
Reusable Components
    ↓
Layouts
    ↓
Page-specific composition
```

Avoid uncontrolled specificity.

Avoid excessive `!important`.

Avoid inline styles unless there is a clear implementation reason.

Avoid repeating the same CSS declarations across many files.

---

# 47. JavaScript Architecture Rule

JavaScript should follow a responsibility hierarchy:

```text
Core utilities
        ↓
Shared component behavior
        ↓
Page behavior
        ↓
Admin behavior
        ↓
Service/data communication
```

Do not create circular dependencies between unrelated parts of the application.

Keep DOM manipulation close to the component/page that owns it.

Keep backend communication in the service/data layer.

---

# 48. HTML Architecture Rule

HTML must remain semantic.

Use appropriate elements:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `button`
- `a`
- `form`
- `label`

Do not use `div` for every semantic purpose.

Links must behave like links.

Buttons must behave like buttons.

---

# 49. Routing / Page Entry Rule

The exact routing implementation belongs to the frontend implementation phase.

However, public destinations must remain aligned with the approved information architecture.

Conceptual destinations include:

```text
/
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

The implementation must not introduce unnecessary routing complexity.

---

# 50. CMS Boundary Rule

The CMS changes content.

The frontend architecture controls structure.

Therefore:

```text
CMS
→ content
→ images
→ dates
→ messages
→ notifications
→ achievements
→ events
```

while:

```text
Frontend code
→ layout
→ components
→ navigation
→ design system
→ behavior
→ responsive structure
```

Administrators do not modify application architecture through the CMS.

---

# 51. Public/Admin Boundary

Public and admin interfaces share the same design identity but are not the same product surface.

Public UI:

> Information-first, comfortable, presentation-oriented.

Admin UI:

> Functional, faster, more information-dense, management-oriented.

Do not copy the public homepage design into the dashboard.

Do not make the dashboard look like a marketing page.

Do not create a separate unrelated visual identity for admin.

---

# 52. Admin Reuse Rule

Admin CRUD screens must use shared patterns.

Reuse:

- List layout
- Form layout
- Form fields
- Buttons
- Confirmation dialog
- Success feedback
- Error feedback
- Loading states
- Empty states
- Image upload/replace/delete patterns

Do not build a new form system for every CMS section.

---

# 53. Admin Dashboard Rule

The dashboard is not the first implementation target.

Before dashboard implementation:

1. Establish design tokens.
2. Establish shared components.
3. Establish admin layout.
4. Establish admin navigation.
5. Establish CRUD patterns.
6. Establish shared states.
7. Then compose the dashboard.

The dashboard should consume the reusable architecture rather than define it.

---

# 54. Admin CRUD Rule

The universal lifecycle remains:

```text
Create
 ↓
Save
 ↓
Immediately Public
 ↓
Manual Edit / Replace / Delete
```

The UI must not introduce:

- Draft
- Review
- Approval
- Separate publish workflow
- Archive
- Revision history
- Automatic expiry

Delete actions must use confirmation.

Save actions must provide clear success/error feedback.

---

# 55. Image Management Rule

Version 1 image management supports:

- Upload
- Replace
- Delete

Do not introduce:

- Cropping editor
- Photoshop-like editing
- Advanced media library
- Complex tagging
- Image search
- Automatic image organization

---

# 56. Gallery Capacity Rule

The gallery capacity is:

> **15 images total across School Building, School Office, and Exam Hall.**

The implementation must enforce or clearly support this requirement at the appropriate application boundary.

Do not interpret it as:

```text
15 × 3
```

Do not create a fourth gallery category.

---

# 57. No Feature Creep Rule

Do not add:

- Student login
- Parent portal
- Online classes
- Attendance
- Fee payment
- Student ERP
- Online examination
- Live chat
- Student messaging
- AI chatbot
- Online admission
- Admission enquiry
- RSVP
- Ticketing
- Event booking
- Site-wide search
- Notification history/archive
- Automatic content expiration
- Automatic academic-year rollover

unless a future explicit project decision changes scope.

---

# 58. Stitch-to-Code Translation Rule

Stitch output is a visual reference, not an instruction to reproduce its internal generated code architecture.

When implementing Stitch designs:

```text
Stitch visual result
        ↓
Identify repeated visual patterns
        ↓
Map patterns to existing design system
        ↓
Map repeated structures to existing components
        ↓
Create page composition
        ↓
Implement
        ↓
Review against Stitch design
```

Do not copy generated code blindly.

Do not preserve bad generated architecture merely because it came from Stitch.

The visual result is evaluated against the locked design specification. The implementation must be adapted to the project's architecture.

---

# 59. Stitch Screen Duplication Rule

If Stitch generates multiple screens containing visually similar structures, do not automatically create multiple code implementations.

Example:

If these screens all contain the same section-heading structure:

```text
Home
Achievements
Events
Gallery
Contact
```

there should normally be one reusable section-heading implementation.

If several screens contain the same card pattern, use the same underlying component or justified variant.

---

# 60. Design Fidelity vs. Code Quality

Implementation must satisfy both:

1. Visual fidelity to the approved Stitch design.
2. Maintainable code architecture.

Neither one automatically overrides the other.

If the Stitch-generated implementation is visually correct but architecturally duplicated:

> Rebuild the implementation cleanly while preserving the approved visual result.

If the code is clean but visually diverges materially from the approved design:

> Correct the implementation while preserving the architecture.

---

# 61. Do Not Refactor Blindly

AI must not perform large-scale refactoring without understanding the existing architecture.

Before refactoring:

1. Inspect affected files.
2. Identify dependencies.
3. Identify shared consumers.
4. Make the smallest safe change.
5. Test affected pages.
6. Verify responsive behavior.

Avoid "rewrite everything" solutions.

---

# 62. Incremental Implementation Rule

Implementation should proceed in controlled stages.

Recommended order:

```text
Phase 6A
Frontend foundation
        ↓
Design tokens
        ↓
Typography
        ↓
Global styles
        ↓
Shared public components
        ↓
Public layout
        ↓
Public pages
        ↓
Admin design system
        ↓
Admin layout
        ↓
Admin components
        ↓
Admin dashboard
        ↓
Admin CRUD screens
        ↓
Data integration
        ↓
Testing
        ↓
Optimization
```

Do not implement the entire application in one uncontrolled AI generation.

---

# 63. First Implementation Target

The first implementation target is **the public website foundation**, not the admin dashboard.

The admin architecture must still be established in the codebase from the beginning so that the project does not later require a structural rewrite. However, **public UI implementation has priority over admin UI implementation at this stage** because the admin screens have not yet been visually generated/approved as implemented screens.

The priority is therefore:

```text
PUBLIC FOUNDATION
        ↓
PUBLIC SHARED COMPONENTS
        ↓
PUBLIC NAVIGATION / HEADER
        ↓
PUBLIC PAGE SHELL
        ↓
PUBLIC PAGES
        ↓
ADMIN FOUNDATION / STRUCTURE
        ↓
ADMIN VISUAL IMPLEMENTATION
        ↓
ADMIN DASHBOARD
        ↓
ADMIN CRUD SCREENS
```

At minimum, the first public foundation pass must establish and validate:

- Font loading
- Design tokens
- Global CSS
- Typography system
- Responsive breakpoints
- Buttons
- Links
- Page headings
- Section headings
- Shared surfaces
- Public header
- Desktop navigation
- Information dropdown
- Persistent notification control
- Mobile header
- Full-screen mobile navigation
- Footer
- Shared loading/empty/error/success states

Only after these shared foundations are stable should the implementation move into full public page composition.

The admin folder/layout architecture should exist early, but **do not spend the primary implementation effort designing or polishing the admin dashboard before the public foundation and main public pages are structurally stable.**

---

# 63A. Public Navbar — Primary Implementation Priority

The public navbar/header is a **core shared component** and must be implemented before individual public pages.

The supplied navbar reference image is the current visual reference for this implementation decision.

The public desktop header should follow this overall structure:

```text
[ Official School Logo ]

[ Home | School | Leadership | Achievements | Events | Gallery | Contact | Information ▾ ]

[ 🔔 NOTIFICATIONS ]
```

The three major visual areas are:

1. **Official school logo**
2. **Primary navigation container**
3. **Persistent notification control**

The exact visual proportions, spacing, typography, radius, shadow, and colors must follow the approved Phase 4/5 design system and the supplied reference rather than being independently redesigned by Antigravity.

### Navbar structural rules

The primary navigation contains exactly:

```text
Home
School
Leadership
Achievements
Events
Gallery
Contact
Information ▾
```

`Information` is a grouped navigation destination containing exactly:

```text
Admissions
Notifications
Examination Centre
```

Do not add:

- Admissions as another permanent top-level navigation item
- Notifications as another permanent top-level navigation item
- Examination Centre as another permanent top-level navigation item
- Search
- Login
- Extra CTA
- Social icons
- Unapproved utility links

The separate **Notifications** control is not a duplicate top-level navigation item. It is a persistent access control defined by Phase 5.

### Logo rule

Use the supplied official school logo.

Do not:

- Redesign it
- Regenerate it
- Replace it
- Stretch it
- Distort it
- Arbitrarily recolor it
- Create a new wordmark beside it

### Navigation container rule

The main navigation should remain a single coherent reusable component.

Do not build separate copies such as:

```text
HomeNavbar
SchoolNavbar
AchievementsNavbar
EventsNavbar
```

There is one public navbar implementation.

### Notification control rule

The persistent notification control must remain a separate reusable component associated with the public header.

Its approved conceptual structure is:

```text
[ Bell ]  NOTIFICATIONS
```

with the approved small activity indicator.

Do not turn the indicator into unread-count tracking unless that feature is explicitly approved later.

### Sticky behavior

The public header must remain sticky.

Scrolling must not transform it into a different header.

Use only subtle separation while scrolling.

### Mobile behavior

On mobile, the public header becomes:

```text
[ Official School Logo ]              [ ☰ ]
```

The hamburger opens the approved full-screen navigation layer.

The mobile navigation must preserve the exact same information architecture as desktop.

### Implementation rule

The navbar must be implemented **once** and consumed by every public page through the shared public layout.

Changing the navbar later should require changing the shared navbar implementation, not editing ten individual page files.

---

# 63B. Public Page Implementation Priority

After the public navbar and shared foundation are stable, implement the public pages in an information-priority-aware order.

Recommended order:

```text
1. Home
2. Notifications
3. Admissions
4. Examination Centre
5. Achievements
6. Events
7. School
8. Leadership
9. Contact
10. Gallery
```

This is an implementation priority, not a change to the site's information architecture.

The reason for this order is practical:

- Home validates the shared public shell.
- Notifications, Admissions, and Examination Centre validate the highest-priority information flows.
- Achievements and Events validate major reusable content patterns.
- School, Leadership, Contact, and Gallery can then consume the already-established shared system.

Do not interpret this ordering as permission to redesign the locked navigation or content hierarchy.

---

# 63C. Admin Architecture Must Exist, But Admin UI Is Secondary Right Now

The project must establish the admin code structure early even though the public website is the current implementation priority.

The repository should therefore reserve clear locations for:

```text
pages/admin/
components/admin/
layouts/admin/
scripts/admin/
```

and the admin architecture must preserve:

```text
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

However:

> **Do not allow the unfinished admin visual design to contaminate or delay the public implementation.**

Until the admin UI has its own approved implementation-ready design, build only the architectural foundation necessary to support it later.

The admin dashboard must consume shared tokens, shared states, shared controls, and the approved admin layout rather than becoming the source of those systems.

The dashboard is therefore **planned and structurally reserved now, but visually implemented after the public foundation is stable.**

# 64. Dashboard Implementation Timing

The dashboard should be implemented after the admin foundation exists.

Required sequence:

```text
Admin tokens
 ↓
Admin layout
 ↓
Admin navigation
 ↓
CRUD components
 ↓
Form components
 ↓
Feedback states
 ↓
Gallery management pattern
 ↓
Dashboard
 ↓
Individual management screens
```

This prevents the dashboard from becoming a one-off visual system.

---

# 65. Testing Gate

Every implementation stage must be checked against:

### Visual

- Does it match the approved design?
- Is typography correct?
- Are colors correct?
- Are spacing and hierarchy consistent?

### UX

- Can the intended user accomplish the task?
- Is navigation obvious?
- Are important features easy to find?

### Responsive

- Mobile
- Tablet
- Laptop
- Desktop
- Large screens

### Accessibility

- Keyboard
- Focus
- Semantic structure
- Labels
- Contrast
- Touch targets

### Performance

- Image weight
- JavaScript weight
- Unnecessary dependencies
- Unnecessary animations

### Architecture

- Is code duplicated?
- Is a reusable component being bypassed?
- Are responsibilities separated?
- Is a new folder actually necessary?

---

# 66. AI Self-Check Before Finishing Any Task

Before an AI coding tool considers a task complete, it must check:

```text
[ ] Did I inspect existing components first?
[ ] Did I reuse existing components where possible?
[ ] Did I introduce any duplicate UI?
[ ] Did I create unnecessary files?
[ ] Did I create unnecessary folders?
[ ] Did I introduce a framework/dependency?
[ ] Did I alter the locked IA?
[ ] Did I alter the locked UX?
[ ] Did I invent school content?
[ ] Did I introduce an out-of-scope feature?
[ ] Did I preserve mobile behavior?
[ ] Did I preserve accessibility?
[ ] Did I preserve the design tokens?
[ ] Did I test affected pages?
```

If any answer is problematic, fix it before declaring the task complete.

---

# 67. Definition of "Done"

A page is not complete merely because:

> "It looks like the Stitch screenshot."

A page is complete only when:

- Visual design is acceptably faithful.
- Reusable components are used correctly.
- No unnecessary duplication exists.
- Responsive behavior works.
- Accessibility requirements are respected.
- Loading/empty/error states are handled where relevant.
- Dynamic CMS content can fit the design.
- No school facts were invented.
- No out-of-scope feature was added.
- The page does not create architectural debt.

---

# 68. Architecture Change Rule

Any major architectural change requires explicit discussion and approval.

Examples:

- Introducing a framework
- Replacing the frontend architecture
- Changing the backend integration model
- Changing data architecture
- Changing major folder architecture
- Introducing a major dependency
- Replacing the design system
- Changing the public/admin architectural boundary

AI tools must not make these decisions unilaterally.

This follows the Phase 0 change-control rule.

---

# 69. Golden Rule for Antigravity

The following rule should be treated as mandatory:

> **Never create something twice when one reusable implementation can serve both cases.**

And:

> **Never create a new architectural pattern when an existing approved pattern already solves the problem.**

And:

> **Never let a generated screen dictate the architecture of the whole application.**

The application architecture controls the implementation of screens.

Not the other way around.

---

# 70. Final Phase 6 Principle

The goal is not to produce the maximum amount of code.

The goal is to produce the smallest clear, reusable, maintainable frontend architecture that can faithfully implement the approved website.

The final codebase should make this possible:

```text
Need to change the header?
        ↓
One shared header.

Need to change button styling?
        ↓
One shared button system.

Need to change notification presentation?
        ↓
One notification component/system.

Need to change typography?
        ↓
Design tokens / typography system.

Need to change a school notification?
        ↓
CMS content — no page rewrite.

Need to add another legitimate page?
        ↓
Compose existing layouts/components.

Need to modify one CMS-managed section?
        ↓
Change content, not architecture.
```

The intended outcome is:

> **AI-assisted implementation without AI-generated chaos.**

---

# 71. Phase 6 Implementation Gate

Before proceeding into large-scale frontend implementation, the following must be reviewed and approved:

- Folder structure
- Component architecture
- Design token architecture
- CSS organization
- JavaScript organization
- Public layout architecture
- Admin layout architecture
- Service/data boundary
- Naming conventions
- AI coding rules
- Duplication rules
- Responsive implementation rules
- Accessibility rules
- Testing gate
- Architecture-change rule

After approval:

```text
PHASE 6 FOUNDATION APPROVED
        ↓
IMPLEMENT DESIGN TOKENS / TYPOGRAPHY
        ↓
IMPLEMENT SHARED PUBLIC COMPONENTS
        ↓
IMPLEMENT PUBLIC NAVBAR / HEADER
        ↓
IMPLEMENT PUBLIC LAYOUT
        ↓
IMPLEMENT PUBLIC PAGES
        ↓
ESTABLISH ADMIN CODE STRUCTURE
        ↓
IMPLEMENT ADMIN FOUNDATION
        ↓
IMPLEMENT ADMIN DASHBOARD
        ↓
IMPLEMENT ADMIN CRUD
        ↓
INTEGRATE DATA
        ↓
TEST
        ↓
OPTIMIZE
```

---

# 72. Final Rule

> **Do not ask AI to build a page. Ask AI to implement a page using the existing architecture.**

That distinction is fundamental.

The project already has its:

- Product requirements
- Information architecture
- UX flows
- Brand system
- UI/UX design

Phase 6 exists to make sure those decisions become a maintainable frontend rather than a collection of disconnected AI-generated screens.

**Status: READY FOR HUMAN REVIEW AND APPROVAL.**

**Implementation priority update:** Public website foundation and the shared navbar/header are the immediate implementation priority. Admin architecture is reserved now, while detailed admin UI implementation follows after the public foundation is stable.
