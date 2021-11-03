import styled from 'styled-components';

export const CardStyle = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radius};
`;

export const CardBody = styled.div`
  padding: 2rem;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 500;
`;

export const Describtion = styled.p`
  font-size: 1.3rem;
`;

export const Img = styled.div`
  min-width: 100%;
  height: 25rem;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
`;

export const Price = styled.div`
  font-size: 1.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
`;
