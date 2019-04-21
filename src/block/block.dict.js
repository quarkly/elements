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
  description: 'Элемент block — контейнер на всю ширину и высоту экрана',
};
