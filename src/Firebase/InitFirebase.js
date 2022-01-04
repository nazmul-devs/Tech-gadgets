import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const InitialFirebase = () => {
	initializeApp(firebaseConfig);
};
export default InitialFirebase;
