import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import dataRecipes from "../../data/recipes.json" with { type: "json" };
import "./RecipeDetail.css";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const recipe = recipes.find(r => r.id === id);

  useEffect(() => {
    setRecipes(dataRecipes || []);
  }, []);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="recipe-card">
      <p className="recipe-title">
        {recipe.title}
      </p>
      <p className="recipe-category">
        Category: {recipe.category}
      </p>
      <p className="ingredients-list">
        Ingredients: {recipe.ingredients}
      </p>
      <p className="preparation-text">
        Preparation: {recipe.preparation}
      </p>
    </div>
  );
}
