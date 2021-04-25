import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import DeviceList from "../../components/DeviceList";
import Layout from "../../components/Layout";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const StyledButton = styled.button`
  white-space: nowrap;
  justify-self: end;
  width: clamp(175px, 60%, 100%);
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
        <StyledButton onClick={handleClick}>Add device</StyledButton>
      </StyledDiv>
      <DeviceList error={error} isLoaded={isLoaded} devices={devices} />
    </Layout>
  );
}

export default Home;
