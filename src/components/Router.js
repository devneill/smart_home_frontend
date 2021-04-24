import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import DeviceDetails from "./DeviceDetails";
import DeviceCreate from "./DeviceCreate";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";

const Router = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("https://canary-homework-test.herokuapp.com/devices")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDevices(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <App
              error={error}
              isLoaded={isLoaded}
              devices={devices}
              setDevices={setDevices}
            />
          )}
        />
        <Route
          path="/device/new"
          render={() => (
            <DeviceCreate devices={devices} setDevices={setDevices} />
          )}
        />
        <Route
          path="/device/:deviceId"
          render={({ match }) => (
            <DeviceDetails match={match} devices={devices} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
