export default {
  props: {
    actions: [],
    attributes: {
      name: {
        handler: 'text',
        type: String,
      },
    },
  },
  description: 'Элемент theme – задает тему для вложенных элементов',
};
