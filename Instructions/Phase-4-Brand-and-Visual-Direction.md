# Phase 4 — Brand & Visual Direction

**Project:** East Point Public Senior Secondary School — Information & Communication Website
**Phase:** 4 — Brand & Visual Direction
**Depends on:** Phase 0 (**Locked**), Phase 1 (**Locked**), Phase 2 (**Locked**), Phase 3 (**Locked**)

**Document Status:** LOCKED — SOURCE OF TRUTH

> Phase 0, Phase 1, Phase 2, and Phase 3 are finalized/locked. This document does not reopen, question, reinterpret, replace, or modify any decision from those phases. Phase 4 defines the **brand and visual direction** only — tone, color, typography, logo usage, photography direction, hero direction, surface/shadow/icon treatment, and motion principles. It does not produce Stitch prompts, HTML/CSS/JS, or move into Phase 5.
>
> This document follows the established project gate:
>
> **DISCUSSION → DECISIONS → DOCUMENTATION → REVIEW → FINAL APPROVAL → LOCK → NEXT PHASE**

---

## 1. Overall Visual Goal — FINALIZED DECISION

The website should be:

* Easy to use
* Minimal
* Rich
* Professional

**Intended overall visual direction:**

> **"Clean + Premium + Modern"**

The website should look visually rich and professionally designed without becoming complicated, crowded, or difficult to use.

**Final three-word visual identity:**

> **"Premium — Academic — Modern"**

The website must continue to follow the existing project principle carried from Phase 0:

> **"Information first, decoration second."**

Usability and clarity remain more important than visual decoration.

The "Premium — Academic — Modern" identity is consistent with, and does not contradict, the Phase 3 UX personality principle:

> **"Modern school, not modern startup."**

---

## 2. Color System — LOCKED

The attached reference image ("Color & Typefaces") is the **authoritative visual source** for the approved palette. The palette consists of three visually approved swatches: a navy/blue swatch, a yellow/gold swatch, and a near-black swatch.

This section distinguishes three separate things, which must not be conflated:

**A. Approved Visual Palette** — what the user has visually approved in the reference image: a navy/blue color, a yellow/gold color, and a near-black color.

**B. Printed Source Metadata** — the labels and hex/RGB values printed inside the reference image itself, transcribed as-is:

| Palette Swatch (visual) | Printed Label | Printed Hex | Printed RGB |
|---|---|---|---|
| Navy/blue swatch | Moody Blue | `#007DC6` | rgb(0, 125, 198) |
| Yellow/gold swatch | Moody Blue *(as printed)* | `#007DC6` *(as printed)* | rgb(0, 125, 198) *(as printed)* |
| Near-black swatch | Dull Black | `#1C1C1C` | rgb(28, 28, 28) |

**C. Implementation Status**

The visual appearance of all three palette swatches is approved and locked.

The HEX/RGB values printed inside the reference image are preserved exactly as source metadata. This document does not independently verify those printed values against the visible swatches.

Therefore:
* The navy/blue swatch is visually approved.
* The yellow/gold swatch is visually approved.
* The near-black swatch is visually approved.
* No color value should be silently corrected, renamed, guessed, or replaced.
* The printed HEX/RGB values remain documented as source metadata.
* Where a printed value conflicts with the visible swatch, the visible approved swatch remains the visual source of truth and the conflict must remain explicitly documented.
* No implementation-specific HEX/RGB correction is made in Phase 4.

The exact implementation representation of the approved visual palette may be established in a later implementation phase without changing the approved visual direction. Any later implementation value must reproduce the approved visual appearance and must not silently redefine the palette.

> **Yellow/gold swatch — visually approved, printed value unconfirmed.** The reference image visually shows a yellow/gold color for this swatch, while its printed label ("Moody Blue") and printed value (`#007DC6` / rgb(0,125,198)) are the same as the navy/blue swatch's — an inconsistency between the visible swatch and its printed metadata. This ambiguity is preserved here rather than guessed or silently corrected:
> * The swatch's **visual appearance is approved** as part of the locked palette.
> * No replacement hex/RGB value has been invented or guessed.
> * No new official color name has been assigned to this swatch.
> * The implementation-ready hex/RGB for this swatch remains unspecified until the user explicitly confirms a value in writing or provides a revised authoritative source.
> * Later implementation phases must not guess or silently assign a HEX/RGB value for this swatch.

