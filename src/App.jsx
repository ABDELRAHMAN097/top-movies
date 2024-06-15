import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import Item from './pages/Items/Items.js';
import Details from "./pages/Details/Details.jsx";
import TopRatedMovies from "./Components/TopRatedMovies/TopRatedMovies.jsx";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies.jsx";
import PopularMovies from "./Components/PopularMovies/PopularMovies.jsx";
import NowPlayingMovies from "./Components/NowPlayingMovies/NowPlayingMovies.jsx";
import MyLibrary from './pages/MyLibrary/MyLibrary.jsx';

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find(fav => fav.id === movie.id)) {
        return prevFavorites.filter(fav => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Items" element={<Item />} />
          <Route path="MyLibrary" element={<MyLibrary favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="TopRatedMovies" element={<TopRatedMovies />} />
          <Route path="UpcomingMovies" element={<UpcomingMovies favorites={favorites} toggleFavorite={toggleFavorite} />} />
          <Route path="PopularMovies" element={<PopularMovies />} />
          <Route path="NowPlayingMovies" element={<NowPlayingMovies />} />
          <Route path="movie/:id" element={<Details />} />
          <Route path="*" element={"Page 404"} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;
