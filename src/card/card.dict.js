export default {
  props: {
    styles: ['box', 'card'],
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
    'Элемент card — многофункциональная карточка. Например, для описания товара или услуги.',
};
