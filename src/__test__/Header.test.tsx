import { Header } from "../components/main/Header";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("경기 만들기 버튼에 헤더에 존재한다.", () => {
  //   render(<Header />);
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const createGames = screen.queryByText(/경기 만들기/i);
  expect(createGames).toBeVisible();
});

test("MITI 이미지를 클릭하면 '/'로 이동한다.", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const logo = screen.getByAltText("miti logo");
  fireEvent.click(logo);

  expect(window.location.pathname).toBe("/");
});

// test("clicking on the 로그인 navigates to '/login'", () => {
//   render(
//     <MemoryRouter>
//       <Header />
//     </MemoryRouter>
//   );

//   const loginText = screen.getByText(/로그인/i);
//   fireEvent.click(loginText);

//   expect(window.location.pathname).toBe("/login");
// });

// test("clicking on the 회원가입 navigates to '/signup'", () => {
//   render(
//     <MemoryRouter>
//       <Header />
//     </MemoryRouter>
//   );

//   const signupText = screen.getByText(/회원가입/i);
//   fireEvent.click(signupText);

//   expect(window.location.pathname).toBe("/signup");
// });
