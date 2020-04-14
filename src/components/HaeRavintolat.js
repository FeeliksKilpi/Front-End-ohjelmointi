import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import SuosikkiRavintolat from './SuosikkiRavintolat';
import LisaaRavintolaLomake from './LisaaRavintolaLomake';

const url = "http://localhost:8080";

function HaeRavintolat () {
    const [ravintolat, setRavintola] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan');

    const haeKaikkiRavintolat = async () => {
    try {
        const response = await fetch(url + '/ravintola/all');
        const json = await response.json();
        setRavintola(json);
        setVirhe('');
            } catch (error) {
        setRavintola([]);
        setVirhe('Tietojen haku ei onnistunut');
            }
        }
    useEffect(() => {
    haeKaikkiRavintolat();
        }, []);
    

if (virhe.length > 0) {
    return ( <Typography>{ virhe }</Typography> ); 
}
if (ravintolat.length > 0) {
    return ( 
    <div>
    <SuosikkiRavintolat ravintolat={ ravintolat } />
    <LisaaRavintolaLomake />
    </div> );
}
    return ( <Typography>Yhtään ravintolaa ei ole</Typography> );

}
export default HaeRavintolat;



