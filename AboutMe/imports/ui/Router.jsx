import Resume from "./Resume";
import Installs from "./Installs";
import Home from "./Home";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
        children: [
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
              {
                path: "/resume",
                element: <Resume />,
                errorElement: <ErrorPage />
              }, 
        ],

      errorElement: <ErrorPage />
        
    },
    ,
    
    
  ]);

  export default Router;