import React, { useState, useEffect, Suspense } from 'react';
import { fetchMoviesById } from 'service/utils';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const refToGoBack = location?.state?.from || '/';

  const [moviesFound, setMoviesFound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      setIsLoading(true);
      fetchMoviesById(movieId)
        .then(res => {
          setMoviesFound(res);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [movieId]);

  const getYear = date => {
    if (date) {
      return date.slice(0, 4);
    }
  };

  const getPercentage = score => {
    if (score) {
      return `${Math.round(score * 10)}%`;
    }

    return 'This movie has not been rated yet';
  };

  const getGenresList = genres => {
    if (genres && genres.length) {
      return genres.map(genre => genre.name).join(', ');
    }
  };

  const createImageUrl = path => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  return (
    <main>
      <section>
        {isLoading && <Loader />}
        {!isLoading && moviesFound && (
          <>
            <Link to={refToGoBack} className="return_button">
              Go back
            </Link>
            <div className="section_container">
              <div className="image_container">
                {moviesFound.backdrop_path && (
                  <img
                    src={createImageUrl(moviesFound.backdrop_path)}
                    alt={moviesFound.title || moviesFound.name}
                  />
                )}

                {!moviesFound.backdrop_path && moviesFound.poster_path && (
                  <img
                    src={createImageUrl(moviesFound.poster_path)}
                    alt={moviesFound.title || moviesFound.name}
                  />
                )}

                {!moviesFound.backdrop_path && !moviesFound.poster_path && (
                  <p>Sorry, we were unable to locate to corresponding image</p>
                )}
              </div>
              <div className="info_container">
                <h1>
                  {moviesFound.title || moviesFound.name},{' '}
                  {getYear(moviesFound.release_date)}
                </h1>
                <p>User Score: {getPercentage(moviesFound.vote_average)}</p>
                <h2>Overview</h2>
                <p>{moviesFound.overview}</p>
                <h2>Genres</h2>
                <p>{getGenresList(moviesFound.genres)}</p>
              </div>
            </div>
            <p>Additional information: </p>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>

            <Suspense>
              <Outlet />
            </Suspense>
          </>
        )}
      </section>
    </main>
  );
};

export default MovieDetailsPage;
