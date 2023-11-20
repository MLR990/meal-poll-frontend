import { NavLink } from 'react-router-dom';
import classes from './MainHeader.module.scss';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=''
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='recipes'
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Recipes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
