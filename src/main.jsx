import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PagesRead from './Pages/PagesRead.jsx';
import GrandRamadan from './Pages/GrandRamadan.jsx';
import ListBook from './Pages/ListBook.jsx';
import Home from './Components/Home.jsx';
import Details from './Pages/Details.jsx';
import ReadBook from './Components/ReadBook.jsx';
import Wishlist from './Components/WishList.jsx';
import Cart from './Pages/Cart.jsx';
import Error from './Components/Error.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('/dataLoad.json'),
      },

      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: () => fetch('/dataLoad.json'),

      },
      {
        path: '/listbooks',
        element: <ListBook></ListBook>,
        children: [

          {
            index: true,
            element: <ReadBook></ReadBook>
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>
          }
        ]

      },

      {
        path: '/readpage',
        element: <PagesRead></PagesRead>
      },

      {
        path: '/cart',
        element: <Cart></Cart>

      },
      {
        path: '/grandramadan',
        element: <GrandRamadan></GrandRamadan>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
