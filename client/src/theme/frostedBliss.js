// src/theme/railwayJourney.js
import { createTheme } from '@mui/material/styles';

const railwayJourneyColors = {
  base: '#2B2D42',        // Deep railway blue-gray
  surface: '#3F4257',     // Dark steel gray
  overlay: '#4E5166',     // Soft muted blue-gray
  muted: '#8D99AE',       // Subtle gray-blue
  subtle: '#EDF2F4',      // Light off-white
  text: '#F8F9FA',        // Bright white
  accent: '#EF233C',      // Railway red (accents like signage)
  track: '#8C6D1F',       // Golden brown (for railway tracks)
  sun: '#F9A826',         // Vibrant sunny yellow
  green: '#4CAF50',       // Fresh green (for success messages)
  infoBlue: '#3B82F6',    // Calm blue (informational highlights)
  warningOrange: '#FF8C42', // Vibrant orange (warnings)
};

const railwayJourneyTheme = createTheme({
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Montserrat:wght@400;600&display=swap');
    `,
  },
  palette: {
    mode: 'dark',
    background: {
      default: railwayJourneyColors.base,
      paper: railwayJourneyColors.surface,
    },
    primary: {
      main: railwayJourneyColors.track,
    },
    secondary: {
      main: railwayJourneyColors.sun,
    },
    error: {
      main: railwayJourneyColors.accent,
    },
    warning: {
      main: railwayJourneyColors.warningOrange,
    },
    info: {
      main: railwayJourneyColors.infoBlue,
    },
    success: {
      main: railwayJourneyColors.green,
    },
    text: {
      primary: railwayJourneyColors.text,
      secondary: railwayJourneyColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: railwayJourneyColors.overlay,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '8px',
          backgroundColor: railwayJourneyColors.accent,
          '&:hover': {
            backgroundColor: railwayJourneyColors.warningOrange,
          },
          fontSize: '1rem',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: railwayJourneyColors.surface,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: railwayJourneyColors.track,
          color: railwayJourneyColors.text,
          fontWeight: 500,
          '& .MuiChip-deleteIcon': {
            color: railwayJourneyColors.accent,
          },
        },
      },
    },
  },
});

export default railwayJourneyTheme;
