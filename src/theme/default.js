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
  Hr: {
    backgroundColor: 'lightgrey',
    height: '1px',
    width: '100%',
  },
  Image: {
    width: '100%',
  },
  Block: {
    width: '100%',
    height: '100vh',
  },
  Box: {
    width: '100%',
    height: '100vh',
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
    borderRadius: '4px',
    backgroundColor: '#248DE0',
    display: 'inline-block',
    textAlign: 'center',
    border: '1px solid transparent',
    paddingTop: '7px',
    paddingRight: '16px',
    paddingBottom: '7px',
    paddingLeft: '16px',
    color: '#FFFFFF',
    transition:
      'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    '&:active': {
      backgroundColor: '#2A5D91',
      color: '#FFFFFF',
    },
    '&:hover': {
      backgroundColor: '#2973B7',
      color: '#FFFFFF',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(38,143,255,.5)',
      color: '#FFFFFF',
    },
  },
  buttons: {
    outline: {
      borderColor: '#248DE0',
      backgroundColor: 'transparent',
      color: '#248DE0',
      '&:hover': {
        backgroundColor: '#248DE0',
        color: '#FFFFFF',
      },
      '&:focus': {
        color: '#248DE0',
      },
      '&:focus:hover': {
        color: '#FFFFFF',
      },
    },
  },
  spacers: {
    big: {
      height: '120px',
    },
    small: {
      height: '10px',
    },
  },
  images: {
    fluid: {
      'max-width': '100%',
      height: 'auto',
    },
    thumb: {
      border: '1px solid #dee2e6',
      'border-radius': '4px',
      width: '200px',
      height: '200px',
      backgroundColor: '#fff',
      padding: '4px',
    },
  },
  hrs: {
    wide: {
      width: '250px',
    },
    narrow: {
      width: '100px',
    },
  },
};
