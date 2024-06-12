import React, { useEffect, useState } from "react";
import axios from "axios";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWJlZTViMGFiMmU1Y2Y2MmVjNzc3ZThkYjYwNTdmZSIsInN1YiI6IjY2NTVjNThlMzJjNGIwNTM1NWEzNmE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jFE5NZQk4EhObnSNIoVFWftCLNoLO7OOsc-z7baeZ7Y';
  const baseUrl = 'https://api.themoviedb.org/3';

  const popularMoviesEndpoint = `${baseUrl}/movie/popular`;
  const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated`;
  const upcomingMoviesEndpoint = `${baseUrl}/movie/upcoming`;
  const nowPlayingMoviesEndpoint = `${baseUrl}/movie/now_playing`;

  useEffect(() => {
    const fetchMovies = async (endpoint, setter) => {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          },
          params: {
            language: 'en-US'
          }
        });
        if (response.data && response.data.results) {
          setter(response.data.results);
        } else {
          setter([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setter([]);
      }
    };

    fetchMovies(popularMoviesEndpoint, setPopularMovies);
    fetchMovies(topRatedMoviesEndpoint, setTopRatedMovies);
    fetchMovies(upcomingMoviesEndpoint, setUpcomingMovies);
    fetchMovies(nowPlayingMoviesEndpoint, setNowPlayingMovies);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-12">
      <h1>Popular Movies</h1>
      <div className="movies">
        {Array.isArray(popularMovies) && popularMovies.length > 0 ? (
          popularMovies.map(movie => (
            <div key={movie.id} className="movie">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>

      <h1>Top Rated Movies</h1>
      <div className="movies">
        {Array.isArray(topRatedMovies) && topRatedMovies.length > 0 ? (
          topRatedMovies.map(movie => (
            <div key={movie.id} className="movie">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>

      <h1>Upcoming Movies</h1>
      <div className="movies">
        {Array.isArray(upcomingMovies) && upcomingMovies.length > 0 ? (
          upcomingMovies.map(movie => (
            <div key={movie.id} className="movie">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>

      <h1>Now Playing Movies</h1>
      <div className="movies">
        {Array.isArray(nowPlayingMovies) && nowPlayingMovies.length > 0 ? (
          nowPlayingMovies.map(movie => (
            <div key={movie.id} className="movie">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
      
    </div>
  );
}

export default Movies;
