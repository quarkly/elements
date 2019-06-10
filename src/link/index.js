import elementary from '@quarkly/elementary';

const Link = elementary.a({
  name: 'Link',
  variant: 'links',
  effects: {
    hover: ':hover',
    focus: ':focus',
    active: ':active',
  },
});

export default Link;
