import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/recipesSlice';
import SearchBar from '../components/SearchBar';
import FilterOptions from '../components/FilterOptions';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);

  useEffect(() => {
    dispatch(fetchRecipes({ query: 'pizza' }));
  }, [dispatch]);

  return (
    <div className="home">
      <SearchBar />
      <FilterOptions />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <RecipeList recipes={recipes} />}
      {status === 'failed' && <p>Error loading recipes.</p>}
    </div>
  );
};

export default Home;