The reference image displays 10%, 40%, 60%, and 80% markings alongside each palette swatch. This document records only that these percentage markings are present in the reference image. Their technical meaning or implementation method is not defined by Phase 4.

**Gradients:**
* Gradients ARE allowed, built only from the approved palette/reference described above.
* Gradients must remain controlled and purposeful — not excessive.
* Gradients must not become the dominant visual identity of the website.
* No unrelated gradient colors may be introduced outside the approved palette.

**Explicitly rejected for color:**
* Excessive gradients
* Glassmorphism
* Bright/chaotic color usage
* Heavy visual effects
* Dark theme
* Excessively bright colors

---

## 3. Typography System — LOCKED

The typography pairing shown in the attached reference image is **FINAL and LOCKED**.

| Role | Typeface | Notes from reference |
|---|---|---|
| Primary display/heading | **Paytone One** | Shown at Regular weight in the reference. |
| Supporting/body/UI | **Urbanist** | Shown across a full weight range: Light, Regular, Medium, Semibold, Bold, Black. |

* **Paytone One** provides the distinctive visual identity for major headings and display typography.
* **Urbanist** provides clean, readable typography for supporting text, body content, navigation, UI, labels, metadata, and other interface text as appropriate, using its available weight range (Light through Black) to establish hierarchy.
* No other intentional/design typeface may be introduced, even if a design tool, Stitch, an AI model, or an implementation tool recommends one. Technical fallback fonts may be used only as browser/system fallback behavior when the selected fonts are unavailable; such fallback fonts are not part of the visual identity or design system.
* Typography must use this pairing consistently across the entire website.

---

## 4. Logo / School Identity — LOCKED

* The school has already provided an official logo. This logo is the official logo asset for the website.
* The logo is **not** redesigned, replaced, reinterpreted, or regenerated as part of Phase 4 or any later phase.
* The logo should be used consistently across:
  * Header
  * Mobile header
  * Footer
  * Admin interface
  * Small identity/favicon usage where technically appropriate
* The logo must not be distorted (stretched, recolored arbitrarily, or reproportioned).

---

## 5. Photography Direction — LOCKED

Photography is **not** currently the primary visual dependency of the website.

**Preferred visual approach:** *"Mostly design/graphics."*

* The hero should not depend on a large photographic background.
* When photography is used, it must be authentic, school-approved photography.

**Not allowed:**
* Stock school photography
* Random student stock photos
* Generic education stock imagery
* Fake school photography

**Real, approved school photography may be used for:**
* Principal
* MD
* Toppers
* Gallery
* School-specific sections

This is consistent with the Phase 2/3 image-fallback rule: where an approved photo is missing, a generic placeholder is used rather than inventing or substituting a real person's image.

---

## 6. Hero Direction — LOCKED

The hero follows the attached inspiration/reference direction.

**Preferred approach:**
* Clean
* Typography-led
* Minimal
* Little or no hero photography
* Strong visual hierarchy
* Professional
* Premium
* Modern

**Not allowed:**
* A generic marketing/SaaS-style hero
* Hero carousels
* Video backgrounds
* Excessive decorative graphics
* Excessive CTA buttons

The hero must remain consistent with the already-locked information priorities and homepage UX defined in Phase 2 and Phase 3. Phase 4 defines only the visual direction. The exact hero information arrangement, CTA count, CTA wording, CTA placement, button hierarchy, and component composition are intentionally deferred to Phase 5.

---

## 7. Shapes, Cards & Containers — LOCKED

The attached inspiration images are the visual reference for:
* Card treatment
* Container treatment
* Surface hierarchy
* Border radius
* Spacing feel
* Overall visual richness

