import React from 'react';
//Reititys
import { BrowserRouter, Route, Switch} from 'react-router-dom';
//Teema
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

import Ruokalista from './components/Ruokalista';
import NavBar from './HarjoitustyoNavigaatio/NavBar';
import Yhteystietoja from './components/Yhteystietoja';
import SuosikkiRavintolat from './components/SuosikkiRavintolat';
import SuosikkiRuoat from './components/SuosikkiRuoat';
import { blueGrey } from '@material-ui/core/colors';

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

const theme = createMuiTheme({
    palette: {
        primary: {main: red[600], contrastText: '#FFFFFF'},
        secondary: {main: purple[500], contrastText: '#FFFFFF'},
        text: {primary: blueGrey[800], secondary: blueGrey[800], contrastText: '#FFFFFF'},
        action: {hover: purple[200]},
        background: {default: '#ede8dd'},
     },
    typography: { },
    overrides: { },
    });
    


function HarjTyoRavintolat() {
    return(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ Ruokalista }/>
                    <Route path='/yhteystietoja' render={(props) => <Yhteystietoja {...props} yhteystiedot={ osoiteTietoja }/> } />
                    <Route path='/suosikkiruoat' component={ SuosikkiRuoat } />
                    <Route path='/lisaa/:nimi/:hinta?/:allergeenit?' component={  SuosikkiRuoat } />
                </Switch>
            </div>
        </BrowserRouter>
    </MuiThemeProvider>
    )
}

export default HarjTyoRavintolat;