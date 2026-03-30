# عيادة الشفاء — توثيق المشروع الكامل

> **Al-Shifa Clinic** — Full Project Documentation  
> تاريخ آخر تحديث: مارس 2026

---

## 1. نظرة عامة على المشروع

**عيادة الشفاء** هو تطبيق ويب متكامل لإدارة عيادة طبية، يتيح للمرضى حجز المواعيد، وللأطباء إدارة حجوزاتهم، وللمسؤولين إدارة حسابات الأطباء — كل ذلك عبر واجهة عربية RTL احترافية.

### الهدف من المشروع
- تسهيل عملية حجز المواعيد الطبية إلكترونياً
- توفير لوحة تحكم للأطباء لمتابعة مرضاهم
- إدارة مركزية لحسابات الأطباء عبر لوحة الأدمن

---

## 2. التقنيات المستخدمة

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| HTML5 | — | هيكل الصفحات |
| CSS3 | — | التصميم والتنسيق |
| JavaScript (Vanilla) | ES2020+ | المنطق البرمجي |
| Bootstrap | 5.3.8 | نظام الشبكة والمكونات |
| Bootstrap Icons | 1.13.1 | الأيقونات |
| Firebase Auth | 10.12.0 | تسجيل الدخول والمصادقة |
| Firebase Firestore | 10.12.0 | قاعدة البيانات |
| AOS (Animate On Scroll) | 2.3.4 | انيميشن عند التمرير |

> **ملاحظة:** لا يوجد Framework أو Build System — المشروع يعمل مباشرة في المتصفح بدون npm أو webpack.

---

## 3. هيكل الملفات

```
/
├── index.html                  ← الصفحة الرئيسية (Landing Page)
├── css/
│   └── style.css               ← كل CSS المخصص في ملف واحد
├── js/
│   ├── firebase-config.js      ← إعداد Firebase (يُصدّر auth و db)
│   ├── doctors-data.js         ← بيانات الأطباء والتخصصات (static data)
│   └── script.js               ← منطق مشترك (URL params، فلترة الأطباء)
└── pages/
    ├── login.html              ← تسجيل الدخول
    ├── register.html           ← إنشاء حساب مريض
    ├── patient.html            ← لوحة المريض (حجوزاته)
    ├── appointment.html        ← فورم حجز موعد
    ├── doctors.html            ← عرض الأطباء مع فلتر
    ├── specialties.html        ← صفحة التخصصات
    ├── dashboard.html          ← لوحة تحكم الطبيب
    └── create-doctors.html     ← إنشاء حسابات الأطباء (أدمن)
```

---

## 4. Firebase — قاعدة البيانات

### Collections في Firestore

#### `users`
يحتوي على بيانات كل المستخدمين (مرضى + أطباء).

```json
{
  "uid": "string",
  "name": "string",
  "email": "string",
  "role": "patient | doctor | admin",
  "nationalId": "string",
  "phone": "string",
  "whatsapp": "string",
  "address": "string",
  "doctorId": "string (للأطباء فقط)",
  "specId": "string (للأطباء فقط)",
  "specialty": "string (للأطباء فقط)",
  "createdAt": "timestamp"
}
```

#### `doctors`
بيانات الأطباء — يُستخدم للبحث بالـ email عند تسجيل الدخول.

```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "title": "string",
  "exp": "string",
  "img": "string (URL)",
  "specId": "string",
  "specialty": "string",
  "role": "doctor",
  "createdAt": "timestamp"
}
```

#### `appointments`
كل الحجوزات في النظام.

```json
{
  "patientId": "string (uid)",
  "patientName": "string",
  "phone": "string",
  "doctorId": "string",
  "doctorName": "string",
  "specialty": "string",
  "specId": "string",
  "date": "string (YYYY-MM-DD)",
  "time": "string",
  "notes": "string",
  "status": "pending | confirmed | cancelled",
  "createdAt": "timestamp"
}
```

---

## 5. الأدوار والصلاحيات

| الدور | البريد | كلمة المرور | التوجيه بعد الدخول |
|-------|--------|-------------|-------------------|
| مريض (patient) | أي بريد | يختاره المستخدم | `patient.html` |
| طبيب (doctor) | `{doctorId}@alshifa-clinic.com` | `Doctor@123` | `dashboard.html` |
| أدمن (admin) | `abdelrhmansherif140@gmail.com` | — | `create-doctors.html` |

