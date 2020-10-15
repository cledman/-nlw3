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
        <Container>
            Tema
            <Switch 
                onChange={ toggleTheme }
                checked={title === 'darkky'}
                checkedIcon={false}
                uncheckedIcon={false}  
                height={10}             
                width={40}
                handleDiameter={20}
                offColor="#ccff00"
                onColor="#000"
            />
        </Container>
    );
}

export default Header;