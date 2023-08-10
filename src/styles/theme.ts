export const baseTheme = {
  palette: {
    primary: '#8941FF',
    secondary: '#3CDC86',
    white: '#fff',
    darkWhite: '#FFFFFF99',
    black: '#111216',
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
    tertiary: '#31343D',
    darkBlue: '#191C23',
    accent: '#8941FF',
    accentHover: '#733aef',
    gray: '#60677A',
    lightGray: '#A9A6AE',
  },
  font: {
    primary: 'Metropolis, sans-serif',
  },
  border: {
    primary: '#3d4250',
    primaryHover: '#4e5466',
  },
  boxShadow: {
    primary:
      '0 16px 24px 0 rgba(55, 58, 83, 0.16), 0 4px 12px 0 rgba(36, 38, 53, 0.1), 0 2px 4px 0 rgba(36, 38, 53, 0.08), 0 8px 48px 0 rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 4px 12px 0 rgba(0, 0, 0, 0.4)',
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
    h4: {
      fontSize: '18px',
      lineHeight: '24px',
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
      lineHeight: '15px',
    },
    subtitle2: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
}

export type Theme = typeof baseTheme
