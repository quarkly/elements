export default {
  props: {
    styles: ['defaults'],
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
    'Элемент carousel — слайд-шоу блок с ручной или автоматической прокруткой слайдов.\nСлайдами могут быть изображение, видео, или составные блоки.',
};
