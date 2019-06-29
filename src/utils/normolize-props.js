import { isString } from 'lodash/fp';

const normolizeMap = {
  as(value) {
    return isString(value);
  },
};

export const applyNormolizer = (key, value, props) => {
  if (!normolizeMap[key]) return;
  if (normolizeMap[key](value)) return;
  delete props[key];
};

export default props => {
  return Object.keys(props).reduce((acc, key) => {
    applyNormolizer(key, props[key], props);
    return acc;
  }, props);
};
