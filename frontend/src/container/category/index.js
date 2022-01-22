import { memo, useCallback } from 'react';
import Section from 'components/section';
import Card from 'components/card';
import API from 'endpoint';
import { Loader } from 'components/loading';
import { numberWithCommas } from 'utils/number-with-coma';
import { Title, Wrapper, LoadingBox } from './styles';
import { useCartContext } from 'context/AddToCartContext';
import { useQuery } from 'react-query';

function Category({ title, type }) {
  const get = () => API.get(type ? `/gift/${type}` : '/gift');

  const { data, isLoading, isError, error } = useQuery(
    type ? type : 'category',
    get
  );

  if (isError) {
    console.log(error.message);
  }

  return (
    <Section id="category">
      <Title>{title}</Title>

      {isLoading ? (
        <LoadingBox>
          <Loader />
        </LoadingBox>
      ) : (
        <WrapperComponent data={data.data.payload} />
      )}
    </Section>
  );
}

const WrapperComponent = memo(({ data }) => {
  const { fn } = useCartContext();

  return (
    <Wrapper>
      {data.map((el, idx) => {
        return (
          <Card
            key={idx}
            title={el.title}
            img={`${el.img}`}
            description={el.description}
            price={`$${numberWithCommas(el.price)}`}
            action={useCallback(() => {
              fn.addToCart({ cart: el });
            }, [])}
          ></Card>
        );
      })}
    </Wrapper>
  );
});

export default Category;
