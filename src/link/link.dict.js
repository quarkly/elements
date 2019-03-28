export default {
  props: {
    styles: ['defaults', 'button', 'hovered'],
    actions: [],
    attributes: {
      href: {
        handler: 'text',
        type: String,
      },
      name: {
        handler: 'text',
        type: String,
      },
      target: {
        handler: 'text',
        type: String,
      },
      title: {
        handler: 'text',
        type: String,
      },
      variant: {
        handler: 'text',
        type: String,
      },
    },
  },
  description: 'Элемент link — ссылка, которая может быть оберткой для других элементов',
};
