import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipes } from '../redux/recipesSlice';
import "../styles/components/FilterOptions.css";

const FilterOptions = () => {
  const [filters, setFilters] = useState({});
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    dispatch(fetchRecipes({ query: '', filters }));
  };

  return (
    <div className="filter-options">
      <select name="diet" onChange={handleFilterChange}>
        <option value="">Select Diet</option>
        <option value="balanced">Balanced</option>
        <option value="high-protein">High Protein</option>
        <option value="low-carb">Low Carb</option>
      </select>
      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;