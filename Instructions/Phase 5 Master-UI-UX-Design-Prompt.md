# MASTER UI/UX DESIGN PROMPT

## East Point Public Senior Secondary School

**Project:** East Point Public Senior Secondary School — Information & Communication Website
**Phase:** 5 — Page & Component Design (Master UI/UX Design Prompt)
**Depends on:** Phase 0, Phase 1, Phase 2, Phase 3, Phase 4 (all **Locked**)
**Document Status:** LOCKED — SOURCE OF TRUTH

> Phase 0–4 are locked. This document does not reopen, redesign, or contradict any locked product, information architecture, UX, brand, content, or scope decision. It translates those locked decisions into a design brief for Stitch/visual design work.

Design a complete, production-quality responsive website UI/UX for:

**East Point Public Senior Secondary School**

This is an **official school information and communication website**, not a generic school template, SaaS landing page, or marketing-only website.

The website must feel like a real, established, modern academic institution.

---

# 1. PRIMARY DESIGN OBJECTIVE

Create a website that is:

* Premium
* Academic
* Modern
* Professional
* Trustworthy
* Organized
* Student-friendly
* Easy to navigate
* Mobile-first
* Information-focused

Core principle:

> **Information first, decoration second.**

The website should look visually rich and polished without becoming complicated, crowded, childish, overly corporate, or visually chaotic.

Design philosophy:

> **Modern school, not modern startup.**

Another guiding principle:

> **Make it look expensive without making it complicated.**

Do NOT create a generic "AI-designed school website."

The result should feel intentionally designed for this specific school and its actual users.

---

# 2. TARGET USERS

Primary users:

### Students — highest priority

Students mainly visit to:

* Check important notifications
* Check admission information
* Check SOS examination information
* Understand the school's examination-centre facility
* Find Class 10 and +2 topper information
* See school announcements
* See events
* Find official contact information

The student experience must be extremely fast and obvious.

A student should not need to understand the website's architecture to find an exam notice.

---

### Parents — high priority

Parents visit to:

* Understand the school
* Learn about academics
* Understand facilities
* Learn about leadership
* See achievements
* Understand admission information
* Understand examination-centre facilities
* Find school/contact information

The website should build trust and institutional credibility.

---

### Visitors — medium priority

Visitors should be able to understand:

* What school this is
* What the school offers
* Who leads it
* Academic achievements
* Facilities
* Examination-centre facility
* Admissions
* Contact information

---

# 3. ADMINISTRATIVE USERS

The website will later include a secure CMS/control panel for:

* Principal
* MD
* Clerk

All three administrators have equal/full access to all Version 1 CMS functions.

The public website must therefore be designed with a content-management mindset.

Content will eventually be managed through:

* Google Apps Script
* Google Sheets
* Google Drive

The frontend itself will use:

* HTML
* CSS
* JavaScript

Do NOT design unnecessary framework-specific UI.

Do NOT add functionality outside the defined Version 1 scope.

---

# 4. WEBSITE INFORMATION ARCHITECTURE

The major public destinations are:

```text
HOME

SCHOOL

LEADERSHIP

ACHIEVEMENTS

EVENTS

GALLERY

CONTACT

INFORMATION
    ├── Admissions
    ├── Notifications
    └── Examination Centre
```

The actual visible desktop navigation should be:

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

Do NOT add Admissions, Notifications, or Examination Centre as separate permanent main-navigation items.

They belong inside the Information dropdown.

---

# 5. HEADER — EXACT REQUIREMENTS

Design a premium, clean, institutional header.

### Desktop

Use:

```text
[ SCHOOL LOGO ]

Home
School
Leadership
Achievements
Events
Gallery
Contact
Information ▾
```

The school logo is the official provided logo.

Use the actual supplied school logo.

Do NOT redesign it.

Do NOT regenerate it.

Do NOT replace it.

Do NOT stretch, distort, recolor, or modify its proportions.

The header should use the logo **only**, not a large written school-name wordmark beside it.

---

# 6. INFORMATION DROPDOWN

Clicking:

**Information ▾**

opens a clean dropdown containing exactly:

```text
Admissions
Notifications
Examination Centre
```

Do NOT make this a giant mega-menu.

Do NOT add unnecessary descriptions, graphics, statistics, or decorative cards.

The dropdown should be:

