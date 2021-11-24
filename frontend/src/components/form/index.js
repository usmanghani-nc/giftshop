import { FormStyles, FormGroupStyles } from './styles';
import PropTypes from 'prop-types';

export default function Form({ submit, children, block }) {
  return (
    <FormStyles onSubmit={submit} block={block}>
      {children}
    </FormStyles>
  );
}

export const FormGroup = ({ children }) => {
  return <FormGroupStyles>{children}</FormGroupStyles>;
};

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  block: PropTypes.bool,
};
