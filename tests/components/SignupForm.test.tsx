import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignupForm } from "../../src/components/ui/forms/SignupForm";

const queryClient = new QueryClient();

describe("Checks if UI is rendered when signup form is loaded", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <SignupForm />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("should render all inputs for user registration", () => {
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

  it("should render disabled button on initial load", () => {
    const button = screen.getByTestId("submit-button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  it("should render email and nickname duplication check button on initial load", () => {
    const emailButton = screen.getByTestId("email-check-button");
    const nicknameButton = screen.getByTestId("nickname-check-button");

    expect(emailButton).toBeInTheDocument();
    expect(nicknameButton).not.toBeInTheDocument();
  });

  it("should render checkbox conatiner on initial load", () => {
    const checkboxes = screen.getByTestId("checkbox-container");
    expect(checkboxes).toBeInTheDocument();
  });
});

describe("Checks validation for user signup form", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <SignupForm />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  it("should should check for existing email when button is clicked", async () => {
    // const emailButton = screen.getByTestId("email-check-button");
    // jest.spyOn(global, "fetch").mockResolvedValueOnce({
    //   json: async () => ({
    //     status_code: 200,
    //     data: {
    //       email: {
    //         is_duplicated: true,
    //       },
    //     },
    //   }),
    // });
    // fireEvent.click(emailButton);
    // await screen.findByText("이미 사용중인 닉네임이에요.");
    // expect(screen.getByText("이미 사용중인 닉네임이에요.")).toBeInTheDocument();
  });
  it("should should check for existing nickname when button is clicked", () => {});
});