* Clear
* Fast
* Premium
* Easy to scan
* Mobile-friendly
* Accessible
* Visually consistent with the rest of the site

The user should understand immediately that these are three major information destinations.

---

# 7. NOTIFICATION ACCESS

Notifications are one of the highest-priority functions of the entire website.

Do NOT place the notification control as another normal navigation item.

Instead, create a separate persistent notification control positioned toward the **upper-right area, slightly below the main header**.

It should visually communicate:

```text
🔔 Notifications •
```

Use:

* Bell icon
* "Notifications" text
* Small green activity indicator/dot

The notification control should be available across the public website.

IMPORTANT:

The green dot is an activity/availability indicator.

Do NOT assume or visually imply an unread-notification tracking system because Version 1 does not define unread tracking.

Do NOT create a complex notification counter unless explicitly required later.

---

# 8. STICKY HEADER

The header must be sticky.

When the user scrolls:

* Header remains available
* Header remains the same overall size
* Do NOT shrink it
* Do NOT transform it into a different header
* Do NOT hide it
* Do NOT introduce a large scroll animation

Use subtle visual separation while scrolling:

* Very subtle shadow
* Slight border/separation
* Clean surface

The header should remain visually premium but not dominate the screen.

---

# 9. MOBILE HEADER

Mobile header must contain:

```text
[ SCHOOL LOGO ]                       [ ☰ ]
```

Use:

* School logo
* Hamburger menu

Keep it clean and spacious.

Do not overcrowd the mobile header with multiple buttons.

Tapping the hamburger opens a full-screen mobile navigation menu (see Section 38 for the exact behavior). The mobile menu must preserve the complete information architecture.

---

# 10. COLOR DIRECTION

Use the approved visual color reference supplied with the project.

The approved visual palette consists of:

* Navy/blue
* Yellow/gold
* Near-black

The near-black reference is:

`#1C1C1C`

The navy/blue visual swatch is the approved visual reference.

IMPORTANT:

The yellow/gold swatch in the supplied reference image has inconsistent printed HEX metadata.

Therefore:

**Do NOT invent, guess, or silently assign a HEX value for the yellow/gold swatch.**

Use the actual visual reference for the yellow/gold appearance.

The visual appearance is approved; the implementation HEX value remains unresolved.

Do not introduce unrelated colors.

Do not introduce:

* Neon colors
* Random gradients
* Bright rainbow palettes
* Excessive accent colors
* Dark theme

Gradients are allowed only when restrained and based on the approved palette.

Do not make gradients the dominant visual identity.

---

# 11. TYPOGRAPHY

Use exactly this typography pairing:

### Primary display/headings

**Paytone One**

Use for:

* Major page headings
* Hero typography
* Important display text
* Strong academic statements

### Supporting typography

**Urbanist**

Use for:

* Body text
* Navigation
* Buttons
* Labels
* Metadata
* Cards
* Descriptions
* Forms
* Supporting UI

Urbanist may use appropriate weights from:

* Light
* Regular
* Medium
* Semibold
* Bold
* Black

Do NOT introduce another intentional design typeface.

Technical browser/system fallbacks are acceptable only as fallback behavior.

---

# 12. VISUAL STYLE

Overall visual direction:

> **Clean + Premium + Modern**

Final identity:

> **Premium — Academic — Modern**

The interface should feel:

* Refined
* Structured
* Calm
* Confident
* Institutional
* Contemporary

Avoid visual noise.

Do not make every section look like a floating card.

Use whitespace strategically, but do not create excessive empty space.

The website should feel rich through:

* Typography
* Composition
* Hierarchy
* Photography
* Controlled accent colors
* Subtle surfaces
* Good spacing
* Strong alignment

Not through unnecessary effects.

---

# 13. SHAPES AND CARDS

Use moderately/slightly rounded surfaces.

Cards should be used only when they improve grouping or comprehension.

Avoid:

* Excessive cards
* Excessive pill shapes
* Giant rounded containers
* Repeating the same card pattern everywhere

The site should not look like a dashboard.

---

# 14. SHADOWS

Use subtle shadows.

Shadows should create:

* Separation
* Hierarchy
* Depth

Avoid:

* Heavy shadows
* Glowing cards
* Neumorphism
* Excessive floating effects

---

# 15. ICONOGRAPHY

Use clean SVG-style icons.

Iconography must be:

