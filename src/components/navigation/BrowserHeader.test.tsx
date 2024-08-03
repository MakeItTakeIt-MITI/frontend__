import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import BrowserNavbar from "./BrowserHeader";

describe("Browser Header", () => {
  render(
    <MemoryRouter>
      <BrowserNavbar />
    </MemoryRouter>
  );
  it("Render all nav items", () => {
    const logo = screen.getByAltText("logo");
    const games = screen.queryByRole("link", { name: /경기 목록/i });
    const courts = screen.queryByRole("link", { name: /경기장/i });
    const faq = screen.queryByRole("link", { name: /FAQ/i });

    expect(games).toBeInTheDocument();
    expect(courts).toBeInTheDocument();
    expect(faq).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
