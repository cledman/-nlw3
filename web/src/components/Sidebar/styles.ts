import styled from 'styled-components';

export const Container = styled.div`
aside.app-sidebar {
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: ${props => props.theme.colors.background};
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
   aside.app-sidebar img {
    width: 48px;
  }
  
   aside.app-sidebar footer a,
   aside.app-sidebar footer button {
    width: 48px;
    height: 48px;
  
    border: 0;
  
    background: #12AFCB;
    border-radius: 16px;
  
    cursor: pointer;
  
    transition: background-color 0.2s;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
   aside.app-sidebar footer a:hover,
   aside.app-sidebar footer button:hover {
    background: #17D6EB;
  }
`;