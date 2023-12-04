import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastsByMovieId } from 'service/utils';
import { CastList, CastListItem } from './Cast.styled';
const Loader = lazy(() => import('../Loader/Loader'));

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    if (!movieId) {
      return;
    }

    fetchCastsByMovieId(movieId).then(res => {
      setCasts(res.cast);
      setIsLoading(false);
    });
  }, [movieId]);

  const createImageUrl = path => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  return (
    <>
      <Suspense>{isLoading === true && <Loader />}</Suspense>
      {casts && !isLoading && (
        <CastList>
          {casts.map(cast => (
            <CastListItem key={cast.id}>
              <img src={createImageUrl(cast.profile_path)} alt={cast.name} />
              <h3>{cast.name}</h3>
            </CastListItem>
          ))}
        </CastList>
      )}

      {casts && casts.length === 0 && (
        <p>We do not have any information about the cast in this movie</p>
      )}
    </>
  );
};

export default Cast;
