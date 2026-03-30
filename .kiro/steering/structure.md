# Project Structure

```
/
├── index.html                  Landing page (hero, specialties, doctors, contact)
├── css/
│   └── style.css               All custom CSS — single file, 15 sections with comments
├── js/
│   ├── firebase-config.js      Firebase init, exports `auth` and `db`
│   ├── doctors-data.js         SPECIALTIES array + getDoctorById() — global scope
│   └── script.js               Shared logic: appointment URL params, specialty→doctor filter
└── pages/
    ├── login.html              Auth: sign in, role-based redirect, password reset
    ├── register.html           Auth: patient registration
    ├── patient.html            Patient dashboard: view/cancel appointments
    ├── appointment.html        Booking form: 4-step, time slots, Firestore save
    ├── doctors.html            Doctor listing with specialty filter (fully dynamic)
    ├── specialties.html        Static specialty cards with booking links
    ├── dashboard.html          Doctor dashboard: 5 views, sidebar, specialty panel
    └── create-doctors.html     Admin: bulk-create doctor Firebase accounts
```

## CSS Architecture
- One file: `css/style.css` — no `<style>` blocks inside HTML pages
- CSS variables in `:root` for all colors (`--blue`, `--blue-dark`, `--blue-light`, `--blue-acc`, `--light-gray`)
- Each page has a scoped body class: `page-auth`, `page-patient`, `page-dashboard`, `page-appointment`, `page-admin`
- RTL-aware: use `border-right` not `border-left`, `translateX(-4px)` for rightward hover

## Data Flow
- `js/doctors-data.js` is the single source of truth for specialties and doctors (static data)
- Dynamic data (appointments, users) lives in Firestore
- Doctor email format: `{doctorId}@alshifa-clinic.com`, default password: `Doctor@123`
- Role lookup: check `users/{uid}` first, fallback to `doctors` collection by email

## Naming Conventions
- Doctor IDs: lowercase English (e.g. `ahmed`, `sara`, `karim`)
- Specialty IDs: lowercase English (e.g. `heart`, `dentist`, `bones`)
- Appointment URL param: `?doctor={doctorId}`
- Firestore appointment fields: `patientId`, `doctorId`, `specId`, `status` (`pending`/`confirmed`/`cancelled`)
