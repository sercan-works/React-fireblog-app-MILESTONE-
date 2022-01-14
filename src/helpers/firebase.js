
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: 'AIzaSyDeCVBcXciBKWHXFP10X_r0kP3WYl75E4s',
  authDomain: 'fire-blog-90774.firebaseapp.com',
  databaseURL:'https://fire-blog-90774-default-rtdb.firebaseio.com/',
  projectId: 'fire-blog-90774',
  storageBucket: 'fire-blog-90774.appspot.com',
  messagingSenderId:'468048236462',
  appId: '468048236462:web:69c84719befbd37291423f'
};


const app = initializeApp(firebaseConfig);

export const firebase = getAuth(app);