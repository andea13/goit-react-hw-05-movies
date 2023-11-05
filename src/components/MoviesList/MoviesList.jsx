import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesFound }) => {
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

export default MoviesList;
