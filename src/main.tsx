import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Home } from "./pages/Home.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./app/routes/NotFoundPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { FAQPage } from "./app/routes/support/FAQPage.tsx";

import { KakaoPaymentHandler } from "./app/routes/payment/KakaoPaymentHandler.tsx";

import GameDetail from "./pages/GameDetail.tsx";

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
        path: "game/:id",
        element: <GameDetail />,
      },
      // {
      //   path: "/account",
      //   children: [
      //     {
      //       path: "delete",
      //       element: <DeleteAccountPage />,
      //     },
      //     {
      //       path: "delete/success",
      //       element: <DeleteAccountSuccessPage />,
      //     },
      //   ],
      // },

      // {
      //   path: "/auth",
      //   element: <AuthenticateRoutes />,

      //   children: [
      //     {
      //       path: "login",
      //       element: <Login />,
      //     },
      //     {
      //       path: "authenticate-user",
      //       element: <NotVerifiedUserPage />,
      //     },
      //     {
      //       path: "authenticate-user-info",
      //       element: <NotVerifiedInputDetailPage />,
      //     },

      //     {
      //       path: "sms-authentication",
      //       element: <SMSAuthenticationPage />,
      //     },
      //     {
      //       path: "sms-authentication-verified",
      //       element: <SMSVerifiedSuccessPage />,
      //     },
      //     {
      //       path: "signup",
      //       element: <Signup />,
      //     },

      //     {
      //       path: "oauth/kakao/login",
      //       element: <KakaoAuthHandler />,
      //     },
      //   ],
      // },
      // {
      //   path: "/support",
      //   children: [
      //     {
      //       path: "customer-service",
      //       element: <CustomerServicePage />,
      //     },

      //     {
      //       path: "find-email",
      //       element: <FindEmailPage />,
      //     },
      //     {
      //       path: "user-info-email",
      //       element: <FindEmailDisplayPage />,
      //     },
      //     {
      //       path: "find-password",
      //       element: <FindPasswordPage />,
      //     },
      //     {
      //       path: "reset-password",
      //       element: <FindPasswordResetPage />,
      //     },
      //   ],
      // },

      // {
      //   path: "/mobile-tab",
      //   element: <MobileViewItemsTab />,
      // },

      // {
      //   path: "courts",
      //   children: [
      //     { path: "search", element: <SearchCourts /> },
      //     { path: "detail/:id", element: <CourtDetail /> },
      //   ],
      // },

      // {
      //   path: "/games",
      //   children: [
      //     {
      //       path: "detail/:id/:title",
      //       element: <GameDetails />,
      //     },

      //     {
      //       element: <PrivateRoute />,
      //       children: [
      //         { path: "host", element: <HostGame /> },

      //         {
      //           path: "detail/:id/edit",
      //           element: <EditGameDetails />,
      //         },
      //         {
      //           path: "detail/:id/review",
      //           element: <ReviewGame />,
      //         },
      //         {
      //           path: "detail/:id/review/guest/:ratingId",
      //           element: <WriteGuestReview />,
      //         },
      //         {
      //           path: "detail/:id/review/host/:ratingId",
      //           element: <WriteHostReview />,
      //         },
      //         {
      //           path: "detail/:id/:title/join",
      //           element: <JoinGame />,
      //         },
      //         {
      //           path: "my-games",
      //           element: <MyGames />,
      //         },

      //         {
      //           path: "host-history",
      //           element: <GameHostingHistory />,
      //         },
      //         {
      //           path: "guest-history",
      //           element: <ParticipationHistory />,
      //         },

      //         { path: "join/submitted", element: <MatchSubmittedPage /> },

      //         {
      //           path: "cancel-participation/:id",
      //           element: <CancelParticipation />,
      //         },
      //       ],
      //     },
      //   ],
      // },

      // {
      //   element: <PrivateRoute />,
      //   children: [
      //     {
      //       path: "reviews",
      //       children: [
      //         {
      //           path: "user-reviews",
      //           element: <ReviewsByUser />,
      //         },
      //         {
      //           path: "user-reviews/detail/:reviewId",
      //           element: <ReviewDetailByUser />,
      //         },
      //         {
      //           path: "my-reviews",
      //           element: <ReviewsAboutUser />,
      //         },
      //         {
      //           path: "my-reviews/detail/:reviewId",
      //           element: <ReviewDetailsAboutUser />,
      //         },
      //       ],
      //     },
      // {
      //   path: "/user",
      //   children: [
      //     {
      //       path: "profile/edit",
      //       element: <EditProfile />,
      //     },
      //     {
      //       path: "profile",
      //       element: <Profile />,
      //     },

      //     {
      //       path: "inquiry",
      //       element: <UserInquiryPage />,
      //     },
      //     {
      //       path: "inquiry/detail/:id",
      //       element: <UserInquiryDetailPage />,
      //     },

      //     { path: "settlement-history", element: <PaymentHistory /> },
      //     {
      //       path: "settlement-history/detail/:settlement_id",
      //       element: <PaymentDetail />,
      //     },
      //     {
      //       path: "transaction-history",
      //       element: <BankTransferHistory />,
      //     },
      //     {
      //       path: "transaction-history/payment",
      //       element: <BankTransaction />,
      //     },
      //   ],
      // },
      //   ],
      // },

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
