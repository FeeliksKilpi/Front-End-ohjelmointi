import React from 'react';
import Ruokalista from './components/Ruokalista';

var nimiData = null;
const linjastoData = null;

const fetchUrl = async () => {
    try {
        const response = await fetch('https://www.fazerfoodco.fi/modules/json/json/Index?costNumber=0083&language=fi');
        const json = await response.json();
        nimiData = json.RestaurantName;
        linjastoData = json.SetMenus;
    } catch (error) {
        console.log('Haku ei onnistunut');
        }
    }
fetchUrl();



function RuokalistatApp() {
    return (
        <div>
            <Ruokalista linjastoData = {linjastoData} /> <br />
            
        </div>
    );
}

export default RuokalistatApp;