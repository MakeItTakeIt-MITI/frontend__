import { MemoryRouter } from "react-router-dom";
import { LoginForm } from "../../src/components/ui/forms/LoginForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "../../src/app/routes/auth/Login";

const queryClient = new QueryClient();

describe("Checks if oAuth Button is loaded in the login page", () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </QueryClientProvider>
  );
  it("should render kakao login button", () => {
    const kakaoLogin = screen.getByTestId("kakao-button");
    expect(kakaoLogin).toBeInTheDocument();
  });
});

describe("Checks if UI is rendered when page is loaded in the Login form", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("should render email and password input field", () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  it("should render submit button ", () => {
    const submitButton = screen.getByRole("button", { name: /로그인 하기/i });
    expect(submitButton).toBeInTheDocument();
  });
});

describe("checks validation for login form email and password inputs", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("Should disable button when email and password have no value", async () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "" } });

    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  it("should validate email input with regex pattern", async () => {
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });

    await waitFor(() => {
      expect(emailInput.value).toBe("test@example.com");
    });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailPattern.test(emailInput.value)).toBe(true);

    const errorMessage = screen.queryByText("이메일 형식으로 입력해주세요.");
    await waitFor(() => expect(errorMessage).not.toBeInTheDocument());
  });

  it("should validate email input with false email regex pattern", async () => {
    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    fireEvent.change(emailInput, {
      target: { value: "test@example" },
    });

    await waitFor(() => {
      expect(emailInput.value).toBe("test@example");
    });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailPattern.test(emailInput.value)).toBe(false);

    const errorMessage = screen.queryByText("이메일 형식으로 입력해주세요.");
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });

  it("should validate password input with regex pattern", async () => {
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInput, { target: { value: "Test123!@#" } });

    await waitFor(() => {
      expect(passwordInput.value).toBe("Test123!@#");
    });

    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

    expect(passwordPattern.test(passwordInput.value)).toBe(true);
    const errorMessage = screen.queryByText("올바른 비밀번호 양식이 아니에요.");
    await waitFor(() => expect(errorMessage).not.toBeInTheDocument());
  });
  it("should validate password input with  false password regex pattern", async () => {
    const passwordInput = screen.getByTestId(
      "password-input"
    ) as HTMLInputElement;

    fireEvent.change(passwordInput, { target: { value: "Test123" } });

    await waitFor(() => {
      expect(passwordInput.value).toBe("Test123");
    });

    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
    expect(passwordPattern.test(passwordInput.value)).toBe(false);

    const errorMessage = screen.queryByText("올바른 비밀번호 양식이 아니에요.");
    await waitFor(() => expect(errorMessage).toBeInTheDocument());
  });

  it("should enable buttton when email and password has a value", async () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    fireEvent.change(emailInput, {
      target: { value: "test@example.com" },
    });

    fireEvent.change(passwordInput, { target: { value: "Test123!@#" } });

    await waitFor(() => expect(submitButton).toBeInTheDocument());
    await waitFor(() => expect(submitButton).toBeEnabled());
  });
});
