import Select from 'react-select';
import PropTypes from 'prop-types';

export default function SelectComponent({ options, value, action }) {
  return <Select value={value} onChange={action} options={options} />;
}

SelectComponent.prototype = {
  option: PropTypes.object,
  value: PropTypes.any,
  action: PropTypes.func,
};