* Minimal
* Consistent
* Professional
* Lightweight
* Academic/institutional
* Functional

Icons should communicate meaning.

Do not fill the website with decorative icons just to make sections look "AI-designed."

---

# 16. PHOTOGRAPHY

Photography should NOT dominate the visual identity.

Preferred direction:

> **Mostly design/graphics**

Use authentic school-approved photography where available.

Allowed examples:

* Principal photo
* MD photo
* Toppers' photos
* School building
* School office
* Exam hall
* School gallery

Do NOT use:

* Stock school photography
* Generic student stock photos
* Random classroom stock images
* Generic education stock photos
* Fake school photography

If an approved photo is unavailable, use a tasteful neutral placeholder.

Never fabricate a real person's photograph.

---

# 17. HERO SECTION

The hero should be:

* Typography-led
* Clean
* Minimal
* Premium
* Academic
* Strongly structured

Do NOT use:

* Large photographic background
* Video background
* Hero carousel
* SaaS-style startup hero
* Excessive floating graphics
* Too many CTAs

The hero should establish:

1. Official school identity
2. School name
3. Academic/professional atmosphere
4. Clear understanding that this is the official school website

Do not put the Class 10/+2 topper section inside the initial hero.

The hero should not be overloaded.

The exact copy can use carefully structured placeholder content where actual school copy is not yet supplied, but clearly mark such content as placeholder.

Do NOT invent school history, achievements, marks, dates, contact information, authorization claims, or other official facts.

---

# 18. HOMEPAGE UX PRIORITY

The homepage is a gateway.

It is NOT a complete copy of the website.

Homepage priority:

### Tier 1

* Important/current notifications
* Admissions
* SOS examination information
* Examination Centre information

### Tier 2

* Achievements
* Events
* Principal/MD introduction
* School information
* Contact access

### Tier 3

* Gallery
* Facilities
* Activities
* Supporting school information

Use this priority as a **hard information-hierarchy constraint.**

Stitch may creatively determine the visual composition **inside** each section — imagery treatment, spacing, card arrangement, and so on. Stitch must **not** reorder sections in a way that makes lower-priority content visually dominate higher-priority information.

Do not put Class 10/+2 toppers inside the hero. Achievements may appear as a homepage preview/highlight after the critical (Tier 1) information areas.

The homepage may show previews/highlights of detailed sections.

Do NOT put the entire content of every page onto the homepage.

---

# 19. HOMEPAGE PROPOSED STRUCTURE

Design the homepage using a deliberate hierarchy such as:

```text
HEADER

HERO

IMPORTANT INFORMATION / QUICK ACCESS

LATEST NOTIFICATIONS

ADMISSION INFORMATION PREVIEW

EXAMINATION CENTRE FEATURE

ACHIEVEMENTS / TOPPERS PREVIEW

EVENTS PREVIEW

SCHOOL / LEADERSHIP HIGHLIGHT

GALLERY PREVIEW

CONTACT / LOCATION

FOOTER
```

This is a structural direction, not an excuse to create excessive sections.

Each section must earn its space.

---

# 20. NOTIFICATIONS SECTION

Notifications are a major homepage feature.

Create a clean, highly scannable notification presentation.

Exactly four categories exist:

1. Admission
2. SOS Examination
3. School Announcements
4. Events

There is no "Other" category.

Admission and SOS Examination are the two primary notification categories.

Notification records support:

* Title
* Category
* Description
* Start Date
* End Date
* Time where required
* Important/Priority indicator

Do not create multiple priority levels.

Important/Priority is a simple indicator.

Do not use:

* Flashing
* Bouncing
* Aggressive red
* Alarm-style visual effects

Important notifications should be visually distinguishable but still professional.

---

# 21. NOTIFICATIONS PAGE — UX

Phase 2 defines the Notifications structure as:

```text
Notifications
├── All
├── Admission
├── SOS Examination
├── School Announcements
└── Events
```

This structure is preserved exactly.

The public Notifications page must provide a clear way to view:

* All notifications
* Admission
* SOS Examination
* School Announcements
* Events

The four notification categories remain exactly:

1. Admission
2. SOS Examination
3. School Announcements
4. Events

**"All" is a viewing/filter state, not a fifth notification category.** Do not create an "Other" category or any additional notification category.

**Preferred UI:**

