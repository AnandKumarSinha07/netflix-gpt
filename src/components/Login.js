import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { IMAGE_BG_URL } from "../utils/constants";

 
function Login() {
 
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
  //  console.log(message)
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
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorMessage+errorCode)

  });

    }

  }
  
  return (
    <div >
      <Header />
      <div className="absolute">
        <img
          src={IMAGE_BG_URL}
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
