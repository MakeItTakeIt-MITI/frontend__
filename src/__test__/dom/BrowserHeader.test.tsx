import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { BrowserHeader } from "../../components/header/BrowserHeader";

function handleLogoutMock(): void {
  throw new Error("Function not implemented.");
}

describe("Tests <BrowserHeader /> DOM Rendering when user is logged/not logged in.", () => {
  test("Are all elements present on the BrowserHeader when user is not logged in?", () => {
    useAuthStore.setState({ isLoggedIn: false });

    render(
      <MemoryRouter>
        <BrowserHeader handleLogout={handleLogoutMock} />
      </MemoryRouter>
    );

    const createGamesEl = screen.queryByText(/경기 만들기/i);
    const loginEl = screen.queryByText(/로그인/i);
    const signupEl = screen.queryByText(/회원가입/i);
    const logo = screen.getByAltText("miti logo");

    expect(createGamesEl).toBeVisible();
    expect(loginEl).toBeVisible();
    expect(signupEl).toBeVisible();
    expect(logo).toBeVisible();
  });

  test("Are all elements present on the BrowserHeader when user is logged in?", () => {
    useAuthStore.setState({ isLoggedIn: true });

    render(
      <MemoryRouter>
        <BrowserHeader handleLogout={handleLogoutMock} />
      </MemoryRouter>
    );

    const createGames = screen.queryByText(/경기 만들기/i);
    const myPageEl = screen.queryByText(/마이페이지/i);
    const logoutEl = screen.queryByText(/로그아웃/i);
    const logo = screen.getByAltText("miti logo");

    expect(createGames).toBeVisible();
    expect(myPageEl).toBeVisible();
    expect(logoutEl).toBeVisible();
    expect(logo).toBeVisible();
  });
});

// test("Is the path correctly set on <Header /> (Router) when isLoggedIn is false", async () => {
//   useAuthStore.setState({ isLoggedIn: false });

//   render(
//     <MemoryRouter>
//       <BrowserHeader handleLogout={handleLogoutMock} />
//     </MemoryRouter>
//   );

//   const loginEl = screen.getByText("로그인");
//   const signupEl = screen.getByText("회원가입");
//   const createGameEl = screen.getByText("경기 만들기");
//   const logo = screen.getByAltText("miti logo");
//   const findGamesEl = screen.getByText("빠른 배칭");

//   fireEvent.click(loginEl);
//   await waitFor(() => {
//     expect(window.location.pathname).toBe("/login");
//   });
//   fireEvent.click(signupEl);
//   await waitFor(() => {
//     expect(window.location.pathname).toBe("/signup");
//   });
//   fireEvent.click(createGameEl);
//   await waitFor(() => {
//     expect(window.location.pathname).toBe("/operate");
//   });
//   fireEvent.click(findGamesEl);
//   await waitFor(() => {
//     expect(window.location.pathname).toBe("/");
//   });

//   fireEvent.click(logo);
//   expect(window.location.pathname).toContain("/");
// });
