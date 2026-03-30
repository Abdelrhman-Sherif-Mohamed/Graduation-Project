# Tech Stack

## Core
- **Vanilla HTML/CSS/JavaScript** — no frontend framework
- **Bootstrap 5.3.8** — layout, components, utilities
- **Bootstrap Icons 1.13.1** — icon classes (`bi bi-*`)
- **Firebase 10.12.0** (loaded via CDN ESM) — Auth + Firestore only

## Firebase
- **Authentication** — email/password login, password reset
- **Firestore** — collections: `users`, `doctors`, `appointments`
- Config lives in `js/firebase-config.js`, exports `auth` and `db`
- All Firebase imports use `https://www.gstatic.com/firebasejs/10.12.0/...`

## JavaScript Modules
- Pages that use Firebase must use `<script type="module">`
- `js/doctors-data.js` is loaded as a regular script (no `type="module"`) before any script that needs `SPECIALTIES` or `getDoctorById`
- `js/script.js` handles shared appointment form logic (URL param filling, specialty→doctor filter)

## No Build System
There is no bundler, compiler, or package manager. Everything runs directly in the browser. No `node_modules`, no `npm`, no build step.

## Common Patterns
- `onAuthStateChanged` used on every protected page for auth guard + role redirect
- Firestore reads use `query` + `where` (no composite indexes — avoid `orderBy` with `where` on different fields)
- UI updates happen in-place after Firestore writes (no full page reload)
- `localStorage` key `currentUser` stores `{ uid, email, name, role }` for quick access
