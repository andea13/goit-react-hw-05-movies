import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesFound }) => {
  const location = useLocation();
  return (
    <ul>
      {moviesFound.map(movie => (
        <Link
          key={movie.id}
          to={`/movies/${movie.id}`}
          state={{ from: location }}
        >
          {movie.title && <li>{movie.title}</li>}
          {movie.name && <li>{movie.name}</li>}
        </Link>
      ))}
    </ul>
  );
};
