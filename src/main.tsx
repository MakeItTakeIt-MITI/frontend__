import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage.tsx";
import { UserLoginPage } from "./pages/auth/UserLoginPage.tsx";
import { UserSignupPage } from "./pages/auth/UserSignupPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { GameDetailPage } from "./pages/games/GameDetailPage.tsx";
import { MatchSubmittedPage } from "./pages/MatchSubmittedPage.tsx";
import { SMSAuthenticationPage } from "./pages/auth/SMSAuthenticationPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { KakaoAuthHandler } from "./components/forms/KakaoAuthHandler.tsx";
import { PrivateRoute } from "./pages/PrivateRoute.tsx";
import { AuthenticateRoutes } from "./pages/AuthenticateRoutes.tsx";
import { FindEmailPage } from "./pages/auth/FindEmailPage.tsx";
import { UserMyPage } from "./pages/user/UserMyPage.tsx";
import { EditProfilePage } from "./pages/user/EditProfilePage.tsx";
import { CustomerServicePage } from "./pages/user/CustomerServicePage.tsx";
import { UserInquiryPage } from "./pages/user/UserInquiryPage.tsx";
import { FAQPage } from "./pages/user/FAQPage.tsx";
import { UserReviewListPage } from "./pages/user/UserReviewListPage.tsx";
import { MyReviewDetailPage } from "./pages/user/MyReviewDetailPage.tsx";
import { UserReviewsPage } from "./pages/user/UserReviewsPage.tsx";
import { SignupIntroPage } from "./pages/auth/SignupIntroPage.tsx";
import { SMSVerifiedSuccessPage } from "./pages/auth/SMSVerifiedSuccessPage.tsx";
import { FindPasswordPage } from "./pages/auth/FindPasswordPage.tsx";
import { FindPasswordResetPage } from "./pages/auth/FindPasswordResetPage.tsx";
import { FindEmailDisplayPage } from "./pages/auth/FindEmailDisplayPage.tsx";
import { HostGamePage } from "./pages/games/HostGamePage.tsx";
import { HostGameHistoryPage } from "./pages/games/HostGameHistoryPage.tsx";
import { MyGamesPage } from "./pages/games/MyGamesPage.tsx";
import { NotVerifiedUserPage } from "./pages/auth/NotVerifiedUserPage.tsx";
import { NotVerifiedInputDetailPage } from "./pages/auth/NotVerifiedInputDetailPage.tsx";
import { MobileViewItemsTab } from "./pages/MobileViewItemsTab.tsx";
import { GameJoinPage } from "./pages/games/GameJoinPage.tsx";
import { UserInquiryDetailPage } from "./pages/user/UserInquiryDetailPage.tsx";
import { GameDetailEditPage } from "./pages/games/GameDetailEditPage.tsx";
import { FindCourtsPage } from "./pages/court/FindCourtsPage.tsx";
import { KakaoPaymentHandler } from "./pages/games/KakaoPaymentHandler.tsx";
import { GameCancelParticipationPage } from "./pages/games/GameCancelParticipationPage.tsx";
import { GameParticipationHistoryPage } from "./pages/games/GameParticipationHistoryPage.tsx";
import { CourtDetailPage } from "./pages/court/CourtDetailPage.tsx";
import { PaymentHistoryPage } from "./pages/payments/PaymentHistoryPage.tsx";
import { TransactionHistoryPage } from "./pages/payments/TransactionHistoryPage.tsx";
import { DeleteAccountPage } from "./pages/auth/DeleteAccountPage.tsx";
import { DeleteAccountSuccessPage } from "./pages/auth/DeleteAccountSuccessPage.tsx";
import { GameReviewPage } from "./pages/games/GameReviewPage.tsx";
import { PostGuestReviewPage } from "./pages/reviews/PostGuestReviewPage.tsx";
import { PostHostReviewPage } from "./pages/reviews/PostHostReviewPage.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/payments/kakao/approve",
        element: <KakaoPaymentHandler />,
      },
      {
        path: "/account",
        children: [
          {
            path: "delete",
            element: <DeleteAccountPage />,
          },
          {
            path: "delete/success",
            element: <DeleteAccountSuccessPage />,
          },
        ],
      },

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
            path: "sms-authentication",
            element: <SMSAuthenticationPage />,
          },
          {
            path: "sms-authentication-verified",
            element: <SMSVerifiedSuccessPage />,
          },
          {
            path: "signup-option",
            element: <SignupIntroPage />,
          },
          {
            path: "signup",
            element: <UserSignupPage />,
          },

          {
            path: "oauth/kakao/login",
            element: <KakaoAuthHandler />,
          },
        ],
      },
      {
        path: "/support",
        children: [
          {
            path: "faq",
            element: <FAQPage />,
          },

          {
            path: "customer-service",
            element: <CustomerServicePage />,
          },

          {
            path: "find-email",
            element: <FindEmailPage />,
          },
          {
            path: "user-info-email",
            element: <FindEmailDisplayPage />,
          },
          {
            path: "find-password",
            element: <FindPasswordPage />,
          },
          {
            path: "reset-password",
            element: <FindPasswordResetPage />,
          },
        ],
      },

      {
        path: "/mobile-tab",
        element: <MobileViewItemsTab />,
      },

      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/user",
            children: [
              {
                path: "profile/edit",
                element: <EditProfilePage />,
              },
              {
                path: "profile",
                element: <UserMyPage />,
              },

              {
                path: "inquries",
                element: <UserInquiryPage />,
              },
              {
                path: "inquries/detail/:id",
                element: <UserInquiryDetailPage />,
              },

              {
                path: "reviews",
                element: <UserReviewsPage />,
              },
              {
                path: "my-reviews",
                element: <UserReviewListPage />,
              },
              { path: "my-reviews/detail", element: <MyReviewDetailPage /> },
              { path: "settlement-history", element: <PaymentHistoryPage /> },
              {
                path: "transaction-history",
                element: <TransactionHistoryPage />,
              },
            ],
          },
          {
            path: "/games",
            children: [
              { path: "host", element: <HostGamePage /> },

              {
                path: "detail/:id",
                element: <GameDetailPage />,
              },

              {
                path: "detail/:id/edit",
                element: <GameDetailEditPage />,
              },
              {
                path: "detail/:id/review",
                element: <GameReviewPage />,
              },
              {
                path: "detail/:id/review/guest/:ratingId",
                element: <PostGuestReviewPage />,
              },
              {
                path: "detail/:id/review/host/:ratingId",
                element: <PostHostReviewPage />,
              },
              {
                path: "detail/:id/join",
                element: <GameJoinPage />,
              },
              {
                path: "my-games",
                element: <MyGamesPage />,
              },

              {
                path: "host-history",
                element: <HostGameHistoryPage />,
              },
              {
                path: "guest-history",
                element: <GameParticipationHistoryPage />,
              },

              { path: "join/submitted", element: <MatchSubmittedPage /> },
              {
                path: "courts",
                children: [
                  { path: "search", element: <FindCourtsPage /> },
                  { path: "detail/:id", element: <CourtDetailPage /> },
                ],
              },
              {
                path: "cancel-participation/:id",
                element: <GameCancelParticipationPage />,
              },
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
