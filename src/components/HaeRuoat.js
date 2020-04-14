import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import SuosikkiRuoat from './SuosikkiRuoat';
import LisaaRuokaLomake from './LisaaRuokaLomake';

const url = "http://localhost:8080";

function HaeRuoat () {
    const [ruoat, setRuoka] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan');

    const haeKaikkiRuoat = async () => {
    try {
        const response = await fetch(url + '/ruoka/all');
        const json = await response.json();
        setRuoka(json);
        setVirhe('');
            } catch (error) {
        setRuoka([]);
        setVirhe('Tietojen haku ei onnistunut');
            }
        }
    useEffect(() => {
    haeKaikkiRuoat();
        }, []);
    

if (virhe.length > 0) {
    return ( <Typography>{ virhe }</Typography> ); 
}
if (ruoat.length > 0) {
    return ( 
    <div>
        <SuosikkiRuoat ruoat={ ruoat } />
        <LisaaRuokaLomake />
    </div> 
    );
}
    return ( <Typography>Yhtään ravintolaa ei ole</Typography> );

}
export default HaeRuoat;