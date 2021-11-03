import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.black};
  margin-bottom: 0.9rem;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const InputStyles = styled.input`
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius};
  border: none;
  padding: 0.5rem 1.6rem;
  font-size: 1.55rem;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
  letter-spacing: 0.15ch;

  &::placeholder {
    color: ${({ theme }) => theme.grey};
    font-weight: 400;
    font-size: 1.4rem;
  }
  &:focus {
    outline: none;
  }
`;

export const Error = styled.span`
  display: block;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.danger};
  transition: all 0.3s;
  position: absolute;
  backface-visibility: hidden;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  transform: ${({ active }) => (active ? 'translateY(3.5px)' : 'translateY(0px)')};
`;
