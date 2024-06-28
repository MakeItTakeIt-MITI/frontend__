import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "../../src/app/routes/Home";
const queryClient = new QueryClient();

describe("Renders UI components for Home page", () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });
  it("should render map component on initial load", () => {
    // const banner = screen.getByTestId("map");
    // expect(banner).toBeInTheDocument();
  });
});
