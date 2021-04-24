import { React, useRef } from "react";
import Layout from "../Layout";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  display: grid;
  gap: 1rem;
  padding: 20px;
`;

const StyledButton = styled.button`
  margin-left: auto;
  margin-right: auto;
  max-width: 33%;
`;

const DeviceCreate = ({ devices, setDevices }) => {
  const getRandomName = () => {
    const names = [
      "Enrique",
      "West",
      "Damien",
      "Braun",
      "Ellie",
      "Osborne",
      "Cierra",
      "Vega",
      "Alden",
      "Cantrell",
      "Kierra",
      "Gentry",
      "Pierre",
      "Cox",
      "Thomas",
      "Crane",
    ];
    const selector = Math.floor(Math.random() * names.length);
    return `${names[selector]}'s device`;
  };
  const id = devices[devices.length - 1].id + 1;
  const addDevice = (e) => {
    e.preventDefault();
    const deviceName = input.current.value;
    const newDevice = { id: id, name: deviceName };

    setDevices([...devices, newDevice]);
    alert(`${deviceName} added!`);
  };

  const input = useRef(null);

  return (
    <>
      <Layout>
        <h1>Add device</h1>
        <form onSubmit={addDevice}>
          <StyledFieldset>
            <input
              type="text"
              ref={input}
              required
              placeholder="Device name"
              defaultValue={getRandomName()}
            />
            <input type="text" placeholder="Sensor reading" />
            {/* add sensor type dropdown and date picker*/}
            <StyledButton type="submit"> Add device</StyledButton>
          </StyledFieldset>
        </form>
      </Layout>
    </>
  );
};

export default DeviceCreate;
