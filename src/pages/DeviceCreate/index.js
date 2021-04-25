import { React, useRef } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import getRandomName from "../../utils/getRandomName";

const StyledFieldset = styled.fieldset`
  display: grid;
  text-align: left;
  gap: 1rem;
  padding: 20px;
`;

const StyledButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  width: clamp(175px, 30%, 30%);
`;

const DeviceCreate = ({ devices, setDevices }) => {
  const input = useRef(null);
  const id = devices[devices.length - 1].id + 1;

  const addDevice = (e) => {
    e.preventDefault();
    const deviceName = input.current.value;
    const newDevice = { id: id, name: deviceName };

    setDevices([...devices, newDevice]);
    alert(`${deviceName} added!`);
  };

  return (
    <>
      <Layout>
        <h1>Add device</h1>
        <form onSubmit={addDevice}>
          <StyledFieldset>
            <label for="device-name">Device name</label>
            <input
              id="device-name"
              type="text"
              ref={input}
              required
              defaultValue={getRandomName()}
            />
            <label for="reading-value">Reading value</label>
            <input id="reading-value" type="text" />
            <label for="reading-date">Time of reading</label>
            <input id="reading-date" type="date" placeholder="Sensor reading" />
            <label for="reading-time">Time of reading</label>
            <input id="reading-time" type="time" placeholder="Sensor reading" />
            <label for="sensor-select">Choose sensor type</label>
            <select id="sensor-select">
              <option>Temperature</option>
              <option>Humidity</option>
              <option>Air quality</option>
            </select>
            {/* add sensor type dropdown and date picker*/}
            <StyledButton type="submit"> Add device</StyledButton>
          </StyledFieldset>
        </form>
      </Layout>
    </>
  );
};

export default DeviceCreate;
