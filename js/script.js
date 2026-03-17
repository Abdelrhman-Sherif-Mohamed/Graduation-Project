// ===== صفحة الحجز: ملء بيانات الدكتور تلقائياً من URL =====
function fillAppointmentFromURL() {
    if (!document.getElementById('appointmentForm')) return;

    const params = new URLSearchParams(window.location.search);
    const doctorId = params.get('doctor');
    const specialtyId = params.get('specialty');

    if (doctorId && typeof getDoctorById !== 'undefined') {
        const doc = getDoctorById(doctorId);
        if (doc) {
            const docSelect = document.getElementById('doctorSelect');
            const specSelect = document.getElementById('specialtySelect');
            const docInfo = document.getElementById('doctorInfo');

            if (specSelect) {
                specSelect.value = doc.specialtyId;
                specSelect.dispatchEvent(new Event('change'));
            }
            if (docSelect) docSelect.value = doc.id;

            if (docInfo) {
                docInfo.classList.remove('d-none');
                docInfo.innerHTML = `
                    <div class="d-flex align-items-center gap-3 p-3 rounded-3 mb-3" style="background:rgba(255,255,255,.15)">
                        <img src="../${doc.img}" class="rounded-circle" style="width:56px;height:56px;object-fit:cover;" alt="${doc.name}">
                        <div>
                            <p class="text-white fw-bold mb-0">${doc.name}</p>
                            <small class="text-white opacity-75">${doc.title} — ${doc.specialty}</small>
                        </div>
                    </div>`;
            }
        }
    } else if (specialtyId) {
        const specSelect = document.getElementById('specialtySelect');
        if (specSelect) {
            specSelect.value = specialtyId;
            specSelect.dispatchEvent(new Event('change'));
        }
    }
}

// ===== فلترة الأطباء في قائمة الحجز حسب التخصص =====
function bindSpecialtyDoctorFilter() {
    const specSelect = document.getElementById('specialtySelect');
    const docSelect = document.getElementById('doctorSelect');
    if (!specSelect || !docSelect || typeof SPECIALTIES === 'undefined') return;

    specSelect.addEventListener('change', function () {
        const selectedSpec = SPECIALTIES.find(s => s.id === this.value);
        docSelect.innerHTML = '<option value="">اختر الدكتور</option>';

        const list = selectedSpec ? selectedSpec.doctors : SPECIALTIES.flatMap(s => s.doctors.map(d => ({ ...d, _specName: s.name })));
        list.forEach(doc => {
            const opt = document.createElement('option');
            opt.value = doc.id;
            opt.textContent = selectedSpec ? doc.name : `${doc.name} — ${doc._specName}`;
            docSelect.appendChild(opt);
        });
    });

    // شغّل مرة أولى
    specSelect.dispatchEvent(new Event('change'));
}

document.addEventListener('DOMContentLoaded', function () {
    bindSpecialtyDoctorFilter();
    fillAppointmentFromURL();
});
