import styled from 'styled-components';

const responsive = {
  lg: '1500px',
  md: '1200px',
  sm: '750px',
  xs: '900px',
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ col, cols }) => {
    let style = '';
    if (col && !cols) {
      style = `repeat(${col}, 1fr)`;
    } else if (cols) {
      style = '';

      style = cols.join(' ');
    }

    return style;
  }};
  gap: ${({ gutter }) => (gutter ? gutter + 'rem' : '1rem')};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: ${({ md }) => `repeat(${md}, 1fr)`};
  }
`;

const Col = styled.div`
  font-size: 2rem;
  border: 1px solid coral;
`;

export default function Test({}) {
  return (
    <Grid col={2} gutter={2} md={1} cols={['3fr', '1fr']}>
      <Col>Col</Col>
      <Col>Col</Col>
    </Grid>
  );
}