### منطق تحديد الدور عند الدخول
1. يجلب بيانات المستخدم من `users/{uid}` مباشرة
2. إذا لم يوجد → يبحث في `doctors` collection بالـ email
3. يحفظ البيانات في `users` تلقائياً للمرة القادمة

---

## 6. الصفحات بالتفصيل

### 6.1 الصفحة الرئيسية (`index.html`)

**الأقسام:**
- **Navbar** — شريط تنقل ثابت مع Mega Menu للتخصصات (12 تخصص، 23 طبيب)
- **Hero Section** — خلفية gradient أزرق مع إحصائيات متحركة (counter animation)
- **التخصصات** — 12 كارت بـ border-top ملون لكل تخصص
- **مزايا الخدمة** — 6 كروت خدمات
- **فريقنا الطبي** — 4 أطباء مميزين (ديناميكي من `doctors-data.js`)
- **اتصل بنا** — معلومات التواصل + فورم
- **Footer** — روابط سريعة + تخصصات + تواصل اجتماعي

**مميزات تقنية:**
- Counter animation بـ IntersectionObserver (الأرقام تعد عند الظهور)
- AOS animations على كل العناصر
- Mega Menu بـ 4 أعمدة responsive

---

### 6.2 تسجيل الدخول (`login.html`)

**الوظائف:**
- تسجيل دخول بـ Firebase Auth (`signInWithEmailAndPassword`)
- إظهار/إخفاء كلمة المرور
- إرسال رابط إعادة تعيين كلمة المرور (`sendPasswordResetEmail`)
- رسائل خطأ واضحة لكل حالة
- Loading spinner أثناء التحقق
- Redirect تلقائي حسب الدور

**رسائل الخطأ المدعومة:**
- `auth/user-not-found` → البريد غير مسجّل
- `auth/wrong-password` → كلمة المرور غير صحيحة
- `auth/invalid-email` → صيغة البريد غير صحيحة
- `auth/too-many-requests` → تجاوز عدد المحاولات
- `auth/invalid-credential` → البريد أو كلمة المرور غير صحيحة

---

### 6.3 إنشاء حساب (`register.html`)

**الحقول (7 حقول):**
1. الاسم الكامل
2. البريد الإلكتروني
3. كلمة المرور (6 أحرف على الأقل)
4. الرقم القومي (14 رقم — مع validation)
5. رقم الهاتف
6. رقم الواتساب (اختياري)
7. العنوان

**العمليات:**
- `createUserWithEmailAndPassword` → إنشاء حساب في Firebase Auth
- `updateProfile` → حفظ الاسم في Firebase Auth Profile
- `setDoc(users/{uid})` → حفظ البيانات في Firestore
- `role: 'patient'` تلقائياً

---

### 6.4 لوحة المريض (`patient.html`)

**المحتوى:**
- 4 كروت إحصائيات: إجمالي / انتظار / مؤكدة / ملغية
- قائمة كل الحجوزات مرتبة من الأحدث
- إمكانية إلغاء أي حجز مباشرة

**التقنيات:**
- `onAuthStateChanged` → حماية الصفحة + redirect حسب الدور
- `query(where('patientId','==',uid))` → جلب حجوزات المريض فقط
- `updateDoc` → تحديث حالة الحجز بدون reload
- AOS refresh بعد تحميل البيانات

---

### 6.5 فورم الحجز (`appointment.html`)

**4 خطوات:**
1. البيانات الشخصية (اسم + هاتف)
2. التخصص والطبيب (select مترابطين)
3. التاريخ والوقت (date input + 18 time slot بصري)
4. ملاحظات إضافية (اختياري)

**مميزات:**
- Doctor Preview Card بعد اختيار الطبيب
- Time Slots بصرية قابلة للضغط (مزامنة مع الـ select)
- منع اختيار تاريخ في الماضي (`min = today`)
- Pre-fill من URL param `?doctor=ahmed`
- Success state بعد الحجز بدون reload
- يعمل بدون تسجيل دخول (guest booking)

---

### 6.6 صفحة الأطباء (`doctors.html`)

**المحتوى:**
- Hero section مع أزرار فلترة ديناميكية (من `SPECIALTIES`)
- 23 كارت طبيب مع صورة + تخصص + زرار حجز
- فلترة client-side بدون طلب جديد
- Fallback avatar من `ui-avatars.com` لو الصورة مش موجودة
- AOS refresh بعد كل فلترة

