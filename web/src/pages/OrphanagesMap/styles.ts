import styled from 'styled-components';
import img from '../../images/landing.svg';


export const Container = styled.div`
    
    display: flex;
    height: 100vh;
    position: relative;
    width: 100vw;
  
    aside{
        //background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
        background: ${props => props.theme.colors.background} ;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 80px;
        width: 440px;
    }
    
    aside h2{    
        font-weight: bold;
        font-size: 40px;
        line-height: 42px;
        margin-top: 64px;
    }

    aside p{
    line-height: 28px;
    margin-top: 24px;
}

aside footer{
    display: flex;
    flex-direction: column;
    line-height: 24px;
}

aside footer strong{
    font-weight: 800;
}

.leaflet-container{
    z-index: 5;
}

.create-orphanage{
    align-items: center;
    background: #15c3d3;
    border-radius: 20px;
    bottom: 40px;
    display: flex;
    height: 64px;
    justify-content: center;
    position: absolute;
    right: 40px;
    width: 64px;
    z-index: 10;

    transition: background-color 0.2s;
}

.create-orphanage:hover{
    background: #17d6eb;
}

.map-popup .leaflet-popup-content-wrapper{
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;

    -webkit-box-shadow: 0px 5px 2px 0px rgba(0,0,0,0.06);
    -moz-box-shadow: 0px 5px 2px 0px rgba(0,0,0,0.06);
    box-shadow: 0px 5px 2px 0px rgba(0,0,0,0.06);

}

.map-popup .leaflet-popup-content{
    align-items: center;
    color: #0089a5;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    justify-content: space-between;
    margin: 8px 12px;
}

.map-popup .leaflet-popup-content a{
    align-items: center;
    background: #15c3d6;
    border-radius: 12px;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;

    box-shadow: 17.2868px 27.6589px 41.4884px 0px rgba(23,142,166,0.16);
}

.map-popup .leaflet-popup-tip-container{
    display: none;
}
`;

