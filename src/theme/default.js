export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
    primary: '#2973B7',
    effect: '#248DE0',
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
  Image: {
    width: '100%',
  },
  Card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    border: '1px solid #D2D9DD',
    'box-sizing': 'border-box',
    width: '400px',
    'min-height': '300px',
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
    },
  },
  Box: {
    backgroundColor: 'blue',
    height: '200px',
  },
  spacers: {
    big: {
      height: '120px',
    },
    small: {
      height: '10px',
    },
  },
};
