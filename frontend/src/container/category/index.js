import { useState, useEffect } from 'react';
import Section from 'components/section';
import Card from 'components/card';
import axios from 'axios';
import { FullScreenLoading } from 'components/loading';

import { Title, Wrapper } from './styles';

export default function Category({ title }) {
  const [state, setState] = useState({
    data: [],
    lading: true,
    error: null,
  });

  const get = async () => {
    try {
      const { data } = await axios.get('https://api-gifty.herokuapp.com/gift');
      console.log(data);
      setState({
        ...state,
        data: data.data,
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
                img={el.img}
                description={el.description}
                price={el.price}
              ></Card>
            );
          })
        )}
      </Wrapper>
    </Section>
  );
}
