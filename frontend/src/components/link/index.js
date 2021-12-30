import { StyledLink } from './styles';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function LinkCom({
  children,
  href,
  p,
  m,
  size,
  className,
  target,
  ...otherProps
}) {
  return (
    <Link href={href ? href : '/'} passHref>
      <StyledLink
        p={p}
        m={m}
        size={size}
        className={className}
        target={target && '_blank'}
        {...otherProps}
      >
        {children}
      </StyledLink>
    </Link>
  );
}

LinkCom.propTypes = {
  href: PropTypes.string,
  p: PropTypes.string,
  m: PropTypes.string,
  size: PropTypes.string,
};
