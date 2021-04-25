import { cleanup, render, screen, waitFor } from "../../utils/customRender";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

const server = setupServer(
  rest.get(
    "https://canary-homework-test.herokuapp.com/devices/",
    (req, res, ctx) => {
      return res(ctx.json([{ id: 1, name: "Device 1" }]));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers(), cleanup);
afterAll(() => server.close());

it("should take a snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
});

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByText(/all devices/i)).toBeInTheDocument();
  expect(screen.getByAltText(/loading-logo/i)).toBeInTheDocument();

  await waitFor(() => screen.getByText(/device 1/i));
  expect(screen.getByText(/device 1/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/add device/i), leftClick);

  expect(screen.getByLabelText(/device name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/choose sensor type/i)).toBeInTheDocument();
});

xtest("landing on an invalid route", () => {
  const history = createMemoryHistory();
  history.push("/someinvalidroute");
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});
