import { StyledButton } from './styles';
import PropTypes from 'prop-types';

export default function Button({ children, action, color, loading }) {
  return (
    <StyledButton color={color} onClick={action}>
      {loading ? <div>Loading..</div> : <>{children}</>}
    </StyledButton>
  );
}

Button.propTypes = {
  action: PropTypes.func,
  color: PropTypes.string,
  loading: PropTypes.bool,
};
