import Device from "../Device";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const StyledList = styled.ul`
  margin: 1rem auto 0 auto;
  padding: 0;
  list-style: none inside;
`;

const StyledListItem = styled.li`
  padding: 0.5rem 0;
`;

export default function DeviceList({ error, isLoaded, devices }) {
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <img src={logo} alt="logo" className="loading-logo" />;
  } else {
    return (
      <StyledList>
        {devices.map((device) => (
          <StyledListItem key={device.id}>
            <Device device={device} />
          </StyledListItem>
        ))}
      </StyledList>
    );
  }
}
