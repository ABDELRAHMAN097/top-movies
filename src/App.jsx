import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import Item from './pages/Items/Items.js';
import Details from "./pages/Details/Details.jsx";
import TopRatedMovies from "./Components/TopRatedMovies/TopRatedMovies.jsx";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies.jsx";
import PopularMovies from "./Components/PopularMovies/PopularMovies.jsx";
import NowPlayingMovies from "./Components/NowPlayingMovies/NowPlayingMovies.jsx";
import MyLibrary from './pages/MyLibrary/MyLibrary.jsx';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <div className="App">
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Items" element={<Item />} />
          <Route path="MyLibrary" element={<MyLibrary />} />
          <Route path="TopRatedMovies" element={<TopRatedMovies />} />
          <Route path="UpcomingMovies" element={<UpcomingMovies />} />
          <Route path="PopularMovies" element={<PopularMovies />} />
          <Route path="NowPlayingMovies" element={<NowPlayingMovies />} />
          <Route path="movie/:id" element={<Details />} />
          <Route path="*" element={"Page 404"} />
        </Routes>
        <Outlet />
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
