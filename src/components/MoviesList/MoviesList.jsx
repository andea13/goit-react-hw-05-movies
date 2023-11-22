import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
const MoviesList = ({ moviesFound }) => {
  console.log(moviesFound);
  const location = useLocation();

  return (
    <ul>
      {moviesFound.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title && <span>{movie.title}</span>}
            {movie.name && <span>{movie.name}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  moviesFound: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
