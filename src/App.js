import './App.css';
import api from './api/axiosConfig';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Headers from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get('/api/v1/movies');
      console.log(response.data);
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);

    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
