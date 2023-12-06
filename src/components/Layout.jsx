import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBarMenu } from './AppBar';

export const Layout = () => {
  return (
    <div
      style={{
        display: 'block',
        width: 1000,
        margin: '0 auto',
      }}
    >
      <AppBarMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
