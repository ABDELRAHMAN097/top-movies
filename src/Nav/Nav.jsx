import React, { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';
import { CiHeart } from 'react-icons/ci';

export default function Nav() {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className='nav-container w-100 d-flex justify-content-between align-items-center px-3 py-3'>
      <div className='nav-links d-flex justify-content-between align-items-center gap-5 '>
        <li>
          <Link className='nav-brand text-black fw-bold text-white fs-2' to="/">
            <span className='text-danger'>Top</span> Movies
          </Link>
        </li>
        <li>
          <Link className='text-white' to="/">Home</Link>
        </li>
        <li>
        <Link className='text-white' to="/MyLibrary"> <CiHeart className='fs-4'/>Favorites</Link>
        </li>
        <li>
          <Link className='text-white' to="/Items">Contact</Link>
        </li>
      </div>
      <div className='search-container text-end'>
        <ImSearch className='search-icon mx-3 text-white' onClick={toggleInput} />
        {showInput && (
          <input
            className='text-white'
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        )}
      </div>
    </div>
  );
}
