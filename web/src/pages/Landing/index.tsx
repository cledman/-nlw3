import React, { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext} from 'styled-components';
import { Link } from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'
import logoImg from '../../images/logo.svg';

interface Props {
    toggleTheme():void;
}

const Landing: React.FC<Props> =({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

    return(
        <Container id="page-landing">
            <div className="content-wrapper">
            <img src={logoImg} alt="Happy logo" />
    
            <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>
    
            <div className="location">
                <strong>Juiz de Fora</strong>
                <span>Minas Gerais</span>
            </div>
    
            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
            </Link>
            </div>
        </Container>
    );
}

export default Landing;