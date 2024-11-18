
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {

  apiKey: "AIzaSyBpvucElIJDTHRndOOxtZ-jbloL6GDjOcA",

  authDomain: "foodbestow-19db0.firebaseapp.com",

  projectId: "foodbestow-19db0",

  storageBucket: "foodbestow-19db0.firebasestorage.app",

  messagingSenderId: "144889588844",

  appId: "1:144889588844:web:207f3d8f8bd830486cfc49"

};



const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app)
export default app