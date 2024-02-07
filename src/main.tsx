import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { UserLogin } from "./pages/UserLogin.tsx";
import { UserSignup } from "./pages/UserSignup.tsx";
import { GameHostContainer } from "./pages/GameHostContainer.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { MatchDetailsPage } from "./pages/MatchDetailsPage.tsx";
import { UserJoinMatchPage } from "./pages/UserJoinMatchPage.tsx";
import { MatchSubmittedPage } from "./pages/MatchSubmittedPage.tsx";
import { SMSAuthenticationPage } from "./pages/SMSAuthenticationPage.tsx";
import { UserMyPage } from "./pages/UserMyPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { KakaoAuthHandler } from "./components/auth/KakaoAuthHandler.tsx";
import { UserGamesListPage } from "./pages/UserGamesListPage.tsx";
import { PrivateRoute } from "./pages/PrivateRoute.tsx";
import { AuthenticateRoutes } from "./pages/AuthenticateRoutes.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/user",
        element: <AuthenticateRoutes />,

        children: [
          {
            path: "login",
            element: <UserLogin />,
          },
          {
            path: "signup",
            element: <UserSignup />,
          },
          {
            path: "kakao",
            element: <KakaoAuthHandler />,
          },
        ],
      },

      {
        path: "/sms-authentication",
        element: <SMSAuthenticationPage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/profile/:id",
            element: <UserMyPage />,
          },
          {
            path: "/games",
            children: [
              { path: "host", element: <GameHostContainer /> },
              {
                path: "detail/:id",
                element: <MatchDetailsPage />,
              },
              {
                path: "detail/:id/join",
                element: <UserJoinMatchPage />,
              },
              {
                path: "mygames/:id",
                element: <UserGamesListPage />,
              },
            ],
          },
        ],
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
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
