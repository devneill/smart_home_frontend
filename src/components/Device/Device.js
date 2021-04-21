import { React } from "react";
import { useHistory } from "react-router-dom";
import "./Device.style.css";

export default function Device({ device }) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/device/${device.id}`);
  };

  return (
    <li>
      {device.name}
      <button onClick={handleClick}>View details</button>
    </li>
  );
}
