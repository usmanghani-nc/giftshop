import { CardStyle, Title, Describtion, Img, CardBody, CardFooter, Price } from './styles';
import Image from 'components/image';
import PropTypes from 'prop-types';
import Button from 'components/button';

export default function CardCom({ title, description, img, price }) {
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
          <Button>Gift Now</Button>

          <Price>{price}</Price>
        </CardFooter>
      </CardBody>
    </CardStyle>
  );
}

CardCom.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};