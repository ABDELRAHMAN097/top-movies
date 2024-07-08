import React, { useEffect, useState } from 'react';
import './Home.scss';
import UpcomingMovies from '../../Components/UpcomingMovies/UpcomingMovies';
import PopularMovies from '../../Components/PopularMovies/PopularMovies';
import TopRatedMovies from '../../Components/TopRatedMovies/TopRatedMovies';
import NowPlayingMovies from '../../Components/NowPlayingMovies/NowPlayingMovies';
import avatar from '../../assets/avatar_PNG9.png';
import Nav from '../../Nav/Nav';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { favoriteMoviesState } from '../../Store/Fave';
import { useRecoilState } from 'recoil';
import { WOW } from "wowjs";
import { InfinitySpin } from 'react-loader-spinner';

export default function HomePage() {
  const [favorites, setFavorites] = useRecoilState(favoriteMoviesState);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(false); // State to handle loading
  const [initialLoading, setInitialLoading] = useState(true); // State to handle initial loading
  const apiKey = "11bee5b0ab2e5cf62ec777e8db6057fe"

  const handleSearch = async () => {
    setLoading(true); // Start loading
    setError(null); // Reset any previous errors
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: apiKey,
          query: searchTerm,
          language: 'en-US',
        },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setError(error); // Set error state to handle and display error messages
      setSearchResults([]); // Clear search results on error
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleFavorite = (movie) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(fav => fav.id === movie.id)) {
        return prevFavorites.filter(fav => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
    // Simulate initial loading (e.g., fetching initial data)
    setTimeout(() => {
      setInitialLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  if (initialLoading) {
    return (
      <div className="text-center my-5">
        <InfinitySpin
          visible={true}
          width="200"
          color="#111"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }

  return (
    <div className="home text-start w-100">
      <div className='hero w-100 text-center'>
        <Nav className='nav' />
        <Parallax
          bgImage={avatar}
          strength={500}
          className="avatar-parallax pt-5"
        >
          <div className='avatar-container w-100 text-center'>
          </div>
        </Parallax>
        <div className='filter w-100'>
         
        </div>
      </div>

      <div className="container w-100 mt-5">
        <div className="pt-3">
          <h2 className="my-3 wow animate__animated animate__jello animate__delay-1s 1s animate__slow 0.5s">Search Movies</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleChange}
            />
            <button className="btn btn-outline-secondary" type="button" onClick={handleSearch}>
              Search
            </button>
          </div>

          {loading ? (
            <div className="text-center my-5">
              <InfinitySpin
                visible={true}
                width="200"
                color="#111"
                ariaLabel="infinity-spin-loading"
              />
            </div>
          ) : (
            <div className="row">
              {error ? (
                <p>Error fetching search results. Please try again later.</p>
              ) : searchResults.length > 0 ? (
                searchResults.map(movie => (
                  <div className='col-6 col-sm-4 col-md-2 mb-4' key={movie.id}>
                    <div className="card card-info">
                      <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        className="card-img-top" 
                        alt={movie.title} 
                      />
                      <div className="card-body text-center">
                        <p className='rating'>{movie.vote_average.toFixed(1)}</p>
                        <h5 className="card-title fs-6 w-100 text-center pt-2">{movie.title}</h5>
                        <div className='button-container'>
                          <Link to={`/movie/${movie.id}`}>
                            <button className='btn btn-success'>details</button>
                          </Link>
                          <button className='btn btn-danger' onClick={() => toggleFavorite(movie)}>
                            {favorites.some(fav => fav.id === movie.id) ? 'Unlike' : 'Like'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className='found'>No movies found.</p>
              )}
            </div>
          )}
        </div>

        <UpcomingMovies />
        <NowPlayingMovies />
        <TopRatedMovies />
        <PopularMovies />
      </div>
    </div>
  );
}
