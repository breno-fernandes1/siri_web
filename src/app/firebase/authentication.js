// auth.js
import { 
    signInWithEmailAndPassword
    
} from "firebase/auth";

import { 
    addDoc, 
    collection, 
    getFirestore,
    query, 
    getDocs, 
    where 
} from "firebase/firestore";

import { auth, db } from './firebase'; 


async function entrar(email, senha) {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
        
        console.log("User logged in successfully!");
    } catch (error) {
        console.error("Login error:", error);
        
    }
}



export {
    entrar
};