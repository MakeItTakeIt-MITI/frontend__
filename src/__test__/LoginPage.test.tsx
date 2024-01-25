import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Tests DOM Rendering on User Login Page", () => {
  test("User Input Email Element exists", () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const emailEl = screen.getByPlaceholderText(/이메일을 입력해주세요./i);
    expect(emailEl).toBeVisible();
  });

  test("User Input Password Element exists", () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const passwordEl =
      screen.getByPlaceholderText(/8자리 이상의 PW를 입력해주세요./i);
    expect(passwordEl).toBeVisible();
  });
});
