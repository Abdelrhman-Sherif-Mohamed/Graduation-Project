const SPECIALTIES = [
    {
        id: "heart", name: "أمراض القلب", icon: "bi-heart-pulse-fill",
        img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=700&q=85",
        desc: "تشخيص وعلاج أمراض القلب والأوعية الدموية باستخدام أحدث الأجهزة الطبية",
        doctors: [
            { id:"ahmed",  name:"د. أحمد محمد",     title:"أخصائي جراحة قلب",              exp:"خبرة 15 عاماً في جراحة القلب والشرايين",
              img:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face" },
            { id:"karim",  name:"د. كريم حسن",      title:"استشاري أمراض القلب",            exp:"خبرة 10 سنوات في قسطرة القلب والتدخلات التاجية",
              img:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face" }
        ]
    },
    {
        id: "dentist", name: "طب الأسنان", icon: "bi-emoji-smile",
        img: "https://images.unsplash.com/photo-1588776814546-1ffbb172d936?w=700&q=85",
        desc: "خدمات طب الأسنان التجميلي والعلاجي باستخدام أحدث التقنيات وأفضل المواد الآمنة",
        doctors: [
            { id:"sara",   name:"د. سارة خالد",     title:"أخصائية طب أسنان",               exp:"حاصلة على البورد الأمريكي في طب الأسنان التجميلي",
              img:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face" },
            { id:"hana",   name:"د. ملك سعيد",      title:"أخصائية تقويم أسنان",            exp:"خبرة 8 سنوات في تقويم الأسنان للأطفال والكبار",
              img:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face" }
        ]
    },
    {
        id: "bones", name: "جراحة العظام", icon: "bi-bandaid-fill",
        img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&q=85",
        desc: "علاج الكسور، آلام المفاصل، والعمود الفقري بأحدث التقنيات الجراحية والعلاجية",
        doctors: [
            { id:"mohamed",name:"د. محمد علي",      title:"أخصائي عظام ومفاصل",             exp:"خبرة 12 عاماً في جراحات العظام والعمود الفقري",
              img:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face" },
            { id:"tarek",  name:"د. طارق سامي",     title:"أخصائي جراحة العمود الفقري",     exp:"خبرة 9 سنوات في جراحات الديسك والعمود الفقري",
              img:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face" }
        ]
    },
    {
        id: "children", name: "طب الأطفال", icon: "bi-balloon-heart-fill",
        img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=700&q=85",
        desc: "رعاية شاملة لصحة أطفالك من الولادة وحتى المراهقة مع أفضل أطباء الأطفال",
        doctors: [
            { id:"mona",   name:"د. منى إبراهيم",   title:"أخصائية طب أطفال",               exp:"خبرة 11 عاماً في رعاية الأطفال حديثي الولادة",
              img:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=faces&auto=format" },
            { id:"omar",   name:"د. عمر فاروق",     title:"استشاري طب الأطفال",             exp:"خبرة 14 عاماً في أمراض الأطفال والتطعيمات",
              img:"https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=faces&auto=format" }
        ]
    },
    {
        id: "neuro", name: "المخ والأعصاب", icon: "bi-activity",
        img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=85",
        desc: "تشخيص وعلاج أمراض الجهاز العصبي والصداع والصرع باستخدام أحدث البروتوكولات العلاجية",
        doctors: [
            { id:"noura",  name:"د. نورا سعيد",     title:"أخصائية مخ وأعصاب",              exp:"استشارية أمراض المخ والأعصاب وعلاج الصداع النصفي",
              img:"https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face" },
            { id:"yasser", name:"د. ياسر منصور",    title:"أخصائي جراحة المخ والأعصاب",    exp:"خبرة 13 عاماً في جراحات المخ والأورام العصبية",
              img:"https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=400&h=400&fit=crop&crop=faces&auto=format" }
        ]
    },
    {
        id: "internal", name: "الباطنة والمناعة", icon: "bi-lungs-fill",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=85",
        desc: "تشخيص وعلاج أمراض الجهاز الهضمي والكبد والكلى والجهاز التنفسي وأمراض المناعة",
        doctors: [
            { id:"hassan", name:"د. حسن الشريف",    title:"أخصائي الباطنة والجهاز الهضمي", exp:"خبرة 11 عاماً في أمراض الجهاز الهضمي والكبد",
              img:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face&flip=h" },
            { id:"dina",   name:"د. دينا مصطفى",    title:"أخصائية أمراض الكلى والمناعة",  exp:"خبرة 9 سنوات في أمراض الكلى وغسيل الكلى",
              img:"https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop&crop=face" }
        ]
    },
    {
        id: "derma", name: "الجلدية والتجميل", icon: "bi-stars",
        img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=85",
        desc: "علاج أمراض الجلد والشعر والأظافر وخدمات التجميل الطبي بأحدث التقنيات",
        doctors: [
            { id:"rania",  name:"د. رانيا فؤاد",    title:"أخصائية جلدية وتجميل",           exp:"خبرة 10 سنوات في علاج حب الشباب والبهاق والليزر",
              img:"https://images.unsplash.com/photo-1643297654416-05795d62e39c?w=400&h=400&fit=crop&crop=face" },
            { id:"wael",   name:"د. وائل نجيب",     title:"أخصائي تجميل طبي",               exp:"خبرة 8 سنوات في الحقن التجميلية وإزالة الشعر",
              img:"https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=400&h=400&fit=crop&crop=face" }
        ]
    },
    {
        id: "eye", name: "طب العيون", icon: "bi-eye-fill",
        img: "https://images.unsplash.com/photo-1516069677018-378515003435?w=700&q=85",
        desc: "فحص وعلاج أمراض العيون وإجراء عمليات الليزك وجراحة الماء الأبيض والزرق",
        doctors: [
            { id:"sameh",  name:"د. سامح عبدالله",  title:"أخصائي جراحة العيون",            exp:"خبرة 12 عاماً في عمليات الليزك وجراحة الشبكية",
              img:"https://png.pngtree.com/png-clipart/20230927/original/pngtree-photo-men-doctor-physician-chest-smiling-png-image_13143575.png" },
            { id:"iman",   name:"د. إيمان حمدي",    title:"أخصائية أمراض العيون",           exp:"خبرة 9 سنوات في علاج الجلوكوما وأمراض الشبكية",
              img:"https://png.pngtree.com/png-vector/20250415/ourmid/pngtree-female-doctor-portrait-in-white-png-image_15971053.png" }
        ]
    },
    {
        id: "gynecology", name: "النساء والتوليد", icon: "bi-gender-female",
        img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=700&q=85",
        desc: "رعاية صحة المرأة من الحمل والولادة وأمراض الجهاز التناسلي وعلاج العقم",
        doctors: [
            { id:"heba",   name:"د. هبة الله أحمد", title:"استشارية نساء وتوليد",           exp:"خبرة 14 عاماً في الحمل عالي الخطورة والولادة",
              img:"https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=400&h=400&fit=crop&crop=face" },
            { id:"nadia",  name:"د. نادية سليم",    title:"أخصائية علاج العقم",             exp:"خبرة 10 سنوات في أطفال الأنابيب وعلاج العقم",
              img:"https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?w=400&h=400&fit=crop&crop=face" }
        ]
    },
    {
        id: "urology", name: "المسالك البولية", icon: "bi-droplet-fill",
        img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=85",
        desc: "تشخيص وعلاج أمراض الكلى والمثانة والبروستاتا وحصوات المسالك البولية",
        doctors: [
            { id:"ashraf", name:"د. أشرف كمال",     title:"أخصائي المسالك البولية",         exp:"خبرة 11 عاماً في تفتيت الحصوات وجراحة البروستاتا",
              img:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=faces&auto=format" },
            { id:"sherif", name:"د. شريف منير",     title:"استشاري جراحة المسالك",          exp:"خبرة 13 عاماً في جراحة الكلى والمنظار البولي",
              img:"https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg" }
        ]
    },
    {
        id: "radiology", name: "الأشعة التشخيصية", icon: "bi-radioactive",
        img: "https://images.unsplash.com/photo-1516069677018-378515003435?w=700&q=85",
        desc: "تشخيص دقيق بأحدث أجهزة الأشعة المقطعية والرنين المغناطيسي والموجات فوق الصوتية",
        doctors: [
            { id:"magdy",  name:"د. مجدي سعد",      title:"أخصائي الأشعة التشخيصية",       exp:"خبرة 15 عاماً في الأشعة المقطعية والرنين المغناطيسي",
              img:"https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww" }
        ]
    },
    {
        id: "emergency", name: "الطوارئ", icon: "bi-hospital-fill",
        img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=700&q=85",
        desc: "خدمة طوارئ على مدار الساعة مع فريق طبي متخصص للتعامل مع الحالات الحرجة",
        doctors: [
            { id:"adel",   name:"د. عادل رشاد",     title:"طبيب طوارئ",                     exp:"خبرة 10 سنوات في الإسعافات الأولية والحالات الحرجة",
              img:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face&bri=-10" },
            { id:"layla",  name:"د. ليلى منصور",    title:"طبيبة طوارئ وإنعاش",             exp:"خبرة 8 سنوات في الإنعاش القلبي والحالات الحرجة",
              img:"https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=400&h=400&fit=crop&crop=face" }
        ]
    }
];

/**
 * Find a doctor by ID across all specialties.
 * @param {string} doctorId
 * @returns {object|null} doctor data with specialty info, or null if not found
 */
function getDoctorById(doctorId) {
    for (const spec of SPECIALTIES) {
        const doc = spec.doctors.find(d => d.id === doctorId);
        if (doc) return { ...doc, specialty: spec.name, specialtyId: spec.id };
    }
    return null;
}
