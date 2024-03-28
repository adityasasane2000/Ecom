import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/components/ProductList';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetail from './features/product-list/components/ProductDetail';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { useEffect } from 'react'
import PageNotFound from './pages/PageNotFound'
import OrderSucessPage from './pages/OrderSucessPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home></Home></Protected>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element: <Protected><CheckoutPage></CheckoutPage></Protected>,
  },
  {
    path: "/product-detail/:id",
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
  {
    path: "/order-success/:id",
    element: <OrderSucessPage></OrderSucessPage>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  },
]);


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch,user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
