import Section from 'components/section';
import Card from 'components/card';

import { Title, Wrapper } from './styles';

export default function Category({ title }) {
  const data = [
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
    {
      title: 'Heading',
      img: '/img/arrival.jpg',
      description: 'dada tttnm,mjyad dadadahghjjj gdthyjy fsfy',
      price: '$27',
    },
  ];

  return (
    <Section>
      <Title>{title}</Title>

      <Wrapper>
        {data.map((el, idx) => {
          return (
            <Card
              key={idx}
              title={el.title}
              img={el.img}
              description={el.description}
              price={el.price}
            ></Card>
          );
        })}
      </Wrapper>
    </Section>
  );
}
