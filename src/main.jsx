import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import PagesRead from './Pages/PagesRead.jsx';
import EBooks from './Pages/EBooks.jsx';
import GrandRamadan from './Pages/GrandRamadan.jsx';
import ListBook from './Pages/ListBook.jsx';
// import Books from './Components/Books.jsx';
import Home from './Components/Home.jsx';
import Details from './Pages/Details.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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

      },

      {
        path: '/readpage',
        element: <PagesRead></PagesRead>
      },
      {
        path: '/ebooks',
        element: <EBooks></EBooks>

      },
      {
        path: '/grandramadan',
        element: <GrandRamadan></GrandRamadan>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
