import React, { useState, useEffect } from "react";
import Device from "../Device/Device";

export default function DeviceList() {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {devices.map((device) => (
          <Device key={device.id} device={device} />
        ))}
      </ul>
    );
  }
}
