import Section from 'components/section';
import Button from 'components/button';
import { BsGiftFill } from 'react-icons/bs';
import { GiBalloons } from 'react-icons/gi';

import { HeroStyles, HeroTitle, SubTitle, HeroDescription } from './styles';

export default function Hero({}) {
  return (
    <Section noPadding fluid>
      <HeroStyles>
        <GiBalloons className="ballons-float ballons-float-1" />
        <GiBalloons className="ballons-float ballons-float-2" />

        <HeroTitle>The Best Gift Shop</HeroTitle>
        <SubTitle>
          Creating Happiness For Your Loved Ones
          <BsGiftFill className="gift-icon" />
        </SubTitle>
        <HeroDescription>
          Browse through some of the largest collection of gifts to brighten
          your day
        </HeroDescription>
        <Button className="hero-cta" href="#category" shadow>
          CHOOSE A GIFT
        </Button>
      </HeroStyles>
    </Section>
  );
}
