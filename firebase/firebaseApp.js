import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBSl6JWBowCj-t3vs2BT0eemK028_FAdlM",
    authDomain: "delivery-pickup-portal-56f71.firebaseapp.com",
    projectId: "delivery-pickup-portal-56f71",
    storageBucket: "delivery-pickup-portal-56f71.appspot.com",
    messagingSenderId: "402003341488",
    appId: "1:402003341488:web:e2a6383347280f97d74b75",
    measurementId: "G-LZRMFDEXB3"
};


const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export default firebaseApp;