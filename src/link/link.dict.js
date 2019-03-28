export default {
  props: {
    styles: ['defaults', 'button', 'hovered'],
    actions: [],
    attributes: {
      href: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
      name: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
      target: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
      title: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
      variant: {
        handler: 'text',
        type: String,
        category: 'Основное',
      },
    },
  },
  description: 'Элемент link — ссылка, которая может быть оберткой для других элементов',
};
