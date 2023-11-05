import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'service/utils';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchReviewsByMovieId(movieId).then(res => {
      setReviews(res.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews && !isLoading && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              {review.content || review.author_details.content}
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
