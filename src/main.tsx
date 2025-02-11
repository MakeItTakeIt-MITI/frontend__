// eslint-disable-next-line import/extensions
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CurrentGames } from "./pages/CurrentGames.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GameDetail from "./pages/GameDetail.tsx";
import Courts from "./pages/Courts.tsx";
import Faq from "./pages/Faq.tsx";
import React from "react";
import NotFound from "./pages/NotFound.tsx";
import Landing from "./pages/Landing.tsx";
import PrivateInquiry from "./pages/PrivateInquiry.tsx";
import InquiriesList from "./pages/Inquiries.tsx";
import Policies from "./pages/Policies.tsx";
import PoliciesDetails from "./pages/PoliciesDetails.tsx";
import InquiryDetail from "./pages/InquiryDetail.tsx";
import CourtGamesList from "./pages/CourtGamesList.tsx";
import { GamesList } from "./pages/GamesList.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },

      {
        path: "games",

        children: [
          { path: "", element: <CurrentGames /> },
          { path: "all", element: <GamesList /> },
          { path: ":id", element: <GameDetail /> },
        ],
      },
      {
        path: "courts",

        children: [
          { path: "", element: <Courts /> },
          { path: ":id", element: <CourtGamesList /> },
        ],
      },
      { path: `faq/category/:categoryId`, element: <Faq /> },
      {
        path: "inquiries",
        children: [
          { path: "", element: <InquiriesList /> },
          { path: "new", element: <PrivateInquiry /> },
          { path: ":id", element: <InquiryDetail /> },
        ],
      },

      {
        path: "policies",
        children: [
          { path: "", element: <Policies /> },
          { path: ":id", element: <PoliciesDetails /> },
        ],
      },
      { path: "*", element: <NotFound /> },
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
