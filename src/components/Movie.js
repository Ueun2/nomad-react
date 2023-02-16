import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id,title, year, summary, coverImg, genres }) {
  return (
    <div >
      <h2>
        <Link to={`movie/${id}`}>{`${title}(${year})`}</Link>
      </h2>
      <p>{summary}</p>
      <img src={coverImg} alt={title} />
      <ul>
        {genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}
Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;