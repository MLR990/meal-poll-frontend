import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';
import classes from './RecipeList.module.scss';
import { Link, useLoaderData } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useLoaderData();

  return (
    <section className={classes.products}>
      <h2>Family Recipes</h2>
      <ul>
        {recipes.map((product) => (
          <Link to={`${product.id}`}>
            <RecipeCard
              key={product.id}
              title={product.name}
              price={product.rating}
              id={product.id}
              description={product.description}
            />
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default RecipeList;
