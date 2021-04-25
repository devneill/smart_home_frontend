import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import GlobalStyles from "../../styles/GlobalStyles";
import Typography from "../../styles/Typography";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

const SiteWrapper = styled.div`
  max-width: 1000px;
  margin: 0.5rem auto 0.5rem auto;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  @media (max-width: 1100px) {
    margin-left: 1.5em;
    margin-right: 1.5em;
  }
`;

const ContentStyles = styled.div`
  padding: 1rem;
  text-align: center;
`;

const StyledHeader = styled.header`
  height: clamp(40px, 3rem, 100px);
  padding: 2rem 1rem 1rem 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: flex-start;
  border-bottom: var(--grey) solid 1px;
  --cast: 1px;
  box-shadow: var(--cast) var(--cast) 1px var(--grey);
  background: white;
`;

const StyledLink = styled.a`
  &:hover {
    color: var(--orange);
    cursor: pointer;
  }
`;

const Layout = ({ children }) => {
  let history = useHistory();
  let location = useLocation();
  const onHomePage = () => {
    return location.pathname === "/";
  };

  const handleClick = () => {
    history.goBack();
  };
  return (
    <>
      <GlobalStyles />
      <Typography />
      <StyledHeader>
        {!onHomePage() && (
          <StyledLink onClick={handleClick}>
            <FaAngleDoubleLeft />
            Back
          </StyledLink>
        )}
        <img src={logo} alt="logo" />
      </StyledHeader>
      <SiteWrapper>
        <ContentStyles>{children}</ContentStyles>
      </SiteWrapper>
    </>
  );
};

export default Layout;
