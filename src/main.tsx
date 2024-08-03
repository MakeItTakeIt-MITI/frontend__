import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Home } from "./pages/Home.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./app/routes/auth/Login.tsx";
import { Signup } from "./app/routes/auth/Signup.tsx";
import { NotFoundPage } from "./app/routes/NotFoundPage.tsx";
import { GameDetails } from "./app/routes/games/GameDetails.tsx";
import { MatchSubmittedPage } from "./app/routes/MatchSubmittedPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { KakaoAuthHandler } from "./app/routes/auth/KakaoAuthHandler.tsx";
import { PrivateRoute } from "./app/routes/auth/PrivateRoute.tsx";
import { AuthenticateRoutes } from "./app/routes/auth/AuthenticateRoutes.tsx";
import { Profile } from "./app/routes/user/Profile.tsx";
import { EditProfile } from "./app/routes/user/EditProfile.tsx";
import { CustomerServicePage } from "./app/routes/support/CustomerServicePage.tsx";
import { UserInquiryPage } from "./app/routes/support/UserInquiryPage.tsx";
import { FAQPage } from "./app/routes/support/FAQPage.tsx";

import { HostGame } from "./app/routes/games/HostGame.tsx";
import { GameHostingHistory } from "./app/routes/games/GameHostingHistory.tsx";
import { MyGames } from "./app/routes/games/MyGames.tsx";
import { MobileViewItemsTab } from "./app/routes/MobileViewItemsTab.tsx";
import { JoinGame } from "./app/routes/games/JoinGame.tsx";
import { UserInquiryDetailPage } from "./app/routes/support/UserInquiryDetailPage.tsx";
import { EditGameDetails } from "./app/routes/games/EditGameDetails.tsx";
import { KakaoPaymentHandler } from "./app/routes/payment/KakaoPaymentHandler.tsx";
import { CancelParticipation } from "./app/routes/games/CancelParticipation.tsx";
import { ParticipationHistory } from "./app/routes/games/ParticipationHistory.tsx";
import { DeleteAccountPage } from "./app/routes/user/DeleteAccountPage.tsx";
import { DeleteAccountSuccessPage } from "./app/routes/user/DeleteAccountSuccessPage.tsx";
import { ReviewGame } from "./app/routes/games/ReviewGame.tsx";
import { PaymentDetail } from "./app/routes/payment/PaymentDetail.tsx";
import { BankTransferHistory } from "./app/routes/payment/BankTransferHistory.tsx";
import { BankTransaction } from "./app/routes/payment/BankTransaction.tsx";
import { PaymentHistory } from "./app/routes/payment/PaymentHistory.tsx";
import { SearchCourts } from "./app/routes/courts/SearchCourts.tsx";
import { CourtDetail } from "./app/routes/courts/CourtDetail.tsx";
import { WriteGuestReview } from "./app/routes/reviews/WriteGuestReview.tsx";
import { WriteHostReview } from "./app/routes/reviews/WriteHostReview.tsx";
import { ReviewDetailsAboutUser } from "./app/routes/reviews/ReviewDetailsAboutUser.tsx";
import { ReviewsAboutUser } from "./app/routes/reviews/ReviewsAboutUser.tsx";
import { ReviewsByUser } from "./app/routes/reviews/ReviewsByUser.tsx";
import { ReviewDetailByUser } from "./app/routes/reviews/ReviewDetailByUser.tsx";
import { FindEmailDisplayPage } from "./app/routes/auth/FindEmailDisplayPage.tsx";
import { FindPasswordPage } from "./app/routes/auth/FindPasswordPage.tsx";
import { FindPasswordResetPage } from "./app/routes/auth/FindPasswordResetPage.tsx";
import { FindEmailPage } from "./app/routes/auth/FindEmailPage.tsx";
import { NotVerifiedUserPage } from "./app/routes/auth/NotVerifiedUserPage.tsx";
import { NotVerifiedInputDetailPage } from "./app/routes/auth/NotVerifiedInputDetailPage.tsx";
import { SMSAuthenticationPage } from "./app/routes/auth/SMSAuthenticationPage.tsx";
import { SMSVerifiedSuccessPage } from "./app/routes/auth/SMSVerifiedSuccessPage.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/payments/kakao/approve",
        element: <KakaoPaymentHandler />,
      },
      {
        path: "faq",
        element: <FAQPage />,
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
            element: <Login />,
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
            path: "signup",
            element: <Signup />,
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
        path: "courts",
        children: [
          { path: "search", element: <SearchCourts /> },
          { path: "detail/:id", element: <CourtDetail /> },
        ],
      },

      {
        path: "/games",
        children: [
          {
            path: "detail/:id/:title",
            element: <GameDetails />,
          },

          {
            element: <PrivateRoute />,
            children: [
              { path: "host", element: <HostGame /> },

              {
                path: "detail/:id/edit",
                element: <EditGameDetails />,
              },
              {
                path: "detail/:id/review",
                element: <ReviewGame />,
              },
              {
                path: "detail/:id/review/guest/:ratingId",
                element: <WriteGuestReview />,
              },
              {
                path: "detail/:id/review/host/:ratingId",
                element: <WriteHostReview />,
              },
              {
                path: "detail/:id/:title/join",
                element: <JoinGame />,
              },
              {
                path: "my-games",
                element: <MyGames />,
              },

              {
                path: "host-history",
                element: <GameHostingHistory />,
              },
              {
                path: "guest-history",
                element: <ParticipationHistory />,
              },

              { path: "join/submitted", element: <MatchSubmittedPage /> },

              {
                path: "cancel-participation/:id",
                element: <CancelParticipation />,
              },
            ],
          },
        ],
      },

      {
        element: <PrivateRoute />,
        children: [
          {
            path: "reviews",
            children: [
              {
                path: "user-reviews",
                element: <ReviewsByUser />,
              },
              {
                path: "user-reviews/detail/:reviewId",
                element: <ReviewDetailByUser />,
              },
              {
                path: "my-reviews",
                element: <ReviewsAboutUser />,
              },
              {
                path: "my-reviews/detail/:reviewId",
                element: <ReviewDetailsAboutUser />,
              },
            ],
          },
          {
            path: "/user",
            children: [
              {
                path: "profile/edit",
                element: <EditProfile />,
              },
              {
                path: "profile",
                element: <Profile />,
              },

              {
                path: "inquiry",
                element: <UserInquiryPage />,
              },
              {
                path: "inquiry/detail/:id",
                element: <UserInquiryDetailPage />,
              },

              { path: "settlement-history", element: <PaymentHistory /> },
              {
                path: "settlement-history/detail/:settlement_id",
                element: <PaymentDetail />,
              },
              {
                path: "transaction-history",
                element: <BankTransferHistory />,
              },
              {
                path: "transaction-history/payment",
                element: <BankTransaction />,
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
