import { useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export function useAuth(authFirebase) {
  const [authentication, setauthentication] = useState(null);

  const auth = authFirebase();
  const provider = new GoogleAuthProvider();

  const logIn = () => signInWithPopup(auth, provider);
  const logOut = () => signOut(auth)
    .catch(err => console.error());

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log(user);
      if (user) {
        setauthentication(user);
      } else {
        setauthentication(null)
      }
    }) 
  }, [authentication]);

  return { authentication, logIn, logOut };
}