import React from 'react';
import './Home.scss';
import UpcomingMovies from '../../Components/UpcomingMovies/UpcomingMovies';
import PopularMovies from '../../Components/PopularMovies/PopularMovies';
import TopRatedMovies from '../../Components/TopRatedMovies/TopRatedMovies';
import NowPlayingMovies from '../../Components/NowPlayingMovies/NowPlayingMovies';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home text-start w-100">
     <div className='d-flex mx-20 gap-5 text-center w-100'>
     <h1 className="pb-2">Home</h1>
      <button className='btn btn-info py-0'>
        <Link to= "/TopRatedMovies" >TopRatedMovies</Link>
      </button>
     </div>
      <div className="container ">
        <UpcomingMovies />
        <NowPlayingMovies />
        <TopRatedMovies />
        <PopularMovies />
      </div>
    </div>
  );
}
