const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/installs",
      element: <Installs />,
      errorElement: <ErrorPage />
    }, 
    
  ]);

  export default Router;