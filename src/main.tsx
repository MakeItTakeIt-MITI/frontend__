import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Home } from "./pages/Home.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GameDetail from "./pages/GameDetail.tsx";
import Courts from "./pages/Courts.tsx";
import Faq from "./pages/Faq.tsx";
import CourtsDetail from "./pages/CourtsDetail.tsx";
import React from "react";
import NotFound from "./pages/NotFound.tsx";
import Landing from "./pages/Landing.tsx";
import PrivateInquiry from "./pages/PrivateInquiry.tsx";
import InquiriesList from "./pages/Inquiries.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      // { path: "/", element: <Home /> },

      {
        path: "game",

        children: [
          { path: "list", element: <Home /> },
          { path: ":id", element: <GameDetail /> },
        ],
      },
      {
        path: "courts",
        children: [
          { path: ":id", element: <CourtsDetail /> },
          { path: "list", element: <Courts /> },
        ],
      },
      {
        path: "support",
        children: [
          { path: "faq", element: <Faq /> },
          { path: "inquiry/new", element: <PrivateInquiry /> },
          { path: "inquiry", element: <InquiriesList /> },
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
