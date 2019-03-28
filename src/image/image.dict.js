export default {
  props: {
    styles: ['defaults', 'image'],
    actions: [],
    attributes: {
      variant: {
        handler: 'text',
        type: String,
      },
      src: {
        handler: 'text',
        type: String,
      },
    },
  },
  description: 'Элемент image — изображение',
};
