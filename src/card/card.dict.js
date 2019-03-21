export default {
  props: {
    styles: ['box', 'card'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
      },
    },
  },
  description: 'Элемент Card',
};