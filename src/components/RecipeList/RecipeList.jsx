import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import dataRecipes from "../../data/recipes.json" with { type: "json" };
import "./RecipeList.css";

export default function RecipeList() {
  const [search, setSearch] = useState("");
  const [category, setCategories] = useState("All Categories");
  const [ingredients, setIngredients] = useState("All Ingredients");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(dataRecipes || []);
  }, []);
  
  function stringToArray(value) {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value !== "string") return []; 
    return value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
  }

  const allCategories = ["All Categories", ...new Set(recipes.flatMap((r) => stringToArray(r.category)))];
  const allIngredients = ["All Ingredients", ...new Set(recipes.flatMap((r) => stringToArray(r.ingredients)))];

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeIngredients = Array.isArray(recipe.ingredients)
      ? recipe.ingredients
      : stringToArray(recipe.ingredients);

    const recipeCategories = Array.isArray(recipe.category)
      ? recipe.category
      : stringToArray(recipe.category);

    const matchesCategory =
      category === "All Categories" || recipeCategories.includes(category);

    const matchesIngredient =
      ingredients === "All Ingredients" || recipeIngredients.includes(ingredients);

    const matchesSearch =
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipeCategories.some((cat) =>
        cat.toLowerCase().includes(search.toLowerCase())
      ) ||
      recipeIngredients.some((ingredient) =>
        ingredient.toLowerCase().includes(search.toLowerCase())
      );

    return matchesCategory && matchesIngredient && matchesSearch;
  });

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
            placeholder="Search by category or ingredient..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            className="search-input"
        />
        <select
            onChange={e => setCategories(e.target.value)}
            value={category}
            className="filter-select"
        >
            {allCategories.map(item =>
            <option key={item} value={item}>
                {item}
            </option>
            )}
        </select>
        <select
            onChange={e => setIngredients(e.target.value)}
            value={ingredients}
            className="filter-select"
        >
            {allIngredients.map(item =>
            <option key={item} value={item}>
                {item}
            </option>
            )}
        </select>
      </div>
      <ul className="recipe-list">
        {filteredRecipes.length > 0
          ? <ul className="recipe-list">
              {filteredRecipes.map((recipe, index) =>
                <li key={index} className="recipe-item">
                  <NavLink to={`/recipe/${recipe.id}`} className="recipe-link">
                    {recipe.title}
                  </NavLink>
                </li>
              )}
            </ul>
          : <p className="no-list">No recipes found.</p>}
      </ul>
    </div>
  );
}
