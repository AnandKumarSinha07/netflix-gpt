import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useNavigate } from "react-router-dom";
 
function Login() {
  const navigate=useNavigate();
  const [isSignin,setisSignin]=useState(true);
  const [errMessage,seterrMessage]=useState(null);

  const email=useRef(null);
  const password=useRef(null);
  
  const togleSignForm=()=>{
      setisSignin(!isSignin);
  };
  
  
  const handleForm=()=>{
    
    console.log(email.current.value);
    console.log(password.current.value);
    const message=checkValidate(email.current.value,password.current.value);
    console.log(message)
    seterrMessage(message)

    if(message)return null
    //Sign in and sign up

    if(!isSignin){
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrMessage(errorCode+errorMessage)
      });
    }
    else{
       //sign in
       signInWithEmailAndPassword(auth, email.current.value, password.current.value )
      .then((userCredential) => {
      // Signed in 
       const user = userCredential.user;
       console.log(user);
       navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorMessage+errorCode)
    navigate("/browse")
  });

    }

  }
  
  return (
    <div >
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>

       <form onSubmit={(e)=>e.preventDefault()}   className="absolute p-12 w-3/12 my-36 bg-black  mx-auto right-0 left-0 text-white bg-opacity-80">
      
       <h1 className="font-bold text-3xl py-4">{isSignin? "sign-In" :"sign-Up"}</h1>

         {!isSignin &&
         <input type="text"
          placeholder="Full Name" 
          className="p-2 my-2 w-full bg-gray-600" />
         }
         
        <input type="text" 
         ref={email}
         placeholder="Email" 
         className="p-2 my-2 w-full bg-gray-600"/>

        <input type="password"
         ref={password}
         placeholder="password" 
         className="p-2 my-2 w-full bg-gray-600" />

         <p className="text-red-500 font-bold text-lg py-2">{errMessage}</p>

         <button
          onClick={handleForm}
          className=" p-2 my-4 bg-red-700 w-full rounded-lg">
          {isSignin? "signIn" :"signUp"}
         </button>

        <p
         className="cursor-pointer"
         onClick={togleSignForm}
        >{isSignin? "New to Netflix SignUp Now" :"Already a member"}
        </p>
       </form>
       
    </div>  
  );
}

export default Login;
