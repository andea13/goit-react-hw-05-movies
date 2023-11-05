import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { fetchTrendingMovies } from 'service/utils';
const Loader = lazy(() => import('../components//Loader/Loader'));

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
        <Suspense>{isLoading && <Loader />}</Suspense>
        <MoviesList moviesFound={movies} />
      </section>
    </main>
  );
};

export default HomePage;
