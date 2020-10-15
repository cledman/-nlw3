import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
* {
    box-sizing: border-box;  
    margin:0;
    padding:0;
}

body{
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
}

body, input, button, textarea{
    font: 600 18px Nunito, sans-serif;
}
`;