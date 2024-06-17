import React from 'react';
import { Link } from 'react-router-dom';
import './MyLibrary.scss';
import { useRecoilState } from 'recoil';
import { favoriteMoviesState } from '../../Store/Fave';
import { ImBin } from "react-icons/im";
export default function MyLibrary() {

  const [favorites, setFavorites] = useRecoilState(favoriteMoviesState);
  const toggleFavorite = (movie) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(fav => fav.id === movie.id)) {
        return prevFavorites.filter(fav => fav.id !== movie.id);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  return (
    <div className="container pt-3">
      <div className='d-flex align-items-center gap-2 my-3'>
      <Link className='fs-3 text-white' to="/">Home</Link>
      <span className='fs-3'>/</span>
      <h3 className="">Favorite Movies</h3>
      </div>
      <div className="row">
        {Array.isArray(favorites) && favorites.length > 0 ? (
          favorites.map(movie => (
            <div className='col-6 col-sm-4 col-md-2 mb-4' key={movie.id}>
            <div className="card card-info film-card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className=" text-center d-flex flex-column">
                <p className='rating'>{movie.vote_average.toFixed(1)}</p>
                <div className='info w-100 d-flex flex-column justify-content-between flex-grow-1'>
                  <h5 className="card-title pt-2">{movie.title}</h5>
                  <div className='d-flex align-items-center gap-3 mt-auto'>
                    <Link to={`/movie/${movie.id}`} className="w-100">
                      <button className='btn btn-primary w-100 d-flex justify-content-center align-items-center fs-7'>details</button>
                    </Link>
                    <button className='btn btn-danger w-100 d-flex justify-content-center align-items-center fs-7' onClick={() => toggleFavorite(movie)}>
                      <ImBin className='fs-7'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          ))
        ) : (
          <p className='found'>No favorite movies found.</p>
        )}
      </div>
    </div>
  );
}
