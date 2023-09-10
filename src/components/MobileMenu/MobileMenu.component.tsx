// MobileMenu.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface MobileMenuWrapperProps {
  $isOpen: boolean;
}

const MobileMenuWrapper = styled.div<MobileMenuWrapperProps>`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 100%;
  height: 100vh;
  background-color: #fff;
  transition: right 0.3s ease-in-out;
  padding-top: 40px;
`;

const ToggleButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  @media (max-width: 700px) {
    display: flex;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  width: 100%;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #1e88e5;

  &:hover {
    background-color: #ceeaff;
  }
  &:active {
    background-color: #aadbff;
  }
`;

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToggleButton onClick={toggleMenu}>
        <img
          src={isOpen ? "/icons/circle-close.svg" : "/icons/hamburger.svg"}
          alt="logo"
          width={20}
        />
      </ToggleButton>
      <MobileMenuWrapper $isOpen={isOpen}>
        <ListContainer>
          <ListItem>
            <StyledLink to="/" onClick={() => setIsOpen(false)}>
              Strona Główna
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="/ksiegowi" onClick={() => setIsOpen(false)}>
              Księgowi
            </StyledLink>
          </ListItem>
        </ListContainer>
      </MobileMenuWrapper>
    </>
  );
};

export default MobileMenu;
