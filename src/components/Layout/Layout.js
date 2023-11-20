import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import classes from './Layout.module.scss';

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
