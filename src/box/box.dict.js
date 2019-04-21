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
  description:
    'Элемент box — вспомогательный контейнер с произвольными размерами для различных задач',
};
