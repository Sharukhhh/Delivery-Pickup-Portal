
import admin from 'firebase-admin';
import serviceAccount from '../../../../Downloads/delivery-pickup-portal-56f71-firebase-adminsdk-6u8aa-823808e64b.json';

admin.initializeApp({
    credential : admin.credential.cert(serviceAccount)
});

