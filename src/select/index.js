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
  mixins: true,
  aliases: true,
  propTypes: true,
});

export default Select;