* A clear category filter/tab/chip/navigation control at the top of the Notifications page.
* "All" is the default selected state.
* Users can switch between the four categories without leaving the Notifications experience.
* The selected category must be visually obvious.
* The UI must remain usable on mobile.
* On small screens, the category controls may become horizontally scrollable or another clean responsive pattern, but must remain easy to use.
* Important/Priority remains a simple visual indicator.
* Do not introduce Low/Medium/High/Critical/Urgent priority levels.

Notification cards/list items should support the already-defined notification information (Title, Category, Description, Start Date, End Date, Time where required, Important/Priority indicator).

When a user selects a notification:

```text
All
    ↓
Notification
    ↓
Notification Details
```

The notification details view may provide contextual navigation to an existing public destination where appropriate. Do not introduce a "Related Information" CMS field.

---

# 22. NOTIFICATION USER FLOW

Design the UI so this flow is obvious:

```text
Homepage
    ↓
Notification
    ↓
View Details
    ↓
Relevant information
```

Notifications may contextually link to:

* Admissions
* Examination Centre
* Relevant public pages

Do not create a separate "Related Information" CMS field.

Do not duplicate the same information unnecessarily.

---

# 23. ADMISSIONS

Admissions are informational only.

The website must allow users to find:

* Current admission information
* Relevant dates
* Eligibility
* Required documents
* Instructions
* School contact information

Do NOT design:

* Online application
* Online admission form
* Parent application portal
* Student application portal
* Online enquiry system

Use clear information hierarchy.

Admission information should feel official and easy to scan.

---

# 24. EXAMINATION CENTRE — MAJOR FEATURE

The school is an **HPBOSE-authorized examination centre**.

This is a major unique school feature.

The website must communicate it prominently and accurately.

The website must communicate that applicable:

* Class 10 examinations
* +2 examinations
* SOS examinations

can be conducted at the school itself according to applicable HPBOSE authorization and examination rules.

Do NOT exaggerate this into:

* "All exams always happen here"
* "Every Class 10 exam happens here"
* "Every +2 exam happens here"
* "Every SOS exam happens here"

The design should communicate the practical student benefit:

> Students may be able to take applicable examinations at the school's authorized centre instead of needing to travel elsewhere, according to the applicable examination rules.

The Examination Centre should feel important, credible, and academically institutional.

Do NOT use an artificial badge in the main navigation.

The user reaches it through:

```text
Information
    ↓
Examination Centre
```

Important examination information can also be reached through Notifications.

---

# 25. EXAMINATION CENTRE PAGE

Create a clear information hierarchy:

```text
Examination Centre introduction
        ↓
SOS Examination information
        ↓
Class 10
        ↓
+2
        ↓
Current examination notices/instructions
```

SOS receives structural priority.

Use clear content grouping.

Avoid unnecessary decorative graphics.

The feature should communicate trust and convenience without becoming exaggerated advertising.

---

# 26. ACHIEVEMENTS

Achievements are an important visual highlight.

Create a prestigious but restrained academic presentation.

Achievement categories:

```text
Achievements
├── Toppers
│   ├── Class 10
│   └── +2
├── Academic Achievements
├── Sports Achievements
└── Other Achievements
```

Class 10 topper records require:

* Student name
* Photograph
* Marks/percentage
* Rank
* Subject-wise score breakdown

+2 topper records require:

* Student name
* Photograph
* Marks/percentage
* Stream

For generic achievements, document:
* Achievement category/type
* Achievement presentation/icon mapping as frontend presentation logic (Do NOT specify raw SVG names, CSS classes, or icon implementation details as CMS fields. Use AwardCategory as the CMS-level concept).

Do NOT create:

* General student result database
* Student result login
* Complete result portal
* Individual result lookup

---

# 27. TOPPER VISUAL STYLE

The topper section should feel:

> Prestigious / academic / refined

Use:

* Strong typography
* Real student photography
* Marks/percentage
* Clear academic hierarchy
* Controlled accent color
* Refined composition

Do NOT use:

* Trophy graphics everywhere
* Confetti
* Cartoon effects
* Excessive gold
* Award-show aesthetics

Achievement design should feel like a serious academic institution recognizing excellence.

---

# 28. EVENTS

Events are a separate public feature.

Create:

```text
Events
    ↓
Event
    ↓
Poster/banner
    ↓
Event details/message
```

Events may also be announced through the Events notification category.

