import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import DeviceList from "../DeviceList";
import Layout from "../Layout";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
`;

function Home({ error, isLoaded, devices }) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/device/new`);
  };

  return (
    <Layout>
      <StyledDiv>
        <h1>All devices</h1>
        <button onClick={handleClick}>Add device</button>
      </StyledDiv>
      <DeviceList error={error} isLoaded={isLoaded} devices={devices} />
    </Layout>
  );
}

export default Home;
