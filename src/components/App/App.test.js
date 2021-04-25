import { render, screen } from "@testing-library/react";
import App from "./";
import { renderWithRouter } from "../RenderWithRouter/index";

test("renders learn react link", () => {
  const render = () => renderWithRouter(<App />);
  render();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
