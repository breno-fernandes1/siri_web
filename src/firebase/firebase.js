import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  query,
  getDocs,
  where

} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAgNOM_CzTmFP6vvu74YZgydk9AM4OFzto",
  authDomain: "sir-web-d4b2a.firebaseapp.com",
  projectId: "sir-web-d4b2a",
  storageBucket: "sir-web-d4b2a.appspot.com",
  messagingSenderId: "107150404910",
  appId: "1:107150404910:web:929733be88efc9c7c2debf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



async function entrar(email, senha) {
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    console.log("User logged in successfully!");
  } catch (error) {
    console.error("Login error:", error);
  }
}
export { entrar };


async function cadastrar(email, senha, cnpj, razaoSocial, nomeFantasia, inscricaoEstadual, numeroFuncionarios, porteEmpresa) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    // Adicionar detalhes do usuário no Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      cnpj,
      razaoSocial,
      nomeFantasia,
      inscricaoEstadual,
      numeroFuncionarios,
      email,
      porteEmpresa
    });

    console.log("User registered successfully!");
  } catch (error) {
    console.error("Registration error:", error);
  }
}
export { cadastrar };




