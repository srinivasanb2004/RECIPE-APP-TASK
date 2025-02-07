import React from 'react';
import FavoritesList from '../components/FavoritesList';

const Favorites = () => {
  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      <FavoritesList />
    </div>
  );
};

export default Favorites;