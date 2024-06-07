import { MemoryRouter } from "react-router-dom";
import BrowserHeader from "../../src/components/header/BrowserHeader";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("Render navigation bar when user is logged in", () => {
    const isLoggedIn = true;
    render(
      <MemoryRouter>
        <BrowserHeader isLoggedIn={isLoggedIn} />
      </MemoryRouter>
    );

    const logoutButton = screen.queryByRole("button", { name: /로그아웃/i });
    const profileLink = screen.queryByRole("link", { name: /내 정보/i });

    expect(logoutButton).toBeInTheDocument();
    expect(profileLink).toBeInTheDocument();
  });

  it("Render navigation bar when user is not logged in", () => {
    const isLoggedIn = false;
    render(
      <MemoryRouter>
        <BrowserHeader isLoggedIn={isLoggedIn} />
      </MemoryRouter>
    );

    const loginButton = screen.queryByRole("link", { name: /로그인/i });
    const signupButton = screen.queryByRole("link", { name: /회원가입/i });

    expect(loginButton).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });
});
