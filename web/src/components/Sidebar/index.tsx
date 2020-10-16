import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext} from 'styled-components';
import mapMarkerImg from '../../images/map-marker.svg';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom';

interface Props {
    toggleTheme():void;
}

//const Sidebar: React.FC<Props> =({toggleTheme}) => {
    const Sidebar = () =>{   
    const { goBack } = useHistory();
    const { colors, title } = useContext(ThemeContext);

    return(
        <Container>
            <aside className="app-sidebar">
                <Link to="/">
                    <img src={mapMarkerImg} alt="Happy" />
                </Link>
                

                <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
                </footer>
            </aside>
        </Container>
    );
}

export default Sidebar;