import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav.tsx";
import App from "./App.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Contact from "./components/Contact.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Game from "./components/Game/Game.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <App />
      </>
    ),
    errorElement: (
      <>
        <Nav />
        <ErrorPage />
      </>
    ),
  },
  {
    path: "contact",
    element: (
      <>
        <Contact />
      </>
    ),
  },
  {
    path: "game",
    element: (
      <>
        <Game />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
