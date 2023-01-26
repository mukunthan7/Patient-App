import App from "./App";
import Admin from "./Admin";
import AdminHome from "./pages/AdminPage";
import PatientHistory from "./pages/PatientHistory"
import OutPatientEntry from "./pages/OutPatientEntry"
import PatientLogin from "./pages/patientLogin";
import PatientRegister from "./pages/patientRegister";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import PatientHome from "./pages/patientHome";
import Patient from "./Patient";

import { createBrowserRouter } from "react-router-dom";
import AppointmetPage from "./pages/AppointmetPage";

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <PatientLogin />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
      {
        path: "/register",
        element: <PatientRegister />,
      },
    ],
  },
  {
    element: <Admin />,
    children: [
        {
            path: "/admin",
            element: <AdminHome />
        },
        {
            path: "/admin/appointment",
            element: <AppointmetPage />
        },
        {
            path: "/admin/history",
            element: <PatientHistory />
        },
        {
            path: "/admin/entry",
            element: <OutPatientEntry />
        }
    ]
  },
  {
    element: <Patient />,
    children: [
        {
            path: "/patient",
            element: <PatientHome />
        },
        {
            
        }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);
