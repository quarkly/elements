export default {
  props: {
    actions: [],
    attributes: {
      name: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
    },
  },
  description: 'Элемент theme – задает тему для вложенных элементов',
};
