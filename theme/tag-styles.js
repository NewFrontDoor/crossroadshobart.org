export default {
  h1: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    color: 'accent',
    mt: ['22px', '0'],
    mb: '35px',
    fontSize: ['32px', '50px'],
    lineHeight: '1.15',
    textAlign: 'center'
  },
  h2: {
    //fontSize: 36,
    //fontFamily: 'heading',
    //color: 'primary',
    //fontWeight: 'body'
  },
  h3: {
    fontSize: '24px',
    fontWeight: '900',
    textAlign: 'center',
    color: 'accent',
    lineHeight: 1.15,
    marginBottom: '10px',
    '::after': {
      content: [null, '""'],
      display: 'block',
      width: '130px',
      margin: '20px auto',
      borderBottom: '2px dotted',
      borderColor: 'accent'
    }
  },
  h4: {
    color: 'text',
    fontSize: 24,
    fontFamily: 'body',
    fontWeight: '700',
    fontStyle: 'body',
    mt: 4,
    mb: 2
  },
  h5: {
    fontSize: 18,
    fontFamily: 'body',
    fontWeight: 'heading',
    color: 'text',
    mt: 0,
    mb: 2
  },
  p: {
    fontSize: 18,
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body',
    color: 'text'
  },
  a: {
    color: 'accent',
    fontFamily: 'body',
    fontStyle: 'normal',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:visited': {
      color: 'text'
    },
    '&:hover': {
      color: 'text'
    },
    '&:active': {
      color: 'text'
    }
  },
  ul: {
    fontFamily: 'body',
    fontWeight: 'body',
    lineHeight: 'body'
  },
  table: {
    border: 'none',
    borderLeft: '1px solid #eee',
    borderRight: '1px solid #eee',
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    thead: {
      tr: {
        backgroundColor: '#eee'
      }
    }
  },
  tr: {
    ':nth-of-type(even)': {
      backgroundColor: '#eee'
    }
  },
  th: {
    padding: '15px 5px'
  },
  td: {
    padding: '15px 5px'
  },
  fieldset: {
    border: 'none'
  }
};

const box = {
  banner: {
    mx: 'auto',
    bg: 'banner',
    color: 'accent'
  },
  body: {
    mx: 'auto',
    color: 'text'
  }
};

export {box};