---

### 6.7 صفحة التخصصات (`specialties.html`)

**المحتوى:**
- Hero section مع 3 إحصائيات (pills)
- 12 كارت تخصص مع صورة + وصف + زرار حجز + زرار أطباء
- الطوارئ: زرار "اتصل الآن" بدل "احجز الآن"
- AOS على كل الكروت

---

### 6.8 لوحة تحكم الطبيب (`dashboard.html`)

**الهيكل:**
- Sidebar (240px) مع gradient أزرق
- على الموبايل: Sidebar مخفي + toggle button + click-outside للإغلاق

**5 Views:**

| View | المحتوى |
|------|---------|
| overview | بانر التخصص + 4 إحصائيات + جدول اليوم المختصر |
| today | جدول حجوزات اليوم الكامل (مع واتساب وعنوان) |
| all | كل الحجوزات مع تابات فلترة (الكل/انتظار/مؤكدة/ملغية) |
| patients | قائمة المرضى (مريض واحد لكل patientId فريد) |
| specialty | جدول خاص بالتخصص مع أعمدة إضافية |

**SPEC_CONFIG — إعدادات التخصصات:**
كل تخصص له: أيقونة، لون، خلفية، وصف، وأعمدة إضافية في الجدول.

مثال:
```javascript
heart: {
  icon: 'bi-heart-pulse-fill',
  color: '#e53935',
  bg: '#ffebee',
  desc: 'أمراض القلب والأوعية الدموية',
  extraCols: ['ضغط الدم', 'معدل القلب']
}
```

**العمليات:**
- تأكيد/إلغاء الحجوزات مع تحديث UI فوري
- `updateRowUI` يحدث نفس الحجز في كل الجداول في نفس الوقت
- Fallback: لو مش موجود في `users` يبحث في `doctors` بالـ email

---

### 6.9 إنشاء حسابات الأطباء (`create-doctors.html`)

**الوصول:** أدمن فقط (`abdelrhmansherif140@gmail.com`)

**الوظائف:**
- اختيار تخصص → اختيار طبيب → تحديد كلمة مرور
- إنشاء حساب Firebase Auth للطبيب
- حفظ البيانات في `doctors` و `users` في Firestore
- **Bulk Create:** إنشاء كل الأطباء دفعة واحدة مع delay 400ms بين كل طلب
- فحص الأطباء الموجودين مسبقاً من Firestore
- Log Box ملون يعرض تفاصيل كل عملية

**ألوان الـ Log:**
- 🟢 `.ok` → تم بنجاح
- 🟡 `.warn` → موجود مسبقاً
- 🔴 `.err` → فشل
- 🔵 `.info` → جاري التنفيذ

---

## 7. بيانات الأطباء والتخصصات (`doctors-data.js`)

### التخصصات الـ 12

| ID | الاسم | الأطباء |
|----|-------|---------|
| heart | أمراض القلب | د. أحمد محمد، د. كريم حسن |
| dentist | طب الأسنان | د. سارة خالد، د. ملك سعيد |
| bones | جراحة العظام | د. محمد علي، د. طارق سامي |
| children | طب الأطفال | د. منى إبراهيم، د. عمر فاروق |
| neuro | المخ والأعصاب | د. نورا سعيد، د. ياسر منصور |
| internal | الباطنة والمناعة | د. حسن الشريف، د. دينا مصطفى |
| derma | الجلدية والتجميل | د. رانيا فؤاد، د. وائل نجيب |
| eye | طب العيون | د. سامح عبدالله، د. إيمان حمدي |
| gynecology | النساء والتوليد | د. هبة الله أحمد، د. نادية سليم |
| urology | المسالك البولية | د. أشرف كمال، د. شريف منير |
| radiology | الأشعة التشخيصية | د. مجدي سعد |
| emergency | الطوارئ | د. عادل رشاد، د. ليلى منصور |

### الدالة `getDoctorById(doctorId)`
تبحث عن طبيب بالـ ID عبر كل التخصصات وترجع بياناته + اسم تخصصه + ID تخصصه.

---

## 8. معمارية الـ CSS

### المبادئ
- **ملف واحد فقط:** كل CSS في `css/style.css`
- **لا يوجد `<style>` داخل HTML**
- **CSS Variables** في `:root` للألوان
- **Body Classes** لكل صفحة للـ scoping

