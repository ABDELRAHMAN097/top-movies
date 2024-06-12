import React from 'react';
import HomePage from "./pages/HomePage/HomePage.jsx"
import Item from './pages/Items/Items.js'
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Details from "./pages/Details/Details.jsx";
import TopRatedMovies from "./Components/TopRatedMovies/TopRatedMovies.jsx";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies.jsx";
import PopularMovies from "./Components/PopularMovies/PopularMovies.jsx";
import NowPlayingMovies from "./Components/NowPlayingMovies/NowPlayingMovies.jsx";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage/>} />
            <Route path="Items" element={<Item />} />
            <Route path="/TopRatedMovies" element={<TopRatedMovies/>} />
            <Route path="/UpcomingMovies" element={<UpcomingMovies/>} />
            <Route path="/PopularMovies" element={<PopularMovies/>} />
            <Route path="/NowPlayingMovies" element={<NowPlayingMovies/>} />
            <Route path="/movie/:id" element={<Details/>} />
            <Route path="*" element={"Page 404"} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}

export default App;


// axios("http://localhost:3000/users").then((data) => console.log(data.data))
// axios.post("http://localhost:3000/users" , {name:"roro"}).then((data) => console.log(data.data))


