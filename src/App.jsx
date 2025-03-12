import { useState } from 'react';
import RecipeManagementLogo from "./assets/recipe-management.png";
import './App.css';

function App() {
  return (
    <>
      <div>
        <img src={RecipeManagementLogo} alt="Recipe Management logo" />
      </div>
      <h1>Recipe Management</h1>
    </>
  )
}

export default App;
