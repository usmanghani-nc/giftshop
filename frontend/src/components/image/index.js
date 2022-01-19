import Image from 'next/image';
import PropTypes from 'prop-types';
import { ImageDiv } from './styles';

export default function ImageCom({ src, alt, className, ...otherProps }) {
  return (
    <ImageDiv>
      <Image
        src={src}
        alt={alt ? alt : 'Image'}
        className={`img ${className}`}
        layout="fill"
        objectFit="contain"
        quality={100}
        {...otherProps}
      />
    </ImageDiv>
  );
}

ImageCom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
