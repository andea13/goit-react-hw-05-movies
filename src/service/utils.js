import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '42fa24333ee689285b5f9f8d0d7e86b8';

export const fetchTrendingMovies = async () => {
  let result = await axios.get(
    `${BASE_URL}trending/all/day?language=en-US&api_key=${KEY}`
  );

  let data = await result.data;
  return data;
};

export const fetchMoviesByQuery = async (query, page) => {
  let result = await axios.get(
    `${BASE_URL}search/movie?include_adult=false&language=en-US&api_key=${KEY}&query=${query}&page=${page}`
  );

  let data = await result.data;
  return data;
};

export const fetchMoviesById = async id => {
  let result = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);

  let data = result.data;
  return data;
};

export const fetchCastsByMovieId = async id => {
  let result = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`);

  let data = result.data;
  return data;
};

export const fetchReviewsByMovieId = async id => {
  let result = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`);

  let data = result.data;
  return data;
};
