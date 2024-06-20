import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import Contact from './pages/Contact/Contact.js';
import Details from "./pages/Details/Details.jsx";
import TopRatedMovies from "./Components/TopRatedMovies/TopRatedMovies.jsx";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies.jsx";
import PopularMovies from "./Components/PopularMovies/PopularMovies.jsx";
import NowPlayingMovies from "./Components/NowPlayingMovies/NowPlayingMovies.jsx";
import MyLibrary from './pages/MyLibrary/MyLibrary.jsx';
import { RecoilRoot } from 'recoil';
import Footer from './Footer/Footer.jsx';

function App() {

  return (
    <div className="App">
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="MyLibrary" element={<MyLibrary />} />
          <Route path="TopRatedMovies" element={<TopRatedMovies />} />
          <Route path="UpcomingMovies" element={<UpcomingMovies />} />
          <Route path="PopularMovies" element={<PopularMovies />} />
          <Route path="NowPlayingMovies" element={<NowPlayingMovies />} />
          <Route path="movie/:id" element={<Details />} />
          <Route path="*" element={"Page 404"} />
        </Routes>
        <Footer className="footer"/>
        <Outlet />
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
