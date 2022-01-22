import {
  CardStyle,
  Title,
  Describtion,
  Img,
  CardBody,
  CardFooter,
  Price,
} from './styles';
import Image from 'components/image';
import PropTypes from 'prop-types';
import Button from 'components/button';
import { memo } from 'react';

function CardCom({ title, description, img, price, action }) {
  return (
    <CardStyle>
      {img && (
        <Img>
          <Image src={img} alt="item" />
        </Img>
      )}
      <CardBody>
        <Title>{title}</Title>
        <Describtion>{description}</Describtion>

        <CardFooter>
          <Button onClick={action}>Gift Now</Button>

          <Price>{price}</Price>
        </CardFooter>
      </CardBody>
    </CardStyle>
  );
}

export default memo(CardCom);

CardCom.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};
