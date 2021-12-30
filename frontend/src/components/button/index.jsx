import { StyledButton } from './styles';
import Link from 'components/link';
import Loading from './loading';
import PropTypes from 'prop-types';

export default function Button({
  children,
  action,
  color,
  loading,
  secondary,
  href,
  block,
  shadow,
  className,
  ...other
}) {
  const BtnWrapper = (
    <StyledButton
      secondary={secondary}
      color={color}
      onClick={action}
      block={block}
      shadow={shadow}
      className={className}
      {...other}
    >
      {loading ? <Loading /> : <>{children}</>}
    </StyledButton>
  );

  const Wrapper = href ? (
    <Link href={href} style={{ width: block ? '100%' : '' }}>
      {BtnWrapper}
    </Link>
  ) : (
    BtnWrapper
  );

  return Wrapper;
}

Button.propTypes = {
  action: PropTypes.func,
  color: PropTypes.string,
  loading: PropTypes.bool,
  secondary: PropTypes.bool,
  href: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  shadow: PropTypes.bool,
};
