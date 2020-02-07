import React from 'react';

const fetch = require('node-fetch');
const fetchUrl = async () => {
    try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/weather?lang=fi&q=Helsinki&units=metric&APPID=62fd5dc2206a30ae99abb5c66a2c728d');
        const json = await response.json();
        console.log("Nimi: " + json.temp);
        
    } catch (error) {
        console.log('Haku ei onnistunut');
        }
    }
fetchUrl();

var cityName = "Helsinki";
var currentTemp = json.temp;


function HenkiloApp() {
    return (
    <div>
        <Saa saa ={currentTemp} />
    </div>
    );
}
export default HenkiloApp;