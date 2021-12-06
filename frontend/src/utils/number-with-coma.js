export const numberWithCommas = (value) => {
  if (!value) throw `Value ${value}`;

  if (typeof value !== 'number') throw 'Value must be a number.';

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
