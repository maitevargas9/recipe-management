import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import dataRecipes from "../../data/recipes.json" with { type: "json" };
import "./Favorites.css";

export default function Favorites() {
  const [favoritesData, setFavoritesData] = useState([]);
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritesData(savedFavorites);
    setRecipesData(dataRecipes || []);
  }, []);
    
  const favoriteRecipes = recipesData.filter(recipe =>
    favoritesData.includes(recipe.id)
  );

  return (
    <div className="favorites-container">
      <div className="favorite-recipe-list">
        {favoriteRecipes.length === 0
          ? <p className="no-favorites">No matching favorites found.</p>
          : <ul className="favorite-recipes-list">
              {favoriteRecipes.map(recipe =>
                <li key={recipe.id} className="favorite-recipe-item">
                  <NavLink
                    to={`/recipe/${recipe.id}`}
                    className="favorite-recipe-link"
                  >
                    {recipe.title}
                  </NavLink>
                </li>
              )}
            </ul>}
      </div>
    </div>
  );
}
