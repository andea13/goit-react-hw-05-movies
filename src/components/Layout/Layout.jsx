import { Suspense, lazy } from 'react';
import React from 'react';
import { Outlet } from 'react-router-dom';
const Header = lazy(() => import('../Header/Header'));

const Layout = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <Outlet />
    </>
  );
};

export default Layout;
