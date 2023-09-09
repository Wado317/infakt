import styled from "styled-components";

interface StyledTextProps {
  heading?: string;
  underline?: string;
}

type Props = {
  header: string;
  content: string;
  underline?: string;
};

const StyledText = styled.p<StyledTextProps>`
  color: ${(props) => (props.heading ? "#54585C" : "#000")};
  font-size: ${(props) => (props.heading ? "14px" : "16px")};
  text-decoration: ${(props) => props.underline && "underline"};
  line-height: ${(props) => (props.heading ? "20px" : "24px")};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextSection = ({ header, content, underline }: Props) => {
  return (
    <Flex>
      <StyledText heading={true.toString()}>{header}</StyledText>
      <StyledText underline={underline}>{content}</StyledText>
    </Flex>
  );
};

export default TextSection;
