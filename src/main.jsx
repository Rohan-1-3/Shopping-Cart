import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './components/routes.jsx'

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
