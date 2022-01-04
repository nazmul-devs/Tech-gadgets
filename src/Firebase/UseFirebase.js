import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitialFirebase from "./InitFirebase";
const auth = getAuth();

InitialFirebase();
const UseFirebase = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});

	// google login
	const googleSignIn = () => {
		const googleProvider = new GoogleAuthProvider();

		signInWithPopup(auth, googleProvider)
			.then((result) => {})
			.finally(() => {
				setLoading(false);
			});
	};
	// logout implement
	const logout = () => {
		signOut(auth).then(() => {
			setUser({});
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
	}, []);
	return { googleSignIn, logout, user, loading };
};

export default UseFirebase;
