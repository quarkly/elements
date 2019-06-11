import elementary from '@quarkly/elementary';

const Select = elementary.select({
  name: 'Select',
  variant: 'selects',
  effects: {
    hover: ':hover',
    focus: ':focus',
  },
});

export default Select;
