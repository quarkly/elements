export default {
  props: {
    styles: ['defaults', 'text'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
      },
    },
  },
  description: 'Элемент text — текст в различных вариантах: параграф, заголовок... ',
};
