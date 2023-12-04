import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'service/utils';
import { ReviewsList, ReviewsListItem } from './Reviews.styled';
const Loader = lazy(() => import('../Loader/Loader'));

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

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
        <ReviewsList>
          {reviews.map(review => (
            <ReviewsListItem key={review.id}>
              {review.content || review.author_details.content}
            </ReviewsListItem>
          ))}
        </ReviewsList>
      )}

      {reviews && reviews.length === 0 && (
        <p>We do not have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