* The UI uses controlled, moderately/slightly rounded surfaces.
* The website should feel clean and structured rather than card-heavy.

**Not allowed:**
* Excessive rounded/pill-shaped components
* Excessive cards
* Overly decorative containers

---

## 8. Shadows — LOCKED

* Subtle shadows only, used where they improve hierarchy or separation.

**Not allowed:**
* Heavy/deep shadows
* Neumorphism
* Glowing cards
* Excessive floating effects

---

## 9. Iconography — LOCKED

* Clean SVG icons are used throughout the website.

**Icon requirements:**
* Clean
* Minimal
* Consistent
* Professional
* Lightweight
* Visually coherent

* Icons may have interaction states: hover, focus, active, selected.
* Small icon interactions are encouraged where they improve usability or feedback.
* Decorative icons without a clear purpose are not added.

---

## 10. Motion — LOCKED

**Animation level:** *"Subtle professional."*

**Scroll-based animations:** *"Yes, wherever they look good."*

**Page-load/logo animation:** *"Very short."*

Motion is used for:
* Interaction feedback
* Transitions
* Orientation
* Subtle visual polish

**Not allowed:**
* Huge animations
* Long intro sequences
* Excessive parallax
* Constant movement
* Distracting effects
* Animations that delay access to important information

The very short logo/page-load transition must never prevent or unnecessarily delay access to the website — consistent with the Phase 3 Loading UX rule that loading UI must communicate actual loading, not become an unnecessary animation experience.

---

## 11. Examination Centre — Major Visual Feature — LOCKED

The Examination Centre is one of the website's major visual highlights and unique school features.

**Visual importance:** *"Major unique selling point."*

The presentation must remain factually accurate and follow the locked Phase 0/1/2 requirements regarding HPBOSE authorization. The examination-centre facility must not be exaggerated into unsupported absolute claims (e.g., "all exams always happen here").

The design should make this feature easy to understand and visually important without turning it into misleading marketing.

---

## 12. Notifications — Strong Visual Importance — LOCKED

Notifications carry strong visual importance because they are a Tier 1 requirement (Phase 0/2).

They should be:
* Easy to notice
* Easy to scan
* Clearly categorized
* Professionally presented
* Visually prioritized

**Not allowed:** excessive red colors, flashing, bouncing, or aggressive animation to make notifications visually loud.

The existing Phase 1 notification rules (exactly four categories; simple Important/Priority indicator; no tiered priority levels) remain unchanged.

---

## 13. Toppers / Achievements — Visual Highlight — LOCKED

The Toppers/Achievements area is one of the website's visual highlights.

**Preferred visual feeling:** *"Prestigious / award-like,"* while remaining academic and professional.

**Not allowed:**
* Excessive gold
* Trophy graphics everywhere
* Confetti
* Cartoon effects
* Flashy award-show styling

**The visual treatment should communicate academic achievement through:**
* Strong typography
* Student photography where approved
* Marks/percentage
* Clear hierarchy
* Refined composition
* Controlled accent usage

The actual topper information scope (Class 10 and +2 toppers; name, photograph, marks/percentage; flexible achievement categories) remains exactly as defined in Phase 0 and Phase 1 — this phase governs presentation only, not scope.

---

## 14. Explicitly Rejected Visual Directions — LOCKED

The following are explicitly **not allowed**, as hard visual guardrails for Phase 4 and all later design work:

* Excessive gradients
* Glassmorphism
* Huge animations
* Too many cards
* Too much white space
* Too much information density
* Stock photos
* Cartoonish design
* SaaS-looking design
* Government-office-looking design
* Dark theme
* Excessively bright colors
* Excessive rounded corners
* Heavy shadows
* AI-generated illustrations everywhere

---

## 15. Visual Reference Images

**Source of Truth rule:** The attached color/typeface reference and inspiration images are approved visual references. They define the intended visual direction, not an instruction to clone another website. Where the reference image contains ambiguous or inconsistent printed metadata, the ambiguity must be preserved rather than guessed or silently corrected (see Section 2 for the yellow/gold swatch example).

