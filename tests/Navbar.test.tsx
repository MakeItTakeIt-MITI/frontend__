import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MobileNavbar from "../src/components/navigation/MobileNavbar";
import BrowserNavbar from "../src/components/navigation/BrowserNavbar";

const setWindowWidth = (width: number) => {
  global.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("MobileNavbar responsiveness", () => {
  it("should render MobileNavbar on screens smaller than 600px", () => {
    setWindowWidth(599);
    render(
      <MemoryRouter>
        <MobileNavbar />
      </MemoryRouter>
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByAltText("hamburger")).toBeInTheDocument();
  });

  it("should not render MobileNavbar, but BrowserNavbar on screens 600px or wider", () => {
    setWindowWidth(800);

    render(
      <MemoryRouter>
        <BrowserNavbar />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("logo");
    const games = screen.queryByRole("link", { name: /경기 목록/i });
    const courts = screen.queryByRole("link", { name: /경기장/i });
    const faq = screen.queryByRole("link", { name: /FAQ/i });

    expect(games).toBeInTheDocument();
    expect(courts).toBeInTheDocument();
    expect(faq).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(screen.queryByAltText("hamburger")).not.toBeInTheDocument();
  });
});
