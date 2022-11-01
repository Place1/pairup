
export const theme = {
  brandColor: {
    primary: "#FFF8EC",
    secondary: "#000000",
  },
  textColor: {
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#636363",
  },
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  fontSize: '16px',
  fontWeight: {
    semibold: '600'
  },
  lineHeight: '18px',
};

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme { }
}
