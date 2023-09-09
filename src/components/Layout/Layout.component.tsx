import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding-left: 96px;
  padding-right: 96px;

  @media (max-width: 1430px) {
    padding-left: 62px;
    padding-right: 62px;
  }

  @media (max-width: 1130px) {
    padding-left: 38px;
    padding-right: 38px;
  }

  @media (max-width: 700px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
const Layout = ({ children }: PropsWithChildren) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
