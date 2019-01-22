import { createMuiTheme } from "@material-ui/core";

const primaryMedium = '#5a8b5c'
const white = '#fefefe'

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
    padding: '0.25em 0.5em',
    fontWeight: 600,
    color: '#739574',
      '&:hover': {
        border: '0.0625em solid #b88933',
        backgroundColor: white
      }
  }
}

const LaunchPageStyles = {
  centered: {
    margin: '0 auto',
    padding: '0 0.5em',
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
    padding: '0.25em 0.5em',
    fontWeight: 600,
    color: white,
    backgroundColor: primaryMedium,
      '&:hover': {
        color: primaryMedium
      }
  }
}

const SessionStyles = {
  centered: {
    margin: '0 auto',
    padding: '0 0.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noteCreatorItem: {
    padding: '0.5em 0.125em 0',
  },
  noteItem: {
    padding: '0.125em'
  },
  addIcon: {
    color: white
  }
}

const DashboardStyles = {
  centered: {
    margin: '0 auto',
    padding: '0 0.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}

export {
  theme,
  PrimaryLayoutStyles,
  LaunchPageStyles,
  SessionStyles,
  DashboardStyles
}