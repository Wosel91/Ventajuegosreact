import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import fbConfig from '../secret/firebase';

firebase.initializeApp(fbConfig);

export default firebase;
