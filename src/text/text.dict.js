export default {
  props: {
    styles: ['defaults', 'text'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
    },
  },
  description: 'Элемент text — текст в различных вариантах: параграф, заголовок, и другие.',
};
