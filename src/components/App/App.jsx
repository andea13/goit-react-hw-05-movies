import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Layout = lazy(() => import('../Layout//Layout'));
const AppWrapper = lazy(() => import('./App.styled'));
const Loader = lazy(() => import('../Loader/Loader'));

export const App = () => {
  return (
    <AppWrapper>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </AppWrapper>
  );
};

export default App;
