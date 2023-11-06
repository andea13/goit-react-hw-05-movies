import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'service/utils';
const Loader = lazy(() => import('../Loader/Loader'));

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const refToGoBack = location?.state?.from || `/movies/${movieId}`;

  useEffect(() => {
    setIsLoading(true);
    if (!movieId) return;
    fetchReviewsByMovieId(movieId).then(res => {
      setReviews(res.results);
      setIsLoading(false);
    });
  }, [movieId]);

  return (
    <>
      <Suspense>{isLoading === true && <Loader />}</Suspense>
      {reviews && !isLoading && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <Link to={refToGoBack}>
                {review.content || review.author_details.content}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {reviews && reviews.length === 0 && (
        <p>We do not have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
