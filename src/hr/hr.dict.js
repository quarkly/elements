export default {
  props: {
    styles: ['hr'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
    },
  },
  description: 'Элемент hr — разделительная линия',
};
