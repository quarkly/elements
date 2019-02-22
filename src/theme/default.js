export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
    primary: '#2973B7',
    effect: '#248DE0'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  Spacer: {
    height: '20px',
  },
  Card: {
    backgroundColor: 'tomato',
  },
  Button: {
    width: '88px',
    height: '36px',
    borderRadius: '4px',
    backgroundColor: '#2973B7',
    color: '#FFFFFF',
    '&:active': {
      backgroundColor: '#248DE0',
    },
    '&:hover': {
      backgroundColor: '#248DE0',
    }
  },
  spacers: {
    big: {
      height: '120px'
    },
    small: {
      height: '10px'
    },
  },
};
