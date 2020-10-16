import styled from 'styled-components';

export const Container = styled.div`
    align-items:flex-end;
    //background: ${props => props.theme.colors.primary};
    color:#fff;
    display:flex;
    flex-direction:column;
    font-size:0.9em;    
    height:60px;
    justify-content: flex-end;
    right: 10px;
    margin:5px;
    position: absolute;
    width:100vw;
    z-index:999 !important;

    .happylight,
    #themeName.happy
    {
        color:#000 !important;
        font-weight:bold
    }
    .darkkydark,
    #themeName.darkky{
        color:#ffffff !important;
        font-weight:bold        
    }
    

    #themeName{
        display:block;
        font-size:1.3em !important;
        float:right;
        padding:0px;
        text-transform:capitalize
    }

    

    .switcher{
        clear:both;
        display:block;
        float:right;
        position:relative
    }


`;