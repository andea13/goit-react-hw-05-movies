import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'service/utils';
const MoviesList = lazy(() => import('../components/MoviesList/MoviesList'));

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesFound, setMoviesFound] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({
      query: e.target.elements.searchQuery.value.toLowerCase(),
    });
    setMoviesFound([]);
  };

  const input = searchParams.get('query');

  useEffect(() => {
    if (!input) {
      setError(null);
      setMoviesFound([]);
    }
    if (input) {
      setIsLoading(true);
      fetchMoviesByQuery(input, page)
        .then(res => {
          const dataArray = res.results;
          setMoviesFound(prevMoviesFound => [...prevMoviesFound, ...dataArray]);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [input, page]);

  const onNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <label>
            <input name="searchQuery" />
            <button type="submit">Search</button>
          </label>
        </form>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <Suspense>
          <MoviesList moviesFound={moviesFound} searchParams={searchParams} />
        </Suspense>
        {moviesFound.length > 0 && !isLoading && !error && (
          <button onClick={onNextPage}>Load More</button>
        )}
      </main>
    </>
  );
};

export default MoviesPage;
