import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Page, PAGES_PATH } from "../../App";
import MobileMenu from "../MobileMenu/MobileMenu.component";

type TabProps = {
  $active?: boolean;
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
  @media (max-width: 700px) {
    display: none;
  }
`;

const Box = styled.div`
  width: 100px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Tab = styled(Link)<TabProps>`
  display: flex;
  text-align: center;
  align-items: center;
  width: fit-content;
  background-color: ${(props) => (props.$active ? "#aadbff" : "#e3f2fd")};
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  color: #1e88e5;
  font-weight: 600;

  &:hover {
    background-color: #ceeaff;
  }
  &:active {
    background-color: #aadbff;
  }
`;

const Header = () => {
  const [active, setActive] = useState(true);
  return (
    <StyledHeader>
      <LogoImage src="/icons/logo-infakt.svg" alt="logo" />
      <TabsContainer>
        <Tab
          $active={active}
          to={PAGES_PATH[Page.Home]}
          onClick={() => setActive(true)}
        >
          Strona Główna
        </Tab>
        <Tab
          $active={!active}
          to={PAGES_PATH[Page.Ksiegowi]}
          onClick={() => setActive(false)}
        >
          Księgowi
        </Tab>
      </TabsContainer>
      <Box />
      <MobileMenu />
    </StyledHeader>
  );
};

export default Header;
