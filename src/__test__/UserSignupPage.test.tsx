import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { UserSignup } from "../pages/auth/UserSignup";

test("Are all elements present on the Signup Form Page?", () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <UserSignup />
      </MemoryRouter>
    </QueryClientProvider>
  );

  const prevButtonEl = screen.getByRole("prev-btn");
  const mitiLogo = screen.getByRole("miti-logo");
  const signupInputEl = screen.getByRole("input-email");
  const passwordInputEl = screen.getByRole("input-password");
  const passCheckInputEl = screen.getByRole("input-password-check");
  const nicknameInputEl = screen.getByRole("input-nickname");
  const nameInputEl = screen.getByRole("input-name");
  const validateEmailButtonEl = screen.getByRole("validate-email");
  const validateNickButtonEl = screen.getByRole("validate-nickname");
  const submitButtonEl = screen.getByRole("submit");

  expect(prevButtonEl).toBeInTheDocument();
  expect(mitiLogo).toBeInTheDocument();
  expect(signupInputEl).toBeInTheDocument();
  expect(validateEmailButtonEl).toBeInTheDocument();
  expect(validateNickButtonEl).toBeInTheDocument();
  expect(passwordInputEl).toBeInTheDocument();
  expect(passCheckInputEl).toBeInTheDocument();
  expect(nicknameInputEl).toBeInTheDocument();
  expect(nameInputEl).toBeInTheDocument();
  expect(submitButtonEl).toBeInTheDocument();
});
