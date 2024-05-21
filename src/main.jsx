import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
        
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
