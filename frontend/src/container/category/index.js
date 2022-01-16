import { useState, useEffect } from 'react';
import Section from 'components/section';
import Card from 'components/card';
import API from 'endpoint';
import { Loader } from 'components/loading';
import { numberWithCommas } from 'utils/number-with-coma';
import { Title, Wrapper, LoadingBox } from './styles';
import { useCartContext } from 'context/AddToCartContext';

export default function Category({ title }) {
  const { fn } = useCartContext();

  const [state, setState] = useState({
    data: [],
    lading: true,
    error: null,
  });

  const url = 'http://localhost:8080/';
  // const url = 'https://api-gifty.herokuapp.com/';

  const get = async () => {
    try {
      const {
        data: { payload },
      } = await API.get(`/gift`);
      setState({
        ...state,
        data: payload,
        lading: false,
      });
    } catch (e) {
      console.error(e.message);
      setState({
        data: [],
        lading: false,
        error: e.message,
      });
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Section>
      <Title>{title}</Title>

      {state.lading ? (
        <LoadingBox>
          <Loader />
        </LoadingBox>
      ) : (
        <Wrapper>
          {state.data.map((el, idx) => {
            return (
              <Card
                key={idx}
                title={el.title}
                img={`${url}${el.img}`}
                description={el.description}
                price={`$${numberWithCommas(el.price)}`}
                action={() => fn.addToCart({ cart: el })}
              ></Card>
            );
          })}
        </Wrapper>
      )}
    </Section>
  );
}
