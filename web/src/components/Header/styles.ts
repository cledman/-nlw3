import styled from 'styled-components';

export const Container = styled.div`
    align-items:center;
    //background: ${props => props.theme.colors.primary};
    color:#fff;
    display:flex;
    height:60px;
    justify-content: flex-end;
    right: 10px;
    position: absolute;
    width:100vw;
    z-index:999 !important;
`;