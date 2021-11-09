import { FormStyles, FormGroupStyles } from './styles';
import PropTypes from 'prop-types';

export default function Form({ submit, children }) {
  return <FormStyles onSubmit={submit}> {children} </FormStyles>;
}

export const FormGroup = ({ children }) => {
  return <FormGroupStyles>{children}</FormGroupStyles>;
};

Form.propTypes = {
  submit: PropTypes.func.isRequired,
};