Do not create duplicate independent event records.

Do not introduce:

* RSVP
* Ticketing
* Registration
* Event booking

Events remain manually controlled.

---

# 29. SCHOOL PAGE

The School area should contain:

* About
* History
* Mission & Vision
* Academics
* Facilities
* Activities

Use a clear section-based layout.

Do not create unnecessary pages for every small piece of information.

Keep navigation depth reasonable.

---

# 30. LEADERSHIP

Leadership contains:

### Principal

* Photo
* Name
* Designation
* Contact
* Message/Profile

### MD

* Photo
* Name
* Designation
* Contact
* Message/Profile

Use authentic approved photography.

The leadership design should communicate:

* Authority
* Trust
* Human connection
* Institutional credibility

Do not make leadership profiles look like social-media profiles.

---

# 31. CONTACT

Contact must make information immediately actionable.

School:

* Address
* Location/map

Principal:

* Phone
* WhatsApp
* Email

MD:

* Phone
* WhatsApp
* Email

Use recognizable actionable UI patterns for:

* Call
* WhatsApp
* Email
* Map

Do NOT create a contact form.

Do NOT include Principal/MD personal physical addresses.

---

# 32. GALLERY

Gallery contains exactly three named sections:

```text
School Building
School Office
Exam Hall
```

Maximum:

> **15 images total across all three sections.**

Not 15 per section.

The design should be elegant and image-focused without becoming a complex media-management system.

Do not add:

* Tags
* Filters
* Search
* Albums
* Complex media library
* Advanced editing

---

# 33. FOOTER

Footer should provide quick access to important destinations:

* Admissions
* Notifications
* Examination Centre
* Achievements
* Events
* Contact

It may also include:

* School identity
* Address/location
* Essential contact information

Do not reproduce the entire navigation unnecessarily.

---

# 34. PAGE SYSTEM

Create consistent page designs for:

1. Home
2. School
3. Leadership
4. Admissions
5. Notifications
6. Examination Centre
7. Achievements
8. Events
9. Gallery
10. Contact

Every page should feel like part of the same design system.

Do NOT design each page as a completely different visual style.

---

# 35. REUSABLE COMPONENT SYSTEM

Create a coherent reusable component language for:

* Header
* Mobile navigation
* Information dropdown
* Notification access control
* Hero
* Page heading
* Section heading
* Buttons
* Text links
* Notification card
* Achievement/topper card
* Event card
* Leadership profile
* Admission information block
* Examination Centre feature block
* Gallery item
* Contact action
* Map/location block
* Footer
* Empty state
* Loading state
* Success state
* Error state

Components must share:

* Typography
* Radius language
* Spacing logic
* Shadows
* Icons
* Interaction behavior
* Responsive principles

Avoid visual inconsistency.

---

# 36. BUTTON SYSTEM

Create a restrained button hierarchy.

Avoid creating ten button styles.

Use a small number of meaningful variants such as:

* Primary
* Secondary
* Text/link

Buttons should feel premium and academic.

Do not use giant SaaS-style CTA buttons everywhere.

---

# 37. RESPONSIVE DESIGN

Design mobile-first.

The website must work on:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop

Do not simply shrink desktop designs.

Recompose layouts where necessary.

Critical mobile experiences:

* Notifications
* Admissions
* Examination Centre
* Achievements
* Contact
* Navigation

Typography must remain readable.

Buttons must remain touch-friendly.

Cards must not become cramped.

---

# 38. MOBILE NAVIGATION

Mobile header:

```text
[ LOGO ]       [ ☰ ]
```

**Mobile navigation behavior: FULL-SCREEN MOBILE NAVIGATION MENU.** This is now the finalized Phase 5 component decision.

When the hamburger is activated:

* Open a clean full-screen navigation layer.
* Keep the school logo/identity visible in an appropriate location.
* Provide an obvious close control.
* Show all primary navigation destinations clearly.
* Show Information as a grouped expandable section.
* Do not create unnecessary additional nesting.
* Do not hide critical information behind multiple nested levels.
* Use comfortable touch targets.
* Support keyboard accessibility where applicable.
* Prevent background interaction while the menu is open where appropriate.
* Use a subtle, fast transition.
* Do not use dramatic animation.
* Preserve the exact same information architecture as desktop.

The menu should provide access to:

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

Do not add new navigation destinations.

