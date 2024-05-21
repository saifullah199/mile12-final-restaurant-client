import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Order/Order";
import Login from "../Pages/SignUp/Login";
import Register from "../Pages/SignUp/Register";
import Secret from "../Pages/Secret";
import Dashboard from "../MainLayout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path:'/menu',
          element: <Menu/>
        },
        {
          path:"/order/:category",
          element: <Order/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path:"/secret",
          element: <Secret/>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard/>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);

  export default router