import { MemoryRouter } from "react-router-dom";
import { LoginForm } from "../../src/components/ui/forms/LoginForm";
import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Login Form", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("Form should render email, password, and login button", () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByRole("button", { name: /로그인 하기/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Should disable button when email and password have no value", () => {
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: /로그인 하기/i });

    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");

    expect(submitButton).toBeDisabled();
  });

  it("Tests email input and password input regex validation", () => {
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Test123!@#" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(emailPattern.test(emailInput.value)).toBe(true);
    expect(passwordInput.value).toBe("Test123!@#");
    expect(passwordPattern.test(passwordInput.value)).toBe(true);
  });
});
