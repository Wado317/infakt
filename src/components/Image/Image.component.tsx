import styled from "styled-components";

type Props = {
  src: string;
  alt: string;
};
const StyledImage = styled.img`
  border-radius: 8px;
  height: 64px;
  width: 64px;
`;
const Image = ({ src, alt }: Props) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;
