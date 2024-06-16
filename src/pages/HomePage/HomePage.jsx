import React from 'react';
import './Home.scss';
import UpcomingMovies from '../../Components/UpcomingMovies/UpcomingMovies';
import PopularMovies from '../../Components/PopularMovies/PopularMovies';
import TopRatedMovies from '../../Components/TopRatedMovies/TopRatedMovies';
import NowPlayingMovies from '../../Components/NowPlayingMovies/NowPlayingMovies';
import avatar from '../../assets/avatar_PNG9.png';
import Nav from '../../Nav/Nav';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

export default function HomePage() {
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
              <Link to= "/UpcomingMovies"> 
              <button className='btn btn-info'>Upcoming</button>
              </Link>
              <Link to= "/PopularMovies"> 
              <button className='btn btn-info'>Popular</button>
              </Link>
              <Link to= "/TopRatedMovies"> 
              <button className='btn btn-info'>TopRated</button>
              </Link>
              <Link to= "/NowPlayingMovies"> 
              <button className='btn btn-info'>NowPlaying</button>
              </Link>
            </div>
      </div>
   
      <div className="container w-100 p-0 mt-5">
        <UpcomingMovies />
        <NowPlayingMovies />
        <TopRatedMovies />
        <PopularMovies />
      </div>
    </div>
  );
}
