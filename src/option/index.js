import elementary from '@quarkly/elementary';
import { getOmitProps } from '../utils';

const Option = elementary.option({
  name: 'Option',
  variant: 'options',
  effects: {
    hover: ':hover',
  },
  omit: getOmitProps(),
  normalize: true,
  mixins: true,
  aliases: true,
  propTypes: true,
});

export default Option;
