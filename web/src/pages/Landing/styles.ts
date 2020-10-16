import styled from 'styled-components';
import img from '../../images/landing.svg';


export const Container = styled.div`

    align-items: center;
    //background: ${props => props.theme.colors.background};
    //background-color:"#ffcc00";
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;

    .content-wrapper{
        align-items: flex-start;
        background: ${props => props.theme.colors.landingImage}  no-repeat 80% center;
        //background: url(${img}) no-repeat 80% center;
        //background: url('../../images/landing.svg') no-repeat 80% center;
        //background: ${props => props.theme.colors.landingImage};
        
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        max-height: 680px;
        max-width: 1100px;
        position: relative;
        width: 100%;
    }

    .content-wrapper main {
        max-width: 350px;
    }

    .content-wrapper main h1{
        font-size: 76px;
        font-weight: 900;
        line-height: 70px;
    }    

    .content-wrapper main p{    
        font-size: 24px;
        line-height: 34px;
        margin-top: 40px;
    }

    .content-wrapper .location {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    line-height: 34px;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
}

    .content-wrapper .location strong {
        font-weight: 800;
    }

    .content-wrapper .enter-app{
        align-items: center;
        background: #ffd666;
        border-radius: 30px;
        bottom: 0; 
        display: flex;
        height: 80px;
        justify-content: center;
        position: absolute;
        right: 0;
        width: 80px;

        transition: background-color 0.2s;
    }

    .content-wrapper .enter-app:hover{
        background:#96feff
    }

`;

