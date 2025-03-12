import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeListPage from "../pages/RecipeListPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <RecipeListPage /> },
      { path: "recipe/:id", element: <RecipeDetailPage /> }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
