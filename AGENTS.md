# AI Developer Instructions for East Point Public School

This repository uses a strict **HTML/CSS/Vanilla JS** architecture. Do not introduce frameworks without explicit approval.

## 1. Inspect Before Creating
Always inspect existing components, styles, and layouts before creating new files.
- Reusable UI is found in `styles/components/`.
- Design tokens are in `styles/tokens.css`.
- Typography rules are in `styles/typography.css`.

## 2. No Duplication
- **No duplicate shared UI:** Reuse existing components.
- **No duplicate pages:** There is only one authoritative source for each page.
- **One authoritative source for layouts:** `layouts/public/header.html` and `layouts/public/footer.html` are compiled into pages during the build step. Do not manually edit the injected layouts inside page files.

## 3. Architecture Preservation
- **Preserve folder structure:** Maintain the separation of `assets/`, `components/`, `layouts/`, `pages/`, `scripts/`, and `styles/`.
- **Preserve design tokens:** Do not hardcode colors or spacing. Use existing CSS variables.
- **Preserve typography:** Keep the approved `Paytone One` and `Urbanist` local fonts. Do not add Google Fonts.

## 4. Content & Scope
- **No invented content:** Do not invent school content or create fake APIs/databases.
- **No silent IA changes:** Do not change the Information Architecture silently.
- **Smallest maintainable change:** Prefer simple, readable, and maintainable changes.

## 5. Build & Validation
- **Build step:** Run `node scripts/build.js` to compile the `dist/` directory for production.
- **Validate after changes:** Always check for broken links and case-sensitivity issues after modifying references.
- **Source of truth:** Never manually edit files inside the `dist/` directory.

Follow these rules strictly to ensure the project remains production-safe and maintainable.
