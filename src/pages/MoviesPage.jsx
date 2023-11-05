import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'service/utils';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState('');
  const [moviesFound, setMoviesFound] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);

    if (!input) {
      setMoviesFound([]);
    }
    if (input) {
      setSearchParams({ input });
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
  }, [input, page, setSearchParams]);

  useEffect(() => {
    setInput(searchParams.get('input'));
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    setInput(e.target.elements.searchQuery.value.toLowerCase());
  };

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

        <MoviesList moviesFound={moviesFound} />
        {moviesFound.length > 0 && !isLoading && !error && (
          <button onClick={onNextPage}>Load More</button>
        )}
      </main>
    </>
  );
};

export default MoviesPage;
