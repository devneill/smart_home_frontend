import logo from "../../logo.png";
import "./App.style.css";
import DeviceList from "../DeviceList/DeviceList";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/device/new`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DeviceList />
      <Button text="Add device" onClick={handleClick} />
    </div>
  );
}

export default App;
