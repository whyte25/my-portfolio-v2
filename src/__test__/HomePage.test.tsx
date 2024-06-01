import { render, screen } from "@testing-library/react";
import Page from "../app/(main)/page";

describe("Page", () => {
  it("renders ", () => {
    render(<Page />);

    const heading = screen.getByTestId("home-page");
    expect(heading).toBeInTheDocument();
  });
});
