import { render, screen } from "@testing-library/react";
import { LoginForm } from "../components/forms/LoginForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

test("button should be disabled if the form is empty", () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    </QueryClientProvider>
  );

  // const emailInputEl = screen.getByRole("user-email-input");
  // const passwordInputEl = screen.getByRole("user-password-input");
  // const loginButtonEl = screen.getByRole("user-login-btn");

  expect(screen.getByRole("user-login-btn")).toBeDisabled();

  //   fireEvent.change(emailInputEl, { target: { value: "" } });
  //   fireEvent.change(passwordInputEl, { target: { value: "" } });

  //   expect(loginButtonEl).toBeDisabled();

  //   fireEvent.change(emailInputEl, { target: { value: "test@test.co" } });
  //   fireEvent.change(passwordInputEl, { target: { value: "Test123!@#" } });

  //   expect(loginButtonEl).not.toBeDisabled();
});
