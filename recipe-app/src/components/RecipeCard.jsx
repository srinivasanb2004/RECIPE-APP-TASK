import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import '../styles/components/RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((fav) => fav.recipe.uri === recipe.recipe.uri);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  return (
    <div className="recipe-card">
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h3>{recipe.recipe.label}</h3>
      <p>{recipe.recipe.source}</p>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeCard;