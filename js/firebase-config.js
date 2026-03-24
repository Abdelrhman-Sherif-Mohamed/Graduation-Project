import { initializeApp }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }         from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey:            "AIzaSyCOwMMVo4uyqY4g_pDcDFTvwmq1mXzlsbU",
    authDomain:        "al-shifa-clinic-a7816.firebaseapp.com",
    projectId:         "al-shifa-clinic-a7816",
    storageBucket:     "al-shifa-clinic-a7816.firebasestorage.app",
    messagingSenderId: "867976308051",
    appId:             "1:867976308051:web:b8fcfe1c879ed5c8e42da6",
    measurementId:     "G-JPFFY6MPH8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);
