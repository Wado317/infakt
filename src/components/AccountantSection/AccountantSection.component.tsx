import styled from "styled-components";
import Image from "../Image/Image.component";

interface StyledTextProps {
  $heading?: boolean;
}

type Props = {
  imgSrc: string;
  firstName: string;
  lastName: string;
  gender: string;
};

const StyledText = styled.p<StyledTextProps>`
  color: ${(props) => (props.$heading ? "#54585C" : "#000")};
  font-size: ${(props) => (props.$heading ? "16px" : "24px")};
  font-weight: ${(props) => (props.$heading ? 400 : 700)};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 64px;
`;

export const AccountantSection = ({
  imgSrc,
  firstName,
  lastName,
  gender,
}: Props) => {
  const HEADER = gender === "female" ? "Twoja księgowa" : "Twój księgowy";
  return (
    <Flex>
      <Image src={imgSrc} alt="avatar" />
      <div>
        <StyledText $heading>{HEADER}</StyledText>
        <StyledText>{`${firstName} ${lastName}`}</StyledText>
      </div>
    </Flex>
  );
};
