import styled, { keyframes } from 'styled-components';

const pulseEffect = keyframes`
	0% {
		transform: scale(0.90);
	}

	100% {
		transform: scale(1);
	}
`;

export const FullScreenStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .image-box {
    width: 200px;
    height: 200px;
    animation: ${pulseEffect} 1.5s linear infinite alternate;
  }
`;