The mobile menu should feel spacious, premium, and extremely easy to scan.

Do not overcrowd it.

Do not hide important information behind multiple levels of nested menus.

---

# 39. SPACING

Use a coherent spacing system.

Do not:

* Compress every section
* Create excessive empty space
* Randomly vary spacing between similar components

Sections should have enough breathing room to feel premium.

But remember:

> Premium does not mean empty.

Information density should remain medium and comfortable.

---

# 40. ANIMATION

Animation level:

> **Subtle professional**

Allowed:

* Fade
* Slight movement
* Hover feedback
* Button transitions
* Section reveal
* Small interaction feedback

Scroll animations may be used when they genuinely improve visual polish.

Do NOT use:

* Huge animations
* Long intros
* Constant movement
* Excessive parallax
* Flashing
* Distracting effects
* Animation that delays important information

If using a logo/page-load animation, it must be extremely short and must not delay access.

---

# 41. ACCESSIBILITY

Design with accessibility from the beginning.

Include:

* Semantic hierarchy
* Clear heading levels
* Good contrast
* Keyboard-friendly navigation
* Visible focus states
* Accessible buttons
* Accessible forms
* Meaningful labels
* Appropriate alt text
* Touch-friendly controls
* Readable font sizes

Do not rely only on color to communicate meaning.

---

# 42. PERFORMANCE-AWARE DESIGN

Design for real students using mobile phones and potentially imperfect connections.

Avoid:

* Huge background images
* Unnecessary video
* Excessive JavaScript-driven effects
* Heavy animation
* Giant image assets
* Excessive fonts
* Unnecessary visual libraries

Use image-conscious layouts.

The visual design should remain fast to load.

---

# 43. EMPTY STATES

If content does not exist, do not invent school information.

Examples:

No events:

> No events currently available.

No gallery content:

Hide the unnecessary gallery content area or show an appropriate neutral empty state.

Missing Principal/MD photo:

Use a neutral professional placeholder.

Never generate fake school facts or fake real-person photography.

---

# 44. CONTENT ACCURACY

This is an official school website.

NEVER invent:

* Student names
* Marks
* Percentages
* Principal name
* MD name
* Phone numbers
* WhatsApp numbers
* Emails
* Admission dates
* Admission rules
* Exam dates
* School history
* Achievements
* Facilities
* Official claims

Where actual content has not been supplied, clearly use neutral placeholder copy and label it as placeholder content.

Do not present placeholder information as official.

---

# 45. CONTENT LIFECYCLE

The future CMS follows:

```text
Create
 ↓
Save
 ↓
Immediately Public
 ↓
Manual Edit / Replace / Delete
```

Do not design UI around:

* Draft workflow
* Approval workflow
* Automatic expiry
* Automatic archive
* Automatic year rollover
* Revision history

Version 1 does not include those systems.

---

# 46. PUBLIC UI VS. BACKEND

Google Apps Script, Google Sheets, and Google Drive are **future implementation context only.**

Stitch must NOT:

* Design database schemas
* Invent APIs
* Invent authentication mechanisms
* Invent security architecture
* Invent backend workflows
* Introduce framework-specific implementation assumptions

The UI should simply assume that CMS-managed information can be dynamically populated.

The public design must therefore support dynamic states such as:

* Content exists
* No content
* Loading
* Error
* Updated content

but must not design backend architecture.

---

# 47. ADMIN UI AWARENESS

The public website is eventually connected to a CMS.

Admin users:

* Principal
* MD
* Clerk

All have equal/full access.

The CMS will manage:

* Notifications
* Achievements
* Events
* Admissions
* Examination Centre
* School information
* Leadership
* Contact information
* Gallery/images

Do not design public components that require developers to manually edit HTML whenever normal school information changes.

The design should support dynamic content.

**Admin UI boundary:**

* The public UI must be designed so CMS-managed content can change without changing the visual structure or frontend source code.
* Do not design technical authentication/security implementation.
* Do not invent role-based permissions — Principal, MD, and Clerk have equal/full Version 1 access, with no permission tiers.

The full admin UI design scope is defined in Section 48.

---

# 48. ADMIN UI / CONTROL PANEL DESIGN

This section defines the **visual and UX design scope** for the admin interface, per Phase 2 (admin information architecture) and Phase 3 (admin UX flows). It does not define backend, authentication, or security implementation.

### Admin Login

