export const baseTheme = {
  palette: {
    primary: '#8941FF',
    secondary: '#3CDC86',
    white: '#fff',
    black: '',

    gray: '#9496A6',
    lightSlateGrey: '#A2A4A8',
    lightGray: '#7D869E',
    darkGray: '#7D7F8E',
    lightBlue: '#78B4ED',
    error: '#ab2a2a',
  },
  background: {
    primary: '#242731',
    secondary: '#111216',
    darkBlue: '#191C23',
    accent: '#8941FF',
    accentHover: '#733aef',
  },
  font: {
    primary: 'Metropolis, sans-serif',
  },
  border: {
    primary: '#3d4250',
    primaryHover: '#4e5466',
  },
  typography: {
    h1: {
      fontSize: '48px',
      lineHeight: '56px',
    },
    h2: {
      fontSize: '44px',
      lineHeight: '48px',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    h5: {
      fontSize: '15px',
      lineHeight: '24px',
    },
    h6: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    subtitle1: {
      fontSize: '13px',
      lineHeight: '16px',
    },
  },
}

export type Theme = typeof baseTheme
