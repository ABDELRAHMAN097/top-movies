import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { favoriteMoviesState } from '../../Store/Fave';
import { useRecoilState } from 'recoil';
import { WOW } from "wowjs";
import { DotLoader  } from "react-spinners";


export default function NowPlayingMovies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useRecoilState(favoriteMoviesState);
  const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWJlZTViMGFiMmU1Y2Y2MmVjNzc3ZThkYjYwNTdmZSIsInN1YiI6IjY2NTVjNThlMzJjNGIwNTM1NWEzNmE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jFE5NZQk4EhObnSNIoVFWftCLNoLO7OOsc-z7baeZ7Y';
  const baseUrl = 'https://api.themoviedb.org/3';
  const nowPlayingMoviesEndpoint = `${baseUrl}/movie/now_playing`;
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
        if (response.data && response.data.results) {
          setter(response.data.results);
        } else {
          setter([]);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setter([]);
      }
    };
    fetchMovies(nowPlayingMoviesEndpoint, setNowPlayingMovies);
  }, [nowPlayingMoviesEndpoint, jwtToken]);

  const filteredMovies = showAll ? nowPlayingMovies : nowPlayingMovies.slice(0, 7);

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
  }, []);
  return (
    <div className="pt-3">
       {loading && ( 
      <div className="loading-overlay">
        <DotLoader  color={"rgb(255, 0, 0)"} loading={loading} size={250} className="loading-spinner" />
      </div>
    )}
       <div className='d-flex align-items-center gap-2 my-3 wow animate__animated animate__jello animate__delay-1s 1s	animate__slow	0.5s'>
     <Link className='fs-3 text-white' to="/">Home</Link>
      <span className='fs-3 '>/</span>
      <h3>Now Playing Movies</h3>
     </div>
      {!showAll ? (
        <Swiper 
          slidesPerView={5} 
          spaceBetween={30} 
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {Array.isArray(nowPlayingMovies) && nowPlayingMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <SwiperSlide className='h-auto col-6 col-sm-4 col-md-2 mb-4' key={movie.id}>
              <div className="card card-info wow animate__animated animate__fadeInUpBig">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body text-center w-100">
                  <p className='rating p-3'>{movie.vote_average.toFixed(1)}</p>
                  <h5 className="card-title pt-2">{movie.title}</h5>
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
            </SwiperSlide>
            ))
          ) : (
            <p className='found'>No movies found.</p>
          )}
        </Swiper>
      ) : (
        <div className="row">
          {filteredMovies.map(movie => (
            <div className='col-6 col-sm-4 col-md-2 mb-4' key={movie.id}>
              
            <div className="card card-info">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                className="card-img-top" 
                alt={movie.title} 
              />
              <div className="card-body text-center">
                <p className='rating p-3'>{movie.vote_average.toFixed(1)}</p>
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
          ))}
        </div>
      )}
      {nowPlayingMovies.length > 7 && (
        <button className="btn btn-primary mb-3" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}
