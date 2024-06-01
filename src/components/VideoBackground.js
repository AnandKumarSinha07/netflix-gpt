import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const selector = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movie_id);
  
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/hXzcyx9V0xw?si=rRiCRQAUqH2auEYJ"+selector?.key+"?&autoplay=1&mute=1 "}
        title="YouTube video player"
        allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
