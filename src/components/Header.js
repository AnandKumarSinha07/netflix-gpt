import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate=useNavigate()

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/errorPage")
    });
    
  }
  
  return (
    <div className="absolute w-screen px-12 mt-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
    <img
      className="w-48"
      src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
      alt="logo"
    />

    <div className="p-2">
      <img
       className="w-8 h-8 "
       src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
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
