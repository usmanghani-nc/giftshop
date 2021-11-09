import { InputStyles, Wrapper, Label, Error } from './styles';
import PropTypes from 'prop-types';

export default function InputCom({
  placeholder,
  value,
  label,
  id,
  action,
  type,
  error,
  border,
}) {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputStyles
        placeholder={placeholder}
        value={value ? value : ''}
        id={id ? id : ''}
        onChange={action ? action : () => null}
        type={type ? type : 'text'}
        border={border}
      />
      <Error active={error}>{error}</Error>
    </Wrapper>
  );
}

InputCom.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  id: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
  error: PropTypes.string,
};
