import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonCard = styled.div`
  width: 300px;
  height: 375px;
  border-radius: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shine} 2s linear infinite;
`;

const AccountantCardSkeleton = () => {
  return <SkeletonCard />;
};

export default AccountantCardSkeleton;
