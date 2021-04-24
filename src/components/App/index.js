import { useHistory } from "react-router-dom";
import DeviceList from "../DeviceList";
import Layout from "../Layout";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
`;

function App({ error, isLoaded, devices }) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/device/new`);
  };

  return (
    <>
      <Layout>
        <StyledDiv>
          <h1>All devices</h1>
          <button onClick={handleClick}>Add device</button>
        </StyledDiv>
        <DeviceList error={error} isLoaded={isLoaded} devices={devices} />
      </Layout>
    </>
  );
}

export default App;
