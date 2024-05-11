import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import AddAFood from "../pages/addAFood/AddAFood";
import MyAddedFood from "../pages/myAddedFood/MyAddedFood";
import Update from "../pages/update/Update";
import AllFoods from "../pages/allFoods/AllFoods";
import Detail from "../pages/detail/Detail";
import FoodPurchase from "../pages/foodPurchase/FoodPurchase";
import PrivateRoute from "./privateRoute/PrivateRoute";
import MyPurchase from "../pages/myPurchase/MyPurchase";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'addAFood',
          element:<AddAFood></AddAFood>
        },
        {
          path:'/myAddedFoods',
          element:<MyAddedFood></MyAddedFood>
        },
        {
          path:'/myPurchase',
          element:<MyPurchase></MyPurchase>
        },
        {
          path:'/update/:id',
          element:<Update></Update>
        },
        {
          path:'/allFoods',
          element:<AllFoods></AllFoods>
        },
        {
          path:'/detail/:id',
          element:<Detail></Detail>,
          loader:({params})=>fetch(`http://localhost:5000/detail/${params.id}`)
        },
        {
          path:'/foodPurchase/:id',
          element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/detail/${params.id}`)
        }
      ]
    },
  ]);