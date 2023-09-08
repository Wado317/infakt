import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #e4e6e8;
  box-shadow: 0 1px 3px #000000;
  border-radius: 16px;
  max-width: 300px;
  padding: 24px;
`;

const Card = ({ children }: PropsWithChildren) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
