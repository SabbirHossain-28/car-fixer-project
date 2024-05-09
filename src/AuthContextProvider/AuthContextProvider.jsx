import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FirebaseConfig/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const currentUserEmail=currentUser?.email || user.email;
      const activeUser={email:currentUserEmail}
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        axios.post("https://car-fixer-server.vercel.app/jwt",activeUser,{withCredentials:true})
        // .then(res =>{
        //   console.log("Response coming from server",res.data);
        // })
      }
      else{
        axios.post("https://car-fixer-server.vercel.app/logout",activeUser,{withCredentials:true})
        // .then(res =>{
        //   console.log(res.data);
        // })
      }
    });
    return () => unsubscribe();
  }, [auth,user]);

  const authInfo = {
    user,
    createUser,
    signInUser,
    loading,
    updateUserInfo,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthContextProvider;
