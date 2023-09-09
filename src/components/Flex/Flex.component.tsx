import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
`;

const Flex = ({ children }: PropsWithChildren) => {
  return <StyledFlex>{children}</StyledFlex>;
};

export default Flex;
