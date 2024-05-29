import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer"
const Browse = () => {
   
  useNowplayingMovies();

  return (
    <div>
      <Header />
      <Maincontainer/>
      <SecondaryContainer/>
      {/*
        Main container
          -VideoBackground 
          -videoTitle

          -Secondary Container
            -movies list*n
            -card
      
      
      */
      }
    </div>
  );
};

export default Browse;
