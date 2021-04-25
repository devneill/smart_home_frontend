import { render, screen, waitFor } from "../../utils/customRender";
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
      // respond using a mocked JSON body
      return res(ctx.json([{ id: 1, name: "Device 1" }]));
    }
  )
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/all devices/i)).toBeInTheDocument();
  expect(screen.getByAltText(/loading-logo/i)).toBeInTheDocument();

  await waitFor(() => screen.getByText(/device 1/i));
  expect(screen.getByText(/device 1/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/add device/i), leftClick);

  // check that the content changed to the new page
  expect(screen.getByPlaceholderText(/device name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/sensor reading/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/back/i), leftClick);
  // expect(screen.getByText(/all devices/i)).toBeInTheDocument();
  // // userEvent.click(screen.getByText(/device 1/i), leftClick);

  // expect(screen.getByText(/temperature/i)).toBeInTheDocument();
});

test("landing on an invalid route", () => {
  const history = createMemoryHistory();
  history.push("/someinvalidroute");
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});

// test("rendering a component that uses useLocation", () => {
//   const history = createMemoryHistory();
//   const route = "/device/1";
//   history.push(route);
//   render(
//     <Router history={history}>
//       <App />
//     </Router>
//   );

//   expect(screen.getByText(/back/i)).not.toBeInTheDocument();
// });
