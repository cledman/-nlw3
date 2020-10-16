import React, { useContext } from 'react';
import  Switch from 'react-switch';
import { Container } from './styles';
import { ThemeContext} from 'styled-components';
import mapMarkerImg from '../../images/map-marker.svg';

interface Props {
    toggleTheme():void;
}

const Sidebar: React.FC<Props> =({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

    return(
        <Container id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Map marker img"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>
                        Muitas crianças estão esperando a sua visita ;)
                    </p>
                </header>

                <footer>
                    <strong>Juiz de Fora</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>
        </Container>
    );
}

export default Sidebar;