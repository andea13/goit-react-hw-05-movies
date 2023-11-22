import React, { useState, useEffect, lazy, Suspense } from 'react';
import { fetchMoviesById } from 'service/utils';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
const Loader = lazy(() => import('../components/Loader/Loader'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const location = useLocation();
  console.log(location);

  const refToGoBack = location?.state?.from || `/movies`;
  console.log(refToGoBack);

  const [moviesFound, setMoviesFound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    // console.log(query);

    if (movieId) {
      setIsLoading(true);
      fetchMoviesById(movieId)
        .then(res => {
          setMoviesFound(res);
        })
        .catch(err => {
          setError(err.message);
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [movieId, error]);

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
        <Suspense>{isLoading && <Loader />}</Suspense>
        {!isLoading && moviesFound && (
          <>
            {/* {moviesFound.backdrop_path ||
              moviesFound.poster_path ||
              moviesFound.title ||
              moviesFound.name ||
              moviesFound.vote_average ||
              moviesFound.vote_average ||
              (moviesFound.overview && ( */}
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
                {moviesFound.vote_average && (
                  <p>User Score: {getPercentage(moviesFound.vote_average)}</p>
                )}

                {!moviesFound.vote_average && (
                  <p>The movie has not been rated yet.</p>
                )}

                <h2>Overview</h2>
                {moviesFound.overview && <p>{moviesFound.overview}</p>}
                {!moviesFound.overview && (
                  <p>This movie has not got any overview yet.</p>
                )}

                <h2>Genres</h2>
                {moviesFound.genres && (
                  <p>{getGenresList(moviesFound.genres)}</p>
                )}

                {moviesFound.genres && moviesFound.genres.length === 0 && (
                  <p>The movie has not been associated with any genre yet.</p>
                )}
              </div>
            </div>
            <p>Additional information: </p>

            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>

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
