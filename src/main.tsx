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

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "game/:id",
        element: <GameDetail />,
      },
      {
        path: "courts",
        children: [
          { path: "", element: <Courts /> },
          { path: "detail", element: <CourtsDetail /> },
        ],
      },
      { path: "faq", element: <Faq /> },
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
