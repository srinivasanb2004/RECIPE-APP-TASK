import React from 'react';
import RecipeCard from './RecipeCard';
import { useSelector } from 'react-redux'; // Add this line

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites-list">
      {favorites.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default FavoritesList;