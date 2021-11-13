import styled from 'styled-components';
import Link from 'components/link';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & .form-submit-btn {
    margin-top: 1.5rem;
  }

  & .ribbon-icon {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(35%, -15%) rotate(-30deg);
    font-size: 6rem;
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.secondary};
`;

export const Text = styled.p`
  font-size: 1.4rem;
  margin-bottom: 2rem;

  & .text {
    font-size: inherit;
    margin-right: 5px;
  }
`;

export const LinkStyle = styled(Link)`
  color: ${({ theme }) => theme.primary};

  &:hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
  }
`;
