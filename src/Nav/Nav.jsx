import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { Link } from 'react-router-dom';
import './Nav.scss';
import { CiHeart } from 'react-icons/ci';

export default function Nav() {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  

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
          <Link className='text-white m-3' to="/Items">Contact</Link>
        </li>
      </div>
      <div className='search-container text-end'>
        <ImSearch className='search-icon fs-4 mx-3 text-white animate__animated animate__fadeInRight animate__slow	1s' onClick={toggleInput} />
        {showInput && (
          <input
            className='text-white animate__animated animate__fadeInRight animate__slow	0.3s'
            type='text'
          />
        )}
      </div>
    </div>
  );
}
