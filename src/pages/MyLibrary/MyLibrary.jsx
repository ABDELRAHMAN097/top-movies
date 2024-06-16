import React from 'react';
import { Link } from 'react-router-dom';
import './MyLibrary.scss';
import { useRecoilState } from 'recoil';
import { favoriteMoviesState } from '../../Store/Fave';
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
      <h3 className="pb-3">Favorite Movies</h3>
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
                  <p className='rating'>{movie.vote_average.toFixed(1)}</p>
                  <h5 className="card-title pt-2">{movie.title}</h5>
                  <Link to={`/movie/${movie.id}`}>
                    <button className='w-100 btn btn-primary'>details</button>
                  </Link>
                  <button className='btn btn-secondary mt-2' >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite movies found.</p>
        )}
      </div>
    </div>
  );
}
