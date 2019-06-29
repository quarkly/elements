import { isString } from 'lodash/fp';

const normalizeMap = {
  as(value) {
    return isString(value);
  },
};

export const applynormalizer = (key, value, props) => {
  if (!normalizeMap[key]) return;
  if (normalizeMap[key](value)) return;
  delete props[key];
};

export default props => {
  return Object.keys(props).reduce((acc, key) => {
    applynormalizer(key, props[key], props);
    return acc;
  }, props);
};
