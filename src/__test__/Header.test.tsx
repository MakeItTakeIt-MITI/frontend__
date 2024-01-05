import { Header } from "../components/main/Header";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("경기 만들기 버튼에 헤더에 존재한다.", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const createGames = screen.queryByText(/경기 만들기/i);
  expect(createGames).toBeVisible();
});

test("로그인 텍스트가 헤더에 존재한다.", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const loginEl = screen.queryByText(/로그인/i);
  expect(loginEl).toBeVisible();
});
test("회원가입 텍스트가 헤더에 존재한다.", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const signupEl = screen.queryByText(/회원가입/i);
  expect(signupEl).toBeVisible();
});

test("회원가입 텍스트가 헤더에 존재한다.", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const signupEl = screen.queryByText(/회원가입/i);
  expect(signupEl).toBeVisible();
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
