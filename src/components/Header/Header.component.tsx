import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Page, PAGES_PATH } from "../../App";

type TabProps = {
  active?: string;
};

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 15px 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  color: white;
`;

const LogoImage = styled.img`
  width: 100px;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Box = styled.div`
  width: 100px;
`;

const Tab = styled(Link)<TabProps>`
  padding: 10px 15px;
  background-color: ${(props) => (props.active ? "#0056b3" : "transparent")};
  border-radius: 5px;
  color: black;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <LogoImage src="/icons/logo-infakt.svg" alt="logo" />
      <TabsContainer>
        <Tab active={true.toString()} to={PAGES_PATH[Page.Home]}>
          Strona Główna
        </Tab>
        <Tab active={false.toString()} to={PAGES_PATH[Page.Ksiegowi]}>
          Księgowi
        </Tab>
      </TabsContainer>
      <Box />
    </StyledHeader>
  );
};

export default Header;
