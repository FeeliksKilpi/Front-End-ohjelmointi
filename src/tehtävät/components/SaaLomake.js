import React, { useEffect, useState }from 'react';

function SaaLomake() {

    const [saaTieto, setSaaTieto] = useState({
        paikkakunta: '',
        kuva: '',
        lampotila: '',
        kuvaus: '',
        tuuli: ''
    });
    const [virhe, setVirhe] = useState('Haetaan...');
    const [paikkakunta, setPaikkakunta] = useState('Helsinki');
//paikkakunnan hakutermi parametriksi
    const fetchUrl = async () => {

try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + paikkakunta + '&units=metric&appid=62fd5dc2206a30ae99abb5c66a2c728d');
    const json = await response.json();
        setVirhe('');
        setSaaTieto ( 
            {
                paikkakunta: json.name,
                kuva: 'http://api.openweathermap.org/img/w/' + json.weather[0].icon,
                lampotila: json.main.temp.toFixed(1),
                kuvaus: json.weather[0].description,
                tuuli: json.wind.speed.toFixed(0)
            } 
                );
        
    } catch (error) {
        setVirhe("Haku ei onnistunut");  
    }
}

    useEffect( () => {fetchUrl() }, [] );

/*if (virhe.length > 0) {
    return ( 
   <p>
       { virhe }
   </p>);
} */

const hae = (e) => {
   if (paikkakunta.length > 0) {
    fetchUrl(paikkakunta);
   }else {
    setVirhe('Anna paikkakunta');
   }
}

return (
<div>
    <form>
        <label htmlFor='Paikkakunta'>Paikkakunta:</label>
        <input type='text' name='hakutermi' id='hakutermi' value={paikkakunta} onChange={ (e) => setPaikkakunta(e.target.value) } />
        <input type='button' name='hae' value='Hae' onClick={ (e) => hae(e) } />
    </form>
    {
    saaTieto.paikkakunta.length > 0 && virhe.length === 0 ?
    <div>
    Paikkakunta: { saaTieto.paikkakunta }<br />
    <img src={ saaTieto.kuva } alt="Kuva" ></img><br />
    Lämpötila: { saaTieto.lampotila }<br />
    Kuvaus: { saaTieto.kuvaus }<br />
    Tuuli: { saaTieto.tuuli + " m/s"}<br />
    </div>
    : <p>{virhe}</p>
    }
</div> );
}

export default SaaLomake;