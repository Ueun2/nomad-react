import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie)
  }
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie)
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>
        {movie.genres && movie.genres.map((act,idx)=>{
          if(movie.genres.length===idx + 1){
            return <span key={act}>{act}</span>
          }else{
            return <span key={act}>{`${act} / `}</span>
          }
      })}
      </p>
      <p>{movie.description_full}</p>
    </div>
  )
}
export default Detail;