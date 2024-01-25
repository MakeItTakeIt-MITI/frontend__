import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { SignupForm } from "../../components/auth/SignupForm";
import "@testing-library/jest-dom";

describe("Tests DOM Rendering on User Signup Page", () => {
  test("Are all elements present on the Signup Form Page?", () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <SignupForm />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const emailEl = screen.getByPlaceholderText(/이메일을 입력해주세요./i);
    const password = screen.getByPlaceholderText(/비밀번호를 입력해주세요./i);
    const password_check =
      screen.getByPlaceholderText(/비밀번호를 한번 더 입력해주세요./i);
    const name = screen.getByPlaceholderText(/이름을 입력해주세요./i);
    const nickname = screen.getByPlaceholderText(/닉네임을 입력해주세요./i);
    const phone = screen.getByPlaceholderText(
      /'-'을 제외한 휴대폰번호를 입력해주세요./i
    );
    const birthday = screen.getByRole("user-birthday");
    const submit = screen.getByRole("submit");

    expect(emailEl).toBeVisible();
    expect(password).toBeVisible();
    expect(password_check).toBeVisible();
    expect(name).toBeVisible();
    expect(nickname).toBeVisible();
    expect(phone).toBeVisible();
    expect(birthday).toBeVisible();
    expect(submit).toBeVisible();
  });

  test("User Signup Data submitted in correct JSON format?", () => {});
});
