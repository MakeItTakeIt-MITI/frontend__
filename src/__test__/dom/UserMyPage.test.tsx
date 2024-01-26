import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { UserMyPage } from "../../pages/UserMyPage";

test("Tests DOM elements on <UserMyPage />", () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <UserMyPage />
      </MemoryRouter>
    </QueryClientProvider>
  );

  const prevButtonEl = screen.getByRole("go-prev-button");
  const inputNicknameEl = screen.getByRole("input-nickname");
  const changeNickButtonEl = screen.getByRole("change-nickname");
  const inputPasswordEl = screen.getByRole("input-password");
  const inputConfirmPassEl = screen.getByRole("input-password-confirm");
  const changePassButtonEl = screen.getByRole("change-password");

  expect(prevButtonEl).toBeInTheDocument();
  expect(inputNicknameEl).toBeInTheDocument();
  expect(changeNickButtonEl).toBeInTheDocument();
  expect(inputPasswordEl).toBeInTheDocument();
  expect(inputConfirmPassEl).toBeInTheDocument();
  expect(changePassButtonEl).toBeInTheDocument();
});
