import { useState, useEffect } from 'react';
import Section from 'components/section';
import Card from 'components/card';
import axios from 'axios';
import { FullScreenLoading } from 'components/loading';
import { numberWithCommas } from 'utils/number-with-coma';
import { Title, Wrapper } from './styles';

export default function Category({ title }) {
  const [state, setState] = useState({
    data: [],
    lading: true,
    error: null,
  });

  // const url = 'http://localhost:8080/';
  const url = 'https://api-gifty.herokuapp.com/';

  const get = async () => {
    try {
      const {
        data: { payload },
      } = await axios.get(`${url}gift`);
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

      <Wrapper>
        {state.lading ? (
          <FullScreenLoading />
        ) : (
          state.data.map((el, idx) => {
            return (
              <Card
                key={idx}
                title={el.title}
                img={`${url}${el.img}`}
                description={el.description}
                price={`$${numberWithCommas(el.price)}`}
              ></Card>
            );
          })
        )}
      </Wrapper>
    </Section>
  );
}
