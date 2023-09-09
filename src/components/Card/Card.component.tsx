import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children: ReactNode;
  width?: string;
}

const StyledCard = styled.div<CardProps>`
  width: ${(props) => (props.width ? props.width : "auto")};
  outline: 1px solid #e4e6e8;
  box-shadow: 0 1px 3px #000000;
  border-radius: 16px;
  padding: 24px;
`;

const Card = ({ children, width }: CardProps) => {
  return <StyledCard width={width}>{children}</StyledCard>;
};

export default Card;
