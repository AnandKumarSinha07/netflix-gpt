import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice"
import { NETFLIX_HEADER, NETFLIX_LOGOUT } from "../utils/constants";



const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
   
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName}= user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        navigate("/browse")
        
      } else {
        dispatch(removeUser());
        navigate("/")
      
      }
    });
    //this will be called when component will unaamount
    return ()=>unsubscribe();    
   },[])
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/errorPage")
    });
     
  }
  
  return (    
    <div className="absolute w-screen px-12 mt-1 py-2 bg-gradient-to-t from-black z-10 flex justify-between">
    <img
      className="w-48"
      src={NETFLIX_HEADER}
      alt="logo"
    />

    <div className="p-2">
      <img
       className="w-8 h-8 "
       src={NETFLIX_LOGOUT}
       alt="logo"/>

        <button
         onClick={handleSignOut}
         className="font-bold text-lg">sign Out
        </button>
    </div>

    </div>
    
  );
};

export default Header;