Design concept only:

* Official school identity
* School logo
* Credential field(s) only as a neutral login UI concept
* Password field
* Sign-in action
* Loading state
* Error state

Do NOT specify:

* Authentication technology
* Authentication provider
* Password recovery
* Registration
* Role selection
* Permission selection
* Security implementation

Authentication/security implementation remains outside Phase 5.

Principal, MD, and Clerk have equal/full Version 1 access.

### Admin Dashboard

Design:

* Sidebar/navigation
* Dashboard overview
* Quick actions
* Recent updates
* Current notifications
* Achievement count
* Event count
* Gallery capacity (e.g., 12/15)
* Important warnings
* Basic system status
* A clear "what needs attention" area

The dashboard must feel like a practical school CMS, **not**:

* A developer dashboard
* An analytics SaaS
* An enterprise ERP
* A complicated control center

Do not add charts unless they genuinely communicate useful school-management information. Do not add unnecessary analytics.

### Admin Navigation

Use exactly this structure:

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

Do not invent additional modules.

### CRUD UI

Design reusable patterns for:

* List/view
* Add/create
* Edit
* Delete
* Save
* Cancel
* Confirmation
* Success
* Error
* Empty state
* Loading state

The interface should make the universal Version 1 lifecycle obvious:

```text
Create
 ↓
Save
 ↓
Immediately Public
 ↓
Manual Edit / Replace / Delete
```

Do not introduce:

* Draft
* Review
* Approval
* A publish button as a separate workflow
* Archive
* Revision history
* Automatic expiry

### Notification Admin UI

Design the admin screen for:

* Title
* Category
* Description
* Start Date
* End Date
* Time where required
* Important/Priority indicator

Categories must remain exactly:

* Admission
* SOS Examination
* School Announcements
* Events

No "Other" category. No multiple priority levels.

### Achievement Admin UI

Support:

```text
Toppers
├── Class 10
└── +2

Academic Achievements
Sports Achievements
Other Achievements
```

Topper records:

* Student name
* Photograph
* Marks/percentage

Do not create a result database.

### Event Admin UI

Support:

* Event poster/banner
* Event/invitation message
* Event details

Do not add:

* RSVP
* Ticketing
* Registration
* Booking

### Gallery Admin UI

Support exactly:

* School Building
* School Office
* Exam Hall

Maximum: **15 total gallery images.**

Show capacity clearly, e.g.: *12 / 15 images used.*

Support: Upload, Replace, Delete.

Do not add:

* Albums
* Tags
* Filters
* Search
* Advanced image editing
* Complex media management

### School / Leadership / Contact / Admissions / Examination Centre Admin UI

Provide visual management patterns for:

**School Information**
* About
* History
* Mission & Vision
* Academics
* Facilities
* Activities

**Leadership**
* Principal
* MD
* Photo
* Name
* Designation
* Message/Profile
* Contact

**Contact**
* School address
* Map/location
* Principal phone/WhatsApp/email
* MD phone/WhatsApp/email

**Admissions**
* Informational content only
* Do not invent exact admission fields beyond what is actually established
* Respect the Phase 1 open decision that exact admission content fields remain unresolved until school content is supplied

**Examination Centre**
* Centre introduction
* SOS
* Class 10
* +2
* Current examination information/instructions

Do not invent backend fields.

### Admin Responsive Design

Admin UI must also work on:

* Desktop
* Laptop
* Tablet
* Mobile where practical

Do not simply shrink the desktop dashboard.

The admin UI must prioritize, in order:

1. Findability
2. Clarity
3. Speed of management
4. Error prevention
5. Maintainability
6. Accessibility

### Admin Visual Language

Use the same locked Phase 4 design system:

* Paytone One
* Urbanist
* Approved color palette
* Official school logo
* Same radius language
* Same spacing language
* Same iconography
* Same restrained shadows
* Same premium academic identity

The admin interface should be more functional and information-dense than the public website.

Do not turn the public website into a dashboard. Do not turn the admin dashboard into a marketing page.

---

# 49. DESIGN DO NOT'S

Absolutely avoid:

