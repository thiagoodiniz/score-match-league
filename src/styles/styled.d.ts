import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    }
  }
}