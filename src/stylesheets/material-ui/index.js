import { createMuiTheme } from "@material-ui/core";

const primaryMedium = '#5a8b5c'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8ca18c',
      main: '#5a8b5c',
      dark: '#205723',
    }
  }
})

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textfield: {
    color: primaryMedium,
  },
  startBtnItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  startBtn: {
    padding: '4px 8px',
    fontWeight: 600,
    color: '#fefefe',
    backgroundColor: primaryMedium,
      '&:hover': {
        color: primaryMedium
      }
  }
}

export {
  theme,
  PrimaryLayoutStyles,
  LaunchPageStyles
}