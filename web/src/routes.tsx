import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

import pageLanding from './pages/Landing/index';
import pageOrphanagesMap from './pages/OrphanagesMap/index';
import pageOrphanage from './pages/Orphanage/index';
import pageCreateOrphanage from './pages/CreateOrphanage/index'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={pageLanding} />                            
                <Route path="/app" component={pageOrphanagesMap} />            
                <Route path="/orphanages/create" component={pageCreateOrphanage} />                            
                <Route path="/orphanages/:id" component={pageOrphanage} />                                            

                
                {/* 
                    <Route path="/" exact component={Landing}  /> 
                    <Route path="/app" component={OrphanagesMap} />   
                     <Route path="/orphanages/create" component={CreateOrphanage} />      
                    <Route path="/orphanages/:id" component={Orphanage} />                       
                */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;