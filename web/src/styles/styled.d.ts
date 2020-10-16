import 'styled-components';

declare module 'styled-components'{
   export interface DefaultTheme {
    title: string,
    colors:{
        background:string,
        landingImage:string,
        primary: string,
        secundary: string,
        text:string,
        mapStyle:string,
        mapIcon:string,
    }
   }
}