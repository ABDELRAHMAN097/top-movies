import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWJlZTViMGFiMmU1Y2Y2MmVjNzc3ZThkYjYwNTdmZSIsInN1YiI6IjY2NTVjNThlMzJjNGIwNTM1NWEzNmE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jFE5NZQk4EhObnSNIoVFWftCLNoLO7OOsc-z7baeZ7Y';
  const baseUrl = 'https://api.themoviedb.org/3';
  const popularMoviesEndpoint = `${baseUrl}/movie/popular`;

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
  }, [popularMoviesEndpoint, jwtToken]);

  const filteredMovies = showAll ? popularMovies : popularMovies.slice(0, 7);

  return (
    <div className="container pt-3">
      <h3 className="pb-3">Popular Movies</h3>
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
          {Array.isArray(popularMovies) && popularMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <SwiperSlide key={movie.id}>
               
                  <div className="card card-info wow animate__animated animate__fadeInUpBig">
                    <img 
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                      className="card-img-top" 
                      alt={movie.title} 
                    />
                    <div className="card-body text-center">
                      <p className='rating'>{movie.vote_average.toFixed(1)}</p>
                      <h5 className="card-title fs-6 w-100 text-center pt-2">{movie.title}</h5>
                      <Link to={`/movie/${movie.id}`}>
                       <button className='w-100 btn btn-primary'>details</button>
                    </Link>
                    </div>
                  </div>
             
              </SwiperSlide>
            ))
          ) : (
            <p>No movies found.</p>
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
                    <p className='rating'>{movie.vote_average.toFixed(1)}</p>
                    <h5 className="card-title fs-6 w-100 text-center pt-2">{movie.title}</h5>
                    <Link to={`/movie/${movie.id}`}>
                       <button className='w-100 btn btn-primary'>details</button>
                    </Link>
                  </div>
                </div>
             
            </div>
          ))}
        </div>
      )}
      {popularMovies.length > 7 && (
        <button className="btn btn-primary mb-3" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}