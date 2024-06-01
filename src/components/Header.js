import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_HEADER,
  NETFLIX_LOGOUT,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLnaguage } from "../utils/configureSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange=(e)=>{
    dispatch(changeLnaguage(e.target.value))
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //this will be called when component will unaamount
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/errorPage");
      });
  };

  return (
    <div className="absolute w-screen px-12 mt-1 py-2 bg-gradient-to-r from-black z-10 flex justify-between">
      <img className="w-48" src={NETFLIX_HEADER} alt="logo" />

      <div className=" flex p-2">

        {showGptSearch &&<select className="p-2 m-2 bg-gray-900 text-white " onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>}

      <button
        className="px-4 py-2 m-2 bg-gray-900 border-blue-400 text-white text-lg"
        onClick={handleGptSearch}
      >
        {showGptSearch ?"Home":"GPT search"}
      </button>

        <img className="w-12 h-8 mt-4 " src={NETFLIX_LOGOUT} alt="logo" />

        <button
          onClick={handleSignOut}
          className="font-bold text-lg text-white m-3"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
