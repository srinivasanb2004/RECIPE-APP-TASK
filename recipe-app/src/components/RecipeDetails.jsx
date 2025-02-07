import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="recipe-details">
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.recipe.url}</p>
    </div>
  );
};

export default RecipeDetails;