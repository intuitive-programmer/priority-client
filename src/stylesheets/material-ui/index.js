const PrimaryLayoutStyles = {
  launchBtn: {
    padding: '4px 8px',
    fontWeight: 600,
    color: '#739574',
      '&:hover': {
        border: '1px solid #b88933',
        backgroundColor: '#fefefe'
      }
  }
}

const LaunchPageStyles = {
  centered: {
    margin: '0px auto',
    padding: '0px 12px',
  },
  startBtnItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  startBtn: {
    padding: '4px 8px',
    fontWeight: 600,
    color: '#fefefe',
    backgroundColor: '#5a8b5c',
      '&:hover': {
        color: '#5a8b5c'
      }
  }
}

export {
  PrimaryLayoutStyles,
  LaunchPageStyles
}