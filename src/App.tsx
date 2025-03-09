import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <AnimeList /> },
      { path: "/:id", element: <AnimeDetail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
