// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { UserLoginPage } from "./pages/UserLoginPage.tsx";
import { UserSignup } from "./pages/UserSignup.tsx";
import { GameHostContainer } from "./pages/GameHostContainer.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { MatchDetailsPage } from "./pages/MatchDetailsPage.tsx";
import { UserJoinMatchPage } from "./pages/UserJoinMatchPage.tsx";
import { MatchSubmittedPage } from "./pages/MatchSubmittedPage.tsx";
import { SMSAuthenticationPage } from "./pages/SMSAuthenticationPage.tsx";
import { UserMyPage } from "./pages/UserMyPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { KakaoAuthHandler } from "./components/forms/KakaoAuthHandler.tsx";
import { UserGamesListPage } from "./pages/UserGamesListPage.tsx";
import { PrivateRoute } from "./pages/PrivateRoute.tsx";
import { AuthenticateRoutes } from "./pages/AuthenticateRoutes.tsx";
import { ManageParticipantsPage } from "./pages/games/ManageParticipantsPage.tsx";
import { FindUserInfoPage } from "./pages/user/FindUserInfoPage.tsx";
import { UserLoginPageV2 } from "./pages/user/UserLoginPageV2.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },

      {
        path: "/auth",
        element: <AuthenticateRoutes />,

        children: [
          {
            path: "login",
            element: <UserLoginPage />,
            // element: <UserLoginPageV2 />,
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
        path: "/find-user-info",
        element: <FindUserInfoPage />,
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
              // { path: "history", element: <UserGameHistoryPage /> },

              {
                path: "detail/:id",
                element: <MatchDetailsPage />,
                children: [],
              },

              {
                path: "detail/:id/join",
                element: <UserJoinMatchPage />,
              },
              {
                path: "detail/:id/manage_participants",
                element: <ManageParticipantsPage />,
              },
              {
                path: "mygames/:id",
                element: <UserGamesListPage />,
              },

              { path: "join/submitted", element: <MatchSubmittedPage /> },
            ],
          },
        ],
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
