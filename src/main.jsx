import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import {  HelmetProvider } from 'react-helmet-async';

import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Components/Routes/Route';
import AuthProvider from './Components/provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router } />
  </AuthProvider>
  </React.StrictMode>,
)
