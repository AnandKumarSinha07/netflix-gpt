import React from "react";
import  {language}  from "../utils/languageConstant"
import { useSelector } from "react-redux";
const GptSearchBar = () => {
 
  const lanSelector=useSelector(store=>store.config.lang);
  return (
    <div className="pt-[7%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 bg-gradient-to-r from-black to-red-600">
        <input
          className="col-span-9 p-3 m-4"
          type="text"
          placeholder={language[lanSelector].gptSearchPlaceholder}
        />
        <button className="col-span-3 bg-red-500 m-4 text-white py-2 px-4 ">
          {language[lanSelector].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
