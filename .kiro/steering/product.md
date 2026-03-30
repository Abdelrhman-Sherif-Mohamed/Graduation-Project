# عيادة الشفاء — Al-Shifa Clinic

A medical clinic web application serving patients, doctors, and admins. It allows patients to register, browse specialties and doctors, and book appointments. Doctors have a dashboard to manage and confirm appointments. Admins can create doctor accounts.

## User Roles
- **patient** → `pages/patient.html` (view/cancel appointments)
- **doctor** → `pages/dashboard.html` (manage appointments per specialty)
- **admin** → `pages/create-doctors.html` (create doctor Firebase accounts)

## Core Features
- 12 medical specialties, 23 doctors
- Appointment booking with specialty/doctor selection and time slots
- Firebase Auth login with role-based redirect
- Doctor dashboard with 5 views: overview, today, all, patients, specialty panel
- Admin tool to bulk-create doctor Firebase accounts

## Language & Direction
The UI is fully in Arabic (RTL). All pages use `lang="ar" dir="rtl"`.
