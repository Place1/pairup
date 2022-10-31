export const theme: Theme = {
  brandColor: {
    primary: '#FFF8EC',
    secondary: '#000000'
  },
  textColor: {
    primary: '#000000',
    secondary: '#636363'
  },
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`
}

export type Theme = {
  brandColor: {
    primary: string,
    secondary: string
  },
  textColor: {
    primary: string,
    secondary: string
  },
  fontFamily: string,
}