export const baseTheme = {
  colors: {
    primary: '',
    secondary: '',
    white: '#fff',
    black: '',
    gray: '#9496A6',
    lightBlue: '#78B4ED',
    darkGray: '#7D7F8E',
    error: '#ab2a2a',
  },
  backgrounds: {
    primary: '#242731',
    secondary: '#111216',
    accent: '#8941FF',
    accentHover: '#733aef',
  },
  fonts: {
    primary: 'Metropolis, sans-serif',
  },
  border: {
    primary: '#3d4250',
  },
  fontSizes: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
}

export type Theme = typeof baseTheme
