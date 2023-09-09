import { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
  width?: string;
  height?: string;
}

const StyledCard = styled.div<CardProps>`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  outline: 1px solid #e4e6e8;
  box-shadow: 0 1px 3px #000000;
  border-radius: 16px;
  padding: 24px;
`;

const Card = ({ children, width, height }: CardProps) => {
  return (
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  );
};

export default Card;
