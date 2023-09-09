import styled from "styled-components";
import Image from "../Image/Image.component";

interface StyledTextProps {
  heading?: string;
}

type Props = {
  imgSrc: string;
  firstName: string;
  lastName: string;
};

const StyledText = styled.p<StyledTextProps>`
  color: ${(props) => (props.heading ? "#54585C" : "#000")};
  font-size: ${(props) => (props.heading ? "16px" : "24px")};
  font-weight: ${(props) => (props.heading ? 400 : 700)};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HEADER = "Twoja księgowa";

export const AccountantSection = ({ imgSrc, firstName, lastName }: Props) => {
  return (
    <Flex>
      <Image src={imgSrc} alt="avatar" />
      <div>
        <StyledText heading={true.toString()}>{HEADER}</StyledText>
        <StyledText>{`${firstName} ${lastName}`}</StyledText>
      </div>
    </Flex>
  );
};
