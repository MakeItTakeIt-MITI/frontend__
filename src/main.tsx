// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { UserLoginPage } from "./pages/auth/UserLoginPage.tsx";
import { UserSignup } from "./pages/auth/UserSignupPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { GameDetailPage } from "./pages/games/GameDetailPage.tsx";
import { ParticipateGamePage } from "./pages/games/ParticipateGamePage.tsx";
import { MatchSubmittedPage } from "./pages/MatchSubmittedPage.tsx";
import { SMSAuthenticationPage } from "./pages/auth/SMSAuthenticationPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { KakaoAuthHandler } from "./components/forms/KakaoAuthHandler.tsx";
import { PrivateRoute } from "./pages/PrivateRoute.tsx";
import { AuthenticateRoutes } from "./pages/AuthenticateRoutes.tsx";
import { ManageParticipantsPage } from "./pages/games/ManageParticipantsPage.tsx";
import { FindEmailPage } from "./pages/auth/FindEmailPage.tsx";
import { UserMyPage } from "./pages/user/UserMyPage.tsx";
import { EditProfilePage } from "./pages/user/EditProfilePage.tsx";
import { CustomerServicePage } from "./pages/user/CustomerServicePage.tsx";
import { MyQueryPage } from "./pages/user/MyQueryPage.tsx";
import { FAQPage } from "./pages/user/FAQPage.tsx";
import { MyReviewPage } from "./pages/user/MyReviewPage.tsx";
import { MyReviewDetailPage } from "./pages/user/MyReviewDetailPage.tsx";
import { UserReviewsPage } from "./pages/user/UserReviewsPage.tsx";
import { WrittenReviewDetailPage } from "./pages/user/WrittenReviewDetailPage.tsx";
import { SignupIntroPage } from "./pages/auth/SignupIntroPage.tsx";
import { SMSVerifiedSuccessPage } from "./pages/auth/SMSVerifiedSuccessPage.tsx";
import { FindPasswordPage } from "./pages/auth/FindPasswordPage.tsx";
import { FindPasswordResetPage } from "./pages/auth/FindPasswordResetPage.tsx";
import { FindEmailDisplayPage } from "./pages/auth/FindEmailDisplayPage.tsx";
import { FindEmailOAuthDisplayPage } from "./pages/auth/FindEmailOAuthDisplayPage.tsx";
import { HostGamePage } from "./pages/games/HostGamePage.tsx";
import { HostGameHistoryPage } from "./pages/games/HostGameHistoryPage.tsx";
import { GuestGameHistoryPage } from "./pages/games/GuestGameHistoryPage.tsx";
import { MyGamesPage } from "./pages/games/MyGamesPage.tsx";
import { NotVerifiedUserPage } from "./pages/auth/NotVerifiedUserPage.tsx";
import { NotVerifiedInputDetailPage } from "./pages/auth/NotVerifiedInputDetailPage.tsx";

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
          },
          {
            path: "authenticate-user",
            element: <NotVerifiedUserPage />,
          },
          {
            path: "authenticate-user-info",
            element: <NotVerifiedInputDetailPage />,
          },
          {
            path: "signup-option",
            element: <SignupIntroPage />,
          },
          {
            path: "signup",
            element: <UserSignup />,
          },
          {
            path: "oauth/kakao/login",
            element: <KakaoAuthHandler />,
          },
        ],
      },

      {
        path: "/sms-authentication",
        element: <SMSAuthenticationPage />,
      },
      {
        path: "/sms-authentication-verified",
        element: <SMSVerifiedSuccessPage />,
      },
      {
        path: "/find-email",
        element: <FindEmailPage />,
      },
      {
        path: "/user-info-email",
        element: <FindEmailDisplayPage />,
      },
      {
        path: "/user-info-oauth",
        element: <FindEmailOAuthDisplayPage />,
      },
      {
        path: "/find-password",
        element: <FindPasswordPage />,
      },
      {
        path: "/reset-password",
        element: <FindPasswordResetPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/my-reviews",
        element: <MyReviewPage />,
      },
      {
        path: "/users-reviews",
        element: <UserReviewsPage />,
      },
      {
        path: "/review/:id",
        element: <WrittenReviewDetailPage />,
      },
      {
        path: "/customer-service",
        element: <CustomerServicePage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/user-profile/edit",
            element: <EditProfilePage />,
          },
          {
            path: "/mypage",
            element: <UserMyPage />,
          },

          {
            path: "/user-query",
            element: <MyQueryPage />,
          },
          { path: "/my-reviews-detail", element: <MyReviewDetailPage /> },

          {
            path: "/games",
            children: [
              { path: "host", element: <HostGamePage /> },
              // { path: "history", element: <UserGameHistoryPage /> },

              {
                path: "detail/:id",
                element: <GameDetailPage />,
              },

              {
                path: "detail/:id/join",
                element: <ParticipateGamePage />,
              },
              {
                path: "my-games",
                element: <MyGamesPage />,
              },
              {
                path: "detail/:id/manage_participants",
                element: <ManageParticipantsPage />,
              },
              {
                path: "host-history",
                element: <HostGameHistoryPage />,
              },
              {
                path: "guest-history",
                element: <GuestGameHistoryPage />,
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
