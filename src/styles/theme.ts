export const baseTheme = {
  colors: {
    primary: '',
    secondary: '',
    white: '#fff',
    black: '',
    lightGray: '#7D869E',
    gray: '#9496A6',
    darkGray: '#7D7F8E',
    lightBlue: '#78B4ED',
    error: '#ab2a2a',
  },
  backgrounds: {
    primary: '#242731',
    secondary: '#111216',
    darkBlue: '#191C23',
    accent: '#8941FF',
    accentHover: '#733aef',
  },
  fonts: {
    primary: 'Metropolis, sans-serif',
  },
  border: {
    primary: '#3d4250',
    primaryHover: '#4e5466',
  },
  fontSizes: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
}

export type Theme = typeof baseTheme
