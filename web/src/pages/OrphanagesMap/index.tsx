import React, { useContext , useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import MapIcon from '../../utils/mapIcon';  
import iconPumpkin from '../../images/abobora.png';

import api from '../../services/api';

import { Container } from './styles';
import { ThemeContext } from 'styled-components';
import Leaflet from 'leaflet';

interface Orphanage{
    id:number;
    latitude:number;
    longitude:number;
    name:string;
}

interface Props {
    toggleTheme():void;
}

const OrphanagesMap: React.FC<Props> =({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]) 

    const MapIcon2 = Leaflet.icon({
    
        iconUrl: iconPumpkin,
      
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [0, -60]
    })
    
     
    useEffect( () => {
        api.get('orphanages').then( response =>{
            setOrphanages(response.data);
        })
    }, []);    

    return(
        <Container id="page-map">
           <aside>

                <header>
                    <Link to="/">
                        <img src={mapMarkerImg} alt="Map marker img"/>
                    </Link>
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

            
            <Map 
                center={[-21.7223296,-43.4045584]}
                zoom={15}
                style={{ height:'100%', width: '100%' }}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */ }
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/${colors.mapStyle}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
                {orphanages.map(orphanage =>{
                    return(
                        <Marker
                        key={orphanage.id}
                        icon={colors.mapStyle==='dark' ? MapIcon2: MapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                    >
                        <Popup  
                            className="map-popup"
                            closeButton={false} 
                            minWidth={240} 
                            maxHeight={240}
                        >
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#fff" />
                            </Link>
                        </Popup>
                    </Marker>                        
                    )
                })}
              
            </Map>    

            <Link to ="/orphanages/create" className="create-orphanage">
                <FiPlus size="32" color="#fff" />
            </Link>    
        </Container>
    );
}

export default OrphanagesMap;