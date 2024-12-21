// src/theme/highContrastExpressTheme.js
import { createTheme } from '@mui/material/styles';

const highContrastColors = {
  base: '#000000', // Black base for maximum contrast
  surface: '#1E1E1E', // Dark gray for surfaces
  overlay: '#FFDD00', // Bright yellow for highlights
  muted: '#808080', // Medium gray for muted text
  subtle: '#FFFFFF', // Pure white for primary text
  text: '#FFFFFF', // Pure white for prominent text
  departure: '#FF0000', // Vibrant red for departures
  arrival: '#00FF00', // Bright green for arrivals
  warning: '#FFAA00', // Orange for warnings
  info: '#E0115', // Bright blue for information
  success: '#00FFAA', // Teal for success
  buttonPrimary: '#E0115F', // Strong blue for primary actions
  buttonSecondary: '#FF5500', // Orange-red for secondary actions
  cardShadow: '#333333', // Subtle dark shadow
};

const highContrastExpressTheme = createTheme({
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@400;700&display=swap');
    `,
  },
  palette: {
    mode: 'dark',
    background: {
      default: highContrastColors.base,
      paper: highContrastColors.surface,
    },
    primary: {
      main: highContrastColors.buttonPrimary,
    },
    secondary: {
      main: highContrastColors.buttonSecondary,
    },
    error: {
      main: highContrastColors.departure,
    },
    warning: {
      main: highContrastColors.warning,
    },
    info: {
      main: highContrastColors.info,
    },
    success: {
      main: highContrastColors.success,
    },
    text: {
      primary: highContrastColors.text,
      secondary: highContrastColors.muted,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Ubuntu", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: highContrastColors.subtle,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: highContrastColors.subtle,
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
      color: highContrastColors.text,
    },
    button: {
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: highContrastColors.overlay,
          boxShadow: `0 4px 10px ${highContrastColors.cardShadow}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: '8px',
          padding: '12px 24px',
        },
        containedPrimary: {
          backgroundColor: highContrastColors.buttonPrimary,
          color: highContrastColors.subtle,
          '&:hover': {
            backgroundColor: '#0033AA',
          },
        },
        containedSecondary: {
          backgroundColor: highContrastColors.buttonSecondary,
          color: highContrastColors.subtle,
          '&:hover': {
            backgroundColor: '#CC4400',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `0 4px 12px ${highContrastColors.cardShadow}`,
          borderRadius: '10px',
          backgroundColor: highContrastColors.surface,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: highContrastColors.arrival,
          color: highContrastColors.text,
          fontWeight: 700,
          borderRadius: '10px',
        },
        outlined: {
          borderColor: highContrastColors.departure,
          color: highContrastColors.departure,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          color: highContrastColors.muted,
          fontStyle: 'italic',
        },
        body1: {
          color: highContrastColors.text,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: highContrastColors.surface,
        },
        indicator: {
          backgroundColor: highContrastColors.arrival,
        },
      },
    },
  },
});

export default highContrastExpressTheme;

