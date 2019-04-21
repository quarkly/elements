export default {
  props: {
    styles: ['defaults', 'button', 'hovered'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
    },
  },
  description: 'Элемент list — список, который состоит из сущностей одного порядка',
};
