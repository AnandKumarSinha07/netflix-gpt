import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovie from "../hooks/usePopularMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
   
  useNowplayingMovies();  
  usePopularMovie();

  const GptView=useSelector(store=>store.gpt.showGptSearch)

  return (
    <div>
      <Header />
      {
        GptView?(<GptSearch/>): (<><Maincontainer/><SecondaryContainer/></>)
      }     
    </div>
  );
};

export default Browse;
