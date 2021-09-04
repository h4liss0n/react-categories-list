import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      black: string,
      gray: string,
      grayDark: string,
      teal: string,
      font: string,
      borderBottom: string,
    },
  }
}