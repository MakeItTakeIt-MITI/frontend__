import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { UserLogin } from "./pages/UserLogin.tsx";
import { UserSignup } from "./pages/UserSignup.tsx";
import { GameOperate } from "./pages/GameOperate.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { GameInfoPage } from "./pages/GameInfoPage.tsx";
import { MatchingPage } from "./pages/MatchingPage.tsx";
import { MatchSubmittedPage } from "./pages/MatchSubmittedPage.tsx";
import { SMSAuthenticationPage } from "./pages/SMSAuthenticationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/signup",
        element: <UserSignup />,
      },
      {
        path: "/sms-authentication",
        element: <SMSAuthenticationPage />,
      },
      {
        path: "/operate",
        element: <GameOperate />,
      },
      {
        path: "/game",
        element: <GameInfoPage />,
      },
      {
        path: "/match",
        element: <MatchingPage />,
      },
      { path: "/submitted", element: <MatchSubmittedPage /> },
      {
        path: "/404",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
