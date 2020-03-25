export default {
  menu: {
    color: 'background',
    fontFamily: 'heading',
    px: 0,
    py: 0,
    textTransform: 'lowercase',
    textDecoration: 'none',
    fontSize: 30,
    cursor: 'pointer'
  },
  homeH1: {
    fontSize: ['36px', '42px'],
    fontWeight: '900',
    color: 'white',
    lineHeight: 1.15,
    "::after": {
      content: '""',
      display: 'block',
      width: '130px',
      margin: '20px auto 0 auto',
      borderBottom: '2px dotted white'
    }
  },
  homeH2: {
    fontSize: '30px',
    fontWeight: '900',
    color: 'accent',
    lineHeight: 1.15,
    marginBottom: '50px',
    "::after": {
      content: '""',
      display: 'block',
      width: '130px',
      margin: '20px auto 0 auto',
      borderBottom: '2px dotted',
      borderColor: 'accent'
    }
  },
  homeBlurb: {
    fontSize: '30px',
    marginBottom: '35px',
    lineHeight: 1.3,
    textAlign: 'center'
  },
  pageBlurb: {
    fontSize: '30px',
    marginBottom: '35px',
    lineHeight: 1.3,
    textAlign: 'center'
  },
  default: {
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
    color: 'text'
  },
  warning: {
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
    color: 'red'
  }
};
