import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignupForm } from "../../src/components/ui/forms/SignupForm";

const queryClient = new QueryClient();

describe("Signup Form", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <SignupForm />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("Form should render email, nickname, password, password_confirm, name, birthday, phone input fields, and submit button  ", () => {
    const email = screen.getByTestId("email-input");
    const nickname = screen.getByTestId("nickname-input");
    const password = screen.getByTestId("password-input");
    const password_confirm = screen.getByTestId("password-check-input");
    const name = screen.getByTestId("name-input");
    const birthday = screen.getByTestId("birthday-input");
    const phone = screen.getByTestId("phone-input");
    const submitButton = screen.getByRole("button", { name: /가입하기/i });

    expect(email).toBeInTheDocument();
    expect(nickname).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(password_confirm).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(birthday).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Submit button should be disabled when input fields have no value", () => {
    const email = screen.getByTestId("email-input") as HTMLInputElement;
    const nickname = screen.getByTestId("nickname-input") as HTMLInputElement;
    const password = screen.getByTestId("password-input") as HTMLInputElement;
    const password_confirm = screen.getByTestId(
      "password-check-input"
    ) as HTMLInputElement;
    const name = screen.getByTestId("name-input") as HTMLInputElement;
    const birthday = screen.getByTestId("birthday-input") as HTMLInputElement;
    const phone = screen.getByTestId("phone-input") as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: /가입하기/i });

    expect(email.value).toBe("");
    expect(nickname.value).toBe("");
    expect(password.value).toBe("");
    expect(password_confirm.value).toBe("");
    expect(name.value).toBe("");
    expect(birthday.value).toBe("");
    expect(phone.value).toBe("");

    expect(submitButton).toBeDisabled();
  });

  it("Submit button should be disabled when password and password_confirm do not match", () => {
    const password = screen.getByTestId("password-input") as HTMLInputElement;
    const password_confirm = screen.getByTestId(
      "password-check-input"
    ) as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: /가입하기/i });

    fireEvent.change(password, { target: { value: "password123" } });
    fireEvent.change(password_confirm, { target: { value: "password456" } });

    expect(password.value).toBe("password123");
    expect(password_confirm.value).toBe("password456");
    expect(submitButton).toBeDisabled();
  });

  it("Checks input validations", () => {
    const email = screen.getByTestId("email-input") as HTMLInputElement;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    fireEvent.change(email, { target: { value: "test" } });

    expect(email.value).toBe("test");
    expect(emailPattern.test(email.value)).toBe(false);
  });
});
