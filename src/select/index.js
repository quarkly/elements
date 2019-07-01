import elementary from '@quarkly/elementary';
import { getOmitProps } from '../utils';

const Select = elementary.select({
  name: 'Select',
  variant: 'selects',
  effects: {
    hover: ':hover',
    focus: ':focus',
  },
  omit: getOmitProps(),
  normalize: true,
});

export default Select;
