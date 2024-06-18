import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { CiHeart } from 'react-icons/ci';

export default function Nav() {

  return (
    <div className='nav-container  w-100 d-flex justify-content-between align-items-center px-3 py-3'>
      <div className='nav-links py-2 d-flex justify-content-between align-items-center gap-2 animate__animated animate__fadeInRight animate__slow	0.3s'>
        <li>
          <Link className='nav-brand fs-3 text-black fw-bold text-white' to="/">
            <span className='text-danger'>Top</span> Movies
          </Link>
        </li>
        <li>
          <Link className='text-white m-3' to="/">Home</Link>
        </li>
        <li>
        <Link className='text-white' to="/MyLibrary"> <CiHeart className='fs-4'/>Favorites</Link>
        </li>
        <li>
          <Link className='text-white m-3' to="/Contact">Contact</Link>
        </li>
      </div>
    </div>
  );
}