* Generic SaaS layout
* Startup landing-page aesthetics
* Government-office aesthetic
* Childish school graphics
* Cartoon illustrations
* Excessive gradients
* Glassmorphism
* Dark theme
* Neon colors
* Excessive bright colors
* Excessive rounded cards
* Heavy shadows
* Excessive white space
* Excessive information density
* Stock photography
* Fake school imagery
* Giant hero image
* Hero carousel
* Video background
* Excessive CTAs
* Huge animations
* Excessive parallax
* Confetti
* Trophy graphics everywhere
* AI-generated illustrations everywhere
* Excessive badges
* Unnecessary popups

---

# 50. DESIGN QUALITY TEST

Before considering the design successful, evaluate it against:

### Findability

Can a student find important information quickly?

### Clarity

Can users understand what each section is for?

### Trust

Does the website look like an official institution?

### Simplicity

Is anything unnecessary?

### Mobile usability

Does it work comfortably on a phone?

### Accessibility

Can different users operate it comfortably?

### Performance

Does the visual design avoid unnecessary weight?

### Maintainability

Can CMS-managed content change without redesigning the interface?

### Visual quality

Does it look premium, academic, and modern?

---

# 51. IMPORTANT DESIGN PRIORITY

When visual beauty conflicts with usability:

> **Usability wins.**

When decoration conflicts with information:

> **Information wins.**

When an animation conflicts with speed:

> **Speed wins.**

When a trendy design pattern conflicts with the school's institutional identity:

> **Institutional identity wins.**

When a generated design invents content:

> **Reject the invented content.**

---

# 52. DESIGN FREEDOM VS. LOCKED STRUCTURE

> Stitch has creative freedom over visual composition, spacing, imagery treatment, card arrangement, typography scale, alignment, and responsive presentation, but it does NOT have creative freedom to change locked information architecture, content hierarchy, feature scope, navigation destinations, notification categories, or user-flow requirements.

This is critical.

The AI should creatively design the interface, not redesign the product requirements. Where this document specifies structure (navigation items, categories, page groupings, priority tiers), that structure is fixed. Where this document specifies visual direction (color, typography, spacing feel, composition), that direction is the constraint within which creative execution happens.

---

# 53. REFERENCE IMAGE RULE

Use the supplied:

* School logo
* Color/typeface reference
* Approved visual inspiration

as design references.

However:

**Do NOT clone or reproduce another website from the inspiration images.**

Use them only for:

* Visual richness
* Typography feel
* Composition inspiration
* Surface treatment
* Spacing feel
* Academic/premium aesthetic
* Color direction

The final website must have its own identity for:

**East Point Public Senior Secondary School.**

---

# 54. FINAL DESIGN DIRECTION

The final website should feel like:

> A premium modern academic institution that has invested seriously in its digital presence.

It should NOT feel like:

> An AI generated website template.

The visitor should immediately feel:

**Official.
Academic.
Trustworthy.
Modern.
Organized.**

And the student should immediately feel:

**"I can find what I need here."**

---

# 55. STITCH OUTPUT EXPECTATION

Generate a complete responsive website design system and page experience, covering both the **public website** and the **admin interface**.

**PUBLIC WEBSITE:**

* Desktop
* Mobile
* Header
* Information dropdown
* Persistent notification control
* Homepage
* Core public pages
* Reusable public components
* Responsive states

**ADMIN INTERFACE:**

* Login concept
* Admin dashboard
* Admin navigation
* CRUD list screens
* CRUD forms
* Gallery management
* Notification management
* Achievement management
* Event management
* School/leadership/contact/admission/examination management patterns
* Responsive admin behavior
* Loading/error/empty/success states

Stitch must design **both** the public UI and the admin UI visually.

Stitch must **not** design:

* Backend
* APIs
* Database schema
* Authentication implementation
* Security implementation
* Google Sheets architecture
* Apps Script architecture

Prioritize consistency across all pages, public and admin alike.

Do not generate random unrelated design variations unless they are explicitly useful for comparing design directions.

The final design must feel like one coherent website with a matching but more functional admin experience.

Do not write frontend code.

Do not introduce frameworks.

Do not invent backend architecture.

Do not invent school facts.

Focus on producing the highest-quality **UI/UX design system and page designs** based on this complete specification.

---

## Document Status

**FINAL — READY FOR HUMAN APPROVAL**

This Master UI/UX Design Prompt has been reviewed and corrected against Phase 0–4 source documents. No contradiction or scope issue was found in the final audit. This document is not automatically LOCKED — it becomes **PHASE 5 — LOCKED** only after explicit human approval.
