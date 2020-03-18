export default {
  nav: {
    textDecoration: 'none',
    fontFamily: 'body',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      color: 'accent'
    }
  },
  rectangle: {
    padding: '11px 23px',
    border: '2px solid #52934f',
    color: '#52934f',
    ':hover': {
      borderColor: '#63bc50',
      backgroundColor: '#63bc50',
      color: '#fff'
    }
  },
  footer: {
    fontFamily: 'body',
    fontWeight: 'body',
    color: 'background',
    textDecoration: 'none',
    '&:visited': {
      color: 'background'
    },
    '&:hover': {
      color: 'accent'
    },
    '&:active': {
      color: 'accent'
    }
  }
};
