import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
  // export interface DefaultTheme {
    name : string;
    colors : {
      primary : string;
      secundary : string;
      textColor : string;
      backgroundColor : string;
    }
  } 
}