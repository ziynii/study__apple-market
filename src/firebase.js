import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCbFnLnja0ycRDPp2Nh37KTDipcNEDRhwM',
  authDomain: 'apple-market-84eef.firebaseapp.com',
  projectId: 'apple-market-84eef',
  storageBucket: 'apple-market-84eef.appspot.com',
  messagingSenderId: '414683063830',
  appId: '1:414683063830:web:041e672f50d4f7cd217737',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
