import { React } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: white;
  fill: white;
`;

export default function Device({ device }) {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/device/${device.id}`);
  };

  return (
    <StyledButton onClick={handleClick}>
      {device.name}
      <FaAngleDoubleRight />
    </StyledButton>
  );
}
