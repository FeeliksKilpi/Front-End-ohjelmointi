import React from 'react';
//Reititys
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//Teema
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Ruokalista from './components/Ruokalista';
import NavBar from './HarjoitustyoNavigaatio/NavBar';
import Yhteystietoja from './components/Yhteystietoja';
import SuosikkiRavintolat from './components/SuosikkiRavintolat';

const osoiteTietoja = [
    {
        id: 59,
        ravintola: "Ravintola Kalasatama",
        osoite: "Sörnäistenkatu 1",
        kuva: "https://www.sodexo.fi/sites/default/themes/sodexo/favicons/android-chrome-192x192.png"
    },
    {
        id: 89,
        ravintola: "Ravintola Viikin Kartano",
        osoite: "Viikinkaari 8",
        kuva: "https://www.sodexo.fi/sites/default/themes/sodexo/favicons/android-chrome-192x192.png"
    },
    {
        id: 56,
        ravintola: "Ravintola La Mer",
        osoite: "John Stenbergin ranta 6",
        kuva: "https://www.sodexo.fi/sites/default/themes/sodexo/favicons/android-chrome-192x192.png"
    },
    {
        id: 127,
        ravintola: "Ravintola JAMK Bittipannu",
        osoite: "Piippukatu 2, Jyväskylä",
        kuva: "https://www.sodexo.fi/sites/default/themes/sodexo/favicons/android-chrome-192x192.png"
    },
    {
        id: 120,
        ravintola: "Ravintola Elektra",
        osoite: "Elektroniikkatie 2, Oulu",
        kuva: "https://www.sodexo.fi/sites/default/themes/sodexo/favicons/android-chrome-192x192.png"
    },
    {
        id: 121,
        ravintola: "Ravintola Galaksi",
        osoite: "Elektroniikkatie 10, Oulu",
        kuva: "https://www.sodexo.fi/sites/default/themes/sodexo/favicons/android-chrome-192x192.png"
    },

];

const osoite = "Testikatu 19";

    


function HarjTyoRavintolat() {
    return(
        <BrowserRouter>
            <div>
                <NavBar navigaatio />
                <Switch>
                    <Route exact path="/" component={ Ruokalista }/>
                    <Route path='/yhteystietoja' render={(props) => <Yhteystietoja {...props} yhteystiedot={ osoiteTietoja }/> } />
                    
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default HarjTyoRavintolat;