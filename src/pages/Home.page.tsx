import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #1e88e5;
  text-align: center;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #3794e7;
  text-align: center;
`;

const Home = () => (
  <HomeContainer>
    <Title>WITAJ W INFAKT</Title>
    <Subtitle>
      MIEJSCU W KTÓRYM ZNAJDZIESZ SWOJEGO IDEALNEGO KSIĘGOWEGO!
    </Subtitle>
  </HomeContainer>
);

export default Home;
