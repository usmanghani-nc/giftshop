import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: white;
  padding: 5rem 2rem;
  width: 50rem;
  border-radius: ${({ theme }) => theme.radius};
  border: ${({ theme }) => theme.border};
  position: relative;
`;

export const CLose = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
`;
