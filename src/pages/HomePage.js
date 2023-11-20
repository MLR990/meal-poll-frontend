import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate('recipes');
  };
  return (
    <div>
      This is the home page
      <div>
        TEST
        <button onClick={navigationHandler}>Go to Recipes</button>
      </div>
    </div>
  );
};

export default HomePage;
