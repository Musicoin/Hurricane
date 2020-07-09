export const theme = {
  global: {
    colors: {
      brand: '#333333',
    },
    font: {
      family: 'Roboto',
      size: '16px',
      height: 1,
    },
    size: 'xlarge',
    focus: {
      border: {
        color: 'transparent',
      },
    },
    hover: {
      color: 'transparent',
      background: 'transparent',
    },
  },
  tabs: {
    header: {
      extend: {
        'button': {
          'span': {
            'font-size': '14px',
          },
        },
      },
    },
  },
  tab: {
    color: '#8899A6',
    active: {
      'color': '#8899A6',
    },
    border: {
      'side': 'bottom',
      'size': '0',
      'color': {
        'dark': 'accent-1',
        'light': '#8899A6',
      },
      'active': {
        'color': {
          'dark': 'white',
          'light': '#8899A6',
        },
      },
      'hover': {
        'color': {
          'dark': 'white',
          'light': '#8899A6',
        },
      },
    },
    margin: {
      'left': '0px',
    },
    hover: {
      color: '#8899A6',
    },
  },
  paragraph: {
    extend: "max-width: 1200px;"
  },
  brandColor: '#333333',
  baseFontSize: 16,
  linkColor: '#F3921B',
  em: (pixels, context) => {return `${pixels / context}em`;},
};
