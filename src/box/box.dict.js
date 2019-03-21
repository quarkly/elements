export default {
  props: {
    styles: ['box'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
      },
    },
  },
  description: 'Элемент box — вспомогательный контейнер с произвольными размерами для различных задач',
};
