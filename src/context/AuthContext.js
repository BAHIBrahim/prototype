import { createContext, useContext, useEffect, useState } from "react"
import { getAuth, sendSignInLinkToEmail, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../utils/firebase"


const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  const actionCodeSettings = {
    url: 'http://localhost',
    handleCodeInApp: true,
  };

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    })

    return unsubscribe;
  }, [])


  const emailAuth = (email) => {
    return sendSignInLinkToEmail(auth, email, actionCodeSettings);
  }

  const googleAuth = () => {
    return signInWithPopup(auth, googleAuthProvider);
  }

  const signOutHandler = () => {
    return signOut(auth);
  }

  const value = {
    currentUser,
    emailAuth,
    googleAuth,
    signOutHandler
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}