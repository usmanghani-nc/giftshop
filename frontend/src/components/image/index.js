import Image from 'next/image';
import PropTypes from 'prop-types';
import { ImageDiv } from './styles';

export default function ImageCom({ src, alt }) {
  return (
    <ImageDiv>
      <Image
        src={src}
        alt={alt ? alt : 'Image'}
        className="img"
        layout="fill"
        objectFit="contain"
        quality={100}
      />
    </ImageDiv>
  );
}

ImageCom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
