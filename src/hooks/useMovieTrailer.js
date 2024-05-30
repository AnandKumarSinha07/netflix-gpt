import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  console.log(movie_id);
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movie_id+"/videos",
        API_OPTIONS
      );
      const json = await data.json();
      //console.log(json,"Not working ");

      const trailers =  json.results.filter((video) => video.type === "Trailer");
      const trailer = trailers[0];
      dispatch(addTrailerVideo(trailer));
     // console.log(trailer);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
