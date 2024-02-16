import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import Accommodations from './routes/Accommodations.jsx'
import Attractions from './routes/Attractions.jsx'
import Transportations from './routes/Transportations.jsx'
import PlanningTools from './routes/PlanningTools.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "accommodations",
    element: <Accommodations/>,
  },
  {
    path: "attractions",
    element: <Attractions/>,
  },
  {
    path: "transportation",
    element: <Transportations/>,
  },
  {
    path: "planning-tools",
    element: <PlanningTools/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
