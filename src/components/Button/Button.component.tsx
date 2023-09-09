import styled from "styled-components";

type Props = {
  text: string;
  onClick?: () => void;
};
const StyledButton = styled.button`
  width: fit-content;
  background-color: #e3f2fd;
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ceeaff;
  }
  &:active {
    background-color: #aadbff;
  }
`;

const Text = styled.p`
  font-weight: 500;
  line-height: 20px;
  color: #1e88e5;
  font-family: "Roboto";
  font-size: 14px;
  font-style: normal;
`;
const Button = ({ text, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick}>
      <Text>{text}</Text>
    </StyledButton>
  );
};

export default Button;
