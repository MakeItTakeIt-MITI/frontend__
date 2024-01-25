import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../../components/main/Header";
import useAuthStore from "../../store/useAuthStore";

describe("Tests <Header /> DOM Rendering on isLoggedIn State", () => {
  test("Are all elements present on the Header when user is not logged in?", () => {
    useAuthStore.setState({ isLoggedIn: false });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const createGames = screen.queryByText(/경기 만들기/i);
    const loginEl = screen.queryByText(/로그인/i);
    const signupEl = screen.queryByText(/회원가입/i);
    const logo = screen.getByAltText("miti logo");
    fireEvent.click(logo);

    expect(createGames).toBeVisible();
    expect(loginEl).toBeVisible();
    expect(signupEl).toBeVisible();
    expect(window.location.pathname).toBe("/");
  });

  test("Are all elements present on the Header when user is logged in?", () => {
    useAuthStore.setState({ isLoggedIn: true });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const createGames = screen.queryByText(/경기 만들기/i);
    const myPageEl = screen.queryByText(/마이페이지/i);
    const logoutEl = screen.queryByText(/로그아웃/i);
    const logo = screen.getByAltText("miti logo");
    fireEvent.click(logo);

    expect(createGames).toBeVisible();
    expect(myPageEl).toBeVisible();
    expect(logoutEl).toBeVisible();
    expect(window.location.pathname).toBe("/");
  });
});
