import styled from 'styled-components';

const responsive = {
  lg: '1500px',
  md: '1200px',
  sm: '750px',
  xs: '900px',
};

const Grid = styled.div`
  display: grid;
  /* grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};*/
  grid-template-columns: ${({ gutter }) =>
    ` repeat(auto-fit, minmax(calc(1200px / ${gutter > 1 ? gutter + 2 : 14}), 1fr))`};
  gap: ${({ gutter }) => (gutter ? gutter + 'rem' : '1rem')};
  max-width: 1200px;
  margin: 0 auto;

  /* @media (max-width: 1200px) {
    grid-template-columns: ${({ md }) => `repeat(${md}, 1fr)`};
  } */
`;

const Col = styled.div`
  font-size: 2rem;
  border: 1px solid coral;
  grid-column: span ${({ col }) => (col ? (col > 12 ? 12 : col) : 1)};

  @media (max-width: 1200px) {
    grid-column: span ${({ md }) => (md ? (md > 12 ? 12 : md) : 1)};
  }
`;

export default function Test({}) {
  return (
    <Grid col={5} gutter={1} md={2}>
      <Col col={6} md={12}>
        Col
      </Col>
      <Col col={6} md={6}>
        Col
      </Col>
      <Col>Col</Col>
      <Col>Col</Col>
      <Col>Col</Col>
      <Col>Col</Col>
      <Col>Col</Col>
      <Col>Col</Col>
      <Col>Col</Col>
      <Col>Col</Col>
      <Col>Col</Col>
      <Col>Col</Col>
    </Grid>
  );
}
