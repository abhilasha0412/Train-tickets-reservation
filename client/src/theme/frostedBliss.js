// src/theme/frostedBliss.js
import { createTheme } from '@mui/material/styles';

const frostedBlissColors = {
  base: '#0D1B2A',        // Deep midnight blue
  surface: '#1D2A3A',     // Frosty dark blue
  overlay: '#3E5C76',     // Soft steel blue
  muted: '#A7BBC7',       // Frosty gray-blue
  subtle: '#E4F0F6',      // Very light ice blue
  text: '#F0F4F8',        // Soft white
  love: '#FF4C61',        // Icy pink-red (for accents)
  gold: '#F7B538',        // Frosted gold
  rose: '#F55C8D',        // Light rose pink
  pine: '#A7C7E7',        // Icy pine green
  foam: '#A3D2CA',        // Gentle foam green
  iris: '#5C84B1',        // Subtle iris blue
  highlightLow: '#577F92',// Cool grayish blue for soft highlights
  highlightMed: '#4C91A1',// Medium icy blue for stronger accents
  highlightHigh: '#F06292',// Bold icy pink for high accents
};

const frostedBlissTheme = createTheme({
  MuiCssBaseline: {
    styleOverrides: `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');
    `,
  },
  palette: {
    mode: 'dark',
    background: {
      default: frostedBlissColors.base,
      paper: frostedBlissColors.surface,
    },
    primary: {
      main: frostedBlissColors.pine,
    },
    secondary: {
      main: frostedBlissColors.foam,
    },
    error: {
      main: frostedBlissColors.love,
    },
    warning: {
      main: frostedBlissColors.gold,
    },
    info: {
      main: frostedBlissColors.iris,
    },
    success: {
      main: frostedBlissColors.highlightMed,
    },
    text: {
      primary: frostedBlissColors.text,
      secondary: frostedBlissColors.subtle,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: frostedBlissColors.overlay,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '8px',
          backgroundColor: frostedBlissColors.highlightLow,
          '&:hover': {
            backgroundColor: frostedBlissColors.highlightMed,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          backgroundColor: frostedBlissColors.surface,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default frostedBlissTheme;
