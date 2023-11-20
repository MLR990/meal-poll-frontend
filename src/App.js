import './App.css';
import Layout from './components/Layout/Layout';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Recipes from './pages/Recipes';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/Error';
import RecipeDetailsPage from './components/Recipe/RecipeDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'recipes',
        element: <Recipes />,
        loader: async () => {
          const response = await fetch('http://localhost:5000/api/v1/recipe');

          if (!response.ok) {
            //ERROR
          } else {
            const data = await response.json();

            return data.data.recipes;
          }
        },
      },
      { path: 'recipes/:id', element: <RecipeDetailsPage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <Layout>

    //   {/* <button onClick={toggleRecipes}>Show them thangs!</button>
    //   <div> Suck it bebbey!</div>
    //   <div> Open the box you pussy!</div>
    //   {showRecipes && <RecipeList />} */}
    // </Layout>
  );
}

export default App;
