export default {
  props: {
    styles: ['defaults'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
      },
    },
  },
  description: 'Элемент spacer — пустой контейнер. Используется если нужно задать дополнительный отступ.',
};
