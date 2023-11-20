import { Link, useParams } from 'react-router-dom';

const RecipeDetailsPage = () => {
  const params = useParams();
  return (
    <h1>
      Recipe Details!
      <p>{params.id}</p>
      <p>
        <Link to='..' relative='path'>
          Back
        </Link>
      </p>
    </h1>
  );
};
export default RecipeDetailsPage;
