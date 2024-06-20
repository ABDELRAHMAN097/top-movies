import React from 'react';
import { Link } from 'react-router-dom';
import './MyLibrary.scss';
import { useRecoilState } from 'recoil';
import { favoriteMoviesState } from '../../Store/Fave';
import { ImBin } from "react-icons/im";

export default function MyLibrary() {
  const [favorites, setFavorites] = useRecoilState(favoriteMoviesState);
  const removeFavorite = (movie) => {
    setFavorites(prevFavorites => {
      const updatedFavorites = prevFavorites.filter(fav => fav.id !== movie.id);
      return updatedFavorites;
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
              <div className="card card-info">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  className="card-img-top" 
                  alt={movie.title} 
                />
                <div className="card-body text-center">
                  <p className='rating p-3'>{movie.vote_average.toFixed(1)}</p>
                  <h5 className="card-title fs-6 w-100 text-center pt-2">{movie.title}</h5>
                  <div className='button-container'>
                    <Link to={`/movie/${movie.id}`}>
                      <button className='btn btn-success'>Details</button>
                    </Link>
                    <button className='btn btn-danger py-2' onClick={() => removeFavorite(movie)}>
                      <ImBin/>
                    </button>
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
