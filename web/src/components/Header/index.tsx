import React, { useContext } from 'react';
import  Switch from 'react-switch';
import { Container } from './styles';
import { ThemeContext} from 'styled-components';


interface Props {
    toggleTheme():void;
}

const Header: React.FC<Props> =({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

    return(
        <Container id="toggleTheme" className={title}>
            <div className={title+colors.mapStyle}>Tema:&nbsp;
            <Switch  
                id="switcher"
                onChange={ toggleTheme }
                checked={title === 'darkky'}
                checkedIcon={false}
                uncheckedIcon={false}  
                height={10}             
                width={40}
                handleDiameter={20}
                offColor="#2092a7"
                onColor="#000"
                onHandleColor="#15c3d3"
                offHandleColor="#f69c32"
            />
            </div>

            <span id="themeName" className={title}>{title}</span>

            
        </Container>
    );
}

export default Header;