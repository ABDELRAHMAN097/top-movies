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
      <div className='hero w-100 text-center justify-content-flex-end align-items-end'>
        <Nav className='nav' />
        <Parallax
          bgImage={avatar}
          strength={500}
          className="avatar-parallax pt-5"
        >
          <div className='avatar-container w-100 text-center'>
            <div className='filter w-100'>
            </div>
          </div>
        </Parallax>
      </div>
   
      <div className="container w-100 p-0">
        <UpcomingMovies />
        <NowPlayingMovies />
        <TopRatedMovies />
        <PopularMovies />
      </div>
    </div>
  );
}
