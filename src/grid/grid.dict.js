export default {
  props: {
    styles: ['box'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
    },
  },
  description: 'Элемент grid — контейнер с display: grid;',
};