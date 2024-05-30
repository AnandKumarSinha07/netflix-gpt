import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovie from "../hooks/usePopularMovie";
const Browse = () => {
   
  useNowplayingMovies();
  usePopularMovie();

  return (
    <div>
      <Header />
      <Maincontainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
