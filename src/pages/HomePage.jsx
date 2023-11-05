import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';

import { fetchTrendingMovies } from 'service/utils';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies()
      .then(res => {
        const dataArray = res.results;
        setMovies(dataArray);
      })
      .catch(err => console.error(err.message))
      .finally(setIsLoading(false));
  }, []);

  return (
    <main>
      <section>
        <h1>Trending today</h1>
        {isLoading && <Loader />}
        <MoviesList moviesFound={movies} />
      </section>
    </main>
  );
};

export default HomePage;
