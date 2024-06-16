import { atom } from 'recoil';

export const favoriteMoviesState = atom({
  key: 'favoriteMoviesState',
  default: [],
});