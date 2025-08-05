import * as React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import JobDeatils from "./components/JobDetails/JobDeatils.jsx";
import Home from "./components/Home/Home.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobDetails/:jobId',
        element: <JobDeatils></JobDeatils>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
