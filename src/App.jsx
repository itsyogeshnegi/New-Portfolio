import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Components/Common/Header';
import LandingPage from './Components/Pages/LandingPage';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      }
    ]
  }
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
