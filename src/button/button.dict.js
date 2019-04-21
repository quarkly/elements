export default {
  props: {
    styles: ['defaults', 'button', 'hovered'],
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
    'Элемент button — кнопка, которая выполняет какое-либо действие. Например, отправка данных формы.',
};
