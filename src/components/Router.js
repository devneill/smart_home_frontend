import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App/App";
import DeviceDetails from "./DeviceDetails/DeviceDetails";
import DeviceCreate from "./DeviceCreate/DeviceCreate";
import NotFound from "./NotFound/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/device/new" component={DeviceCreate} />
      <Route path="/device/:deviceId" component={DeviceDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
