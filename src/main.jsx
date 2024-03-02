import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Dashboard from "./routes/dashboard/dashboard";
import SignIn from "./routes/sign-in/sign-in";
import SignUp from "./routes/sign-up/sign-up";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Index</h1>,
  },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: <h1>Dashboard Index</h1> },
      { path: "applications", element: <h1>Applications Page</h1> },
      { path: "companies", element: <h1>Companies Page</h1> },
      { path: "contacts", element: <h1>Contacts Page</h1> },
    ],
  },
]);

const theme = {
  blue: "#2E9BFF",
  darkBlue: "#0082FA",
  black: "#393939",
  white: "#fcfcfc",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
