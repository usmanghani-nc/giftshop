import { StyledLink } from './styles';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function LinkCom({ children, href, p, m, size }) {
  return (
    <Link href={href ? href : `/`} passHref>
      <StyledLink p={p} m={m} size={size}>
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
