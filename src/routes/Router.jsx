import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeListPage from "../pages/RecipeListPage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <RecipeListPage /> }]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
