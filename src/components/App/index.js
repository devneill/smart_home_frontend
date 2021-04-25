import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import DeviceDetails from "../../pages/DeviceDetails";
import DeviceCreate from "../../pages/DeviceCreate";
import NotFound from "../../pages/NotFound";

function App() {
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
            <Home
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
}

export default App;
