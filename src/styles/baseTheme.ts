export const baseTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff0000',
    white: '#fff',
    black: '#000000',
    gray: '#9496A6',
    lightGray: '#eaeaea',
    darkGray: '#333333',
  },
  backgrounds: {
    primary: '#242731',
    secondary: '#111216',
  },
  fonts: {
    primary: 'Metropolis, sans-serif',
  },

  fontSizes: {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
}

export type Theme = typeof baseTheme
