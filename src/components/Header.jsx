import RecipeManagementLogo from "/src/assets/recipe-management.png";

export default function Header() {
  return (
    <div id="header">
      <img src={RecipeManagementLogo} alt="Recipe Management Logo" />
      <h1>Recipe Management</h1>
    </div>
  );
}