The attached inspiration images are **LOCKED visual references** for:
* Overall visual richness
* Minimal premium composition
* Hero composition
* Typography-led composition
* Surface/card treatment
* Spacing feel
* Visual hierarchy
* Modern academic aesthetic
* Color treatment where applicable

They are **not** sources for:
* School content
* School facts
* School branding
* Navigation structure
* Exact page architecture
* Exact component structure
* Exact copy
* Exact layouts
* Another school's identity
* Another school's imagery

**Hard rule:** The reference images must be treated as **inspiration / visual direction, not templates to copy.** Google Stitch and later AI tools must not reproduce the reference website as a clone.

The East Point Public Senior Secondary School website must continue to use the already-locked:
* Information Architecture (Phase 2)
* UX/User Flows (Phase 3)
* Content priorities (Phase 0/1)
* School logo (Section 4 of this document)
* School-specific content
* Phase 4 visual identity decisions (this document)

---

## 16. Final Brand Statement

> "East Point Public Senior Secondary School should have a premium, academic and modern digital identity built around clean typography, restrained institutional colors, subtle interaction, minimal graphics, strong information hierarchy and a refined professional atmosphere."

**Concise design principle:**

> "Make it look expensive without making it complicated."

---

## 17. Phase 4 vs. Phase 5 Boundary

**Phase 4 defines:**
* Brand personality
* Visual positioning
* Color direction
* Typography
* Logo usage
* Photography direction
* Visual treatment principles
* Shape/surface direction
* Iconography
* Motion principles
* Visual do/don't rules

**Phase 5 — Page & Component Design will define:**
* Actual page layouts
* Actual section compositions
* Actual component designs
* Exact card designs
* Exact buttons
* Exact navigation UI
* Exact hero composition
* Exact spacing decisions
* Exact responsive component behavior
* Component-level visual specifications

Phase 4 does not imply that exact components or page layouts are already finalized. Consistent with the boundaries set in Phase 2 and Phase 3, Phase 4 also does **not** decide:

* Stitch prompts
* HTML/CSS/JS implementation
* Exact pixel-level spacing/grid systems
* Component-level engineering details
* Google Sheets schema
* Apps Script API design
* Authentication mechanism
* Security implementation
* Performance implementation details

Those belong to later phases, beginning with Phase 5.

---

## 18. Phase 4 Acceptance Criteria

Phase 4 is ready for final review when the document clearly defines:

* Overall visual goal and three-word identity
* Locked visual color system (with printed reference metadata preserved exactly and any visual/metadata ambiguity explicitly documented)
* Locked typography system (with exact reference pairing preserved)
* Logo usage rules
* Photography direction
* Hero direction
* Shape/card/container direction
* Shadow direction
* Iconography direction
* Motion/animation direction
* Visual treatment for the three flagged high-priority features: Examination Centre, Notifications, Toppers/Achievements
* Explicitly rejected visual directions
* Final brand statement and design principle

Before locking, verify that no Phase 0, Phase 1, Phase 2, or Phase 3 requirement has been contradicted or silently changed, and that the Color System and Typography System are clearly marked LOCKED.

---

## 19. Document Governance

**Current status: Draft — Pending Final Review.**

* The **Color System** (Section 2) and **Typography System** (Section 3) are marked **LOCKED** as visual decisions, sourced directly from the attached "Color & Typefaces" reference image — noting that the second (yellow/gold) swatch's printed hex/RGB value is flagged as not implementation-ready pending a written correction (see Section 2).
* The overall Phase 4 document is **READY FOR FINAL HUMAN REVIEW**.
* This document follows the established project gate: **DISCUSSION → DECISIONS → DOCUMENTATION → REVIEW → FINAL APPROVAL → LOCK → NEXT PHASE**.
* Phase 4 is **not** marked as locked. It becomes locked only after explicit human approval.
* No Stitch prompts, HTML/CSS/JS, or Phase 5 work are produced inside this document.
