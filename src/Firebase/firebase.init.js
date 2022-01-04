import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initFirebaseAuth = () => {
	return initializeApp(firebaseConfig);
};

export default initFirebaseAuth;
