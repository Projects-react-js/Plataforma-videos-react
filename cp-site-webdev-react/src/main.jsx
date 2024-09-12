import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx'
import './index.css'

import Sobre from '../src/Pages/Sobre.jsx'
import Contato from '../src/Pages/Contato.jsx'
import PageNotFound from './Pages/PageNotFound.jsx';

import ConteudoPrincipal from './Components/ConteudoPrincipal/index.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <ConteudoPrincipal/>},
      {path: 'sobre', element: <Sobre/>},
      {path: 'contato', element: <Contato/>},
      {path: '*', element: <PageNotFound/>}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
