import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initFirebaseAuth from "../Firebase/firebase.init";

initFirebaseAuth();

const useFirebase = () => {
	const [loading, setLoading] = useState(true);
	const [autError, setAutError] = useState('');
	const [user, setUser] = useState({});
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	// google login
	const googleSignIn = () => {


		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// The signed-in user info.
				const user = result.user;
				setUser(user);
				setAutError('');
				// ...
			}).catch((error) => {
				// Handle Errors here.

				const errorMessage = error.message;
				setAutError(errorMessage)
			});
	};

	// set user
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});
	}, [auth]);

	// logout implement
	const logout = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};

	return { googleSignIn, logout, user, loading, autError };
};

export default useFirebase;
