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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";


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
      element:  <PrivateRoute> <Dashboard/> </PrivateRoute>,
      children:[
        // normal user routes
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        // admin only routes
        {
          path: 'addItems',
          element: <AddItems/>
        },
        {
          path: 'allusers',
          element: <AdminRoute> <AllUsers/> </AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <UpdateItem/>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`) 
        },
        {
          path: 'manageItems',
          element: <ManageItems/>
        }
      ]
    }
  ]);

  export default router