### CSS Variables
```css
:root {
  --blue: #0d47a1;           /* الأزرق الرئيسي */
  --blue-dark: #0a3161;      /* للـ gradients */
  --blue-light: #e8f0fe;     /* للخلفيات الفاتحة */
  --blue-acc: #1a73e8;       /* للأزرار */
  --primary-blue: #0d47a1;
  --secondary-blue: #1565c0;
  --dark-blue: #0a3161;
  --light-blue: #e8f0fe;
  --light-gray: #f4f6fb;
  --accent-blue: #1a73e8;
}
```

### Body Classes
| Class | الصفحة |
|-------|--------|
| `page-home` | index.html |
| `page-auth` | login.html, register.html |
| `page-patient` | patient.html |
| `page-appointment` | appointment.html |
| `page-doctors` | doctors.html |
| `page-specialties` | specialties.html |
| `page-dashboard` | dashboard.html |
| `page-admin` | create-doctors.html |

### RTL Support
- `lang="ar" dir="rtl"` على كل صفحة
- `border-right` بدل `border-left`
- `translateX(-4px)` للـ hover (يتحرك لليمين)
- Mega Menu: `left: 0` بدل `right: 0`

---

## 9. الـ Animations

### AOS (Animate On Scroll)
مُفعّل على كل الصفحات بالإعدادات:
```javascript
AOS.init({ duration: 700, once: true, offset: 60 });
```

**الأنواع المستخدمة:**
- `fade-up` — كروت الخدمات والأطباء
- `fade-down` — عناوين الـ hero
- `fade-right` / `fade-left` — أعمدة الـ contact
- `zoom-in` — كروت التخصصات والإحصائيات

### Counter Animation
الأرقام في الـ hero تعد من 0 للرقم الحقيقي عند ظهورها في الشاشة:
```javascript
// يستخدم IntersectionObserver
// data-target="5000" data-prefix="+"
// data-target="15" data-suffix="+"
```

### CSS Animations
- **Pulse** على كارت الطوارئ (نبضة حمراء)
- **Float** على أيقونة صفحة الحجز
- **Zoom** على صور الأطباء والتخصصات عند hover
- **Underline** على روابط الـ navbar عند hover

---

## 10. الـ localStorage

```javascript
localStorage.setItem('currentUser', JSON.stringify({
  uid: 'string',
  email: 'string',
  name: 'string',
  role: 'patient | doctor | admin',
  doctorId: 'string | null'
}));
```

يُمسح عند تسجيل الخروج (`signOut`).

---

## 11. نقاط القوة التقنية

1. **Zero Dependencies** — لا يحتاج npm أو build step، يعمل مباشرة
2. **Firebase CDN ESM** — imports مباشرة من CDN بدون تثبيت
3. **Single CSS File** — سهل الصيانة والتعديل
4. **Optimistic UI Updates** — تحديث الواجهة فوراً بدون انتظار Firestore
5. **Role-based Routing** — redirect تلقائي حسب الدور
6. **Fallback Logic** — لو مش موجود في `users` يبحث في `doctors`
7. **No Composite Indexes** — queries بسيطة تتجنب الحاجة لـ Firestore indexes
8. **Responsive RTL** — يعمل على كل الشاشات مع دعم كامل للعربية

---

## 12. Firebase Config

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyCOwMMVo4uyqY4g_pDcDFTvwmq1mXzlsbU",
  authDomain: "al-shifa-clinic-a7816.firebaseapp.com",
  projectId: "al-shifa-clinic-a7816",
  storageBucket: "al-shifa-clinic-a7816.firebasestorage.app",
  messagingSenderId: "867976308051",
  appId: "1:867976308051:web:b8fcfe1c879ed5c8e42da6"
};
```

> هذه البيانات public وآمنة في الـ frontend — الحماية الحقيقية في Firestore Security Rules.

---

## 13. كيفية تشغيل المشروع

```
1. افتح index.html في أي متصفح حديث
2. لا يحتاج server أو npm install
3. Firebase يعمل مباشرة عبر CDN
```

**للتطوير المحلي:**
- استخدم Live Server في VS Code
- أو أي HTTP server بسيط

---

*توثيق معد بواسطة فريق التطوير — عيادة الشفاء 2026*
