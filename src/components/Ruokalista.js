import React, { useEffect, useState } from 'react';

function Ruokalista() {
    
    const [ruokalistat, setRuokalistat] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan...');
    const [ravintola, setRavintola] = useState();
    const [luonastietoja, setLuonastietoja] = useState();
    // Ravintolan ID, josta tiedot haetaan
    const [ID, setID] = useState(59);
    // Oletuksena 59, eli Kalasatama
    
    const fetchUrl = async () => {
        try {
            //Odotetaan responsea ja talletetaan response muuttujaan
            const response = await fetch('https://www.sodexo.fi/ruokalistat/output/weekly_json/' + ID);
            //Muutetaan response JSON:iksi
            const json = await response.json();
            setVirhe('');
            setRuokalistat(json.mealdates);
            setRavintola(json.meta.ref_title);
            setLuonastietoja(json.timeperiod);
           
        } catch (error) {
            setVirhe("Haku ei onnistunut");
        }
    }
    // Tässä kohtaa useEffect laukaisee tiedon haun kun komponentti on luotu
    useEffect(() => { fetchUrl() }, []);

    const hae = (e) => {
        if (ID.length > 0) {
         fetchUrl(ID);
        }else {
         setVirhe('Anna ravintolan ID');
        }
     }

   return (
   <div style={ {fontFamily: 'Helvetica, Sans-serif', backgroundColor: '#5e0d0d', color: '#fff'} }>
        {virhe} <br />
        <form style={ {fontSize: '12px'} }>
            <label htmlFor='ravintola'>Joku muu kuin listattu ravintola (Syötä ID): </label>
            <input type='text' name='hakutermi' id='hakutermi' value={ID} onChange={ (e) => setID(e.target.value) } /> <br />
                <select id="ravintolavalinta" name="ravintolatlista" onChange={ (e) => setID(e.target.value) }>
                    <option value='59'>Ravintola Kalasatama</option>
                    <option value='89'>Ravintola Viikin Kartano</option>
                    <option value='56'>Ravintola La Mer</option>
                    <option value='127'>Ravintola JAMK Bittipannu</option>
                    <option value='120'>Ravintola Elektra</option>
                    <option value='121'>Ravintola Galaksi</option>
                </select>
                <input type='text' value={ID}></input>
            <input type='button' name='hae' value='Hae' onClick={ (e) => hae(e) } />
        </form>
            <h1 style={ {backgroundColor: '#ae1919', padding: '4px'} }>{ravintola}</h1>
            <h3>{luonastietoja}</h3>
            <br />
            {/*sisäkkäiset map-funktiot ja Objektiksi muuttaminen*/}
            { ruokalistat.map((tiedot) => (
                <div style={ {backgroundColor: '#ae1919', padding: '4px', color: '#fff', fontSize: '14px'} } key = {tiedot.courses}>{tiedot.date}
                <br />
                    <ul>
                        { (Object.values(tiedot.courses)).map (course => {
                            return(
                                <li>
                                { course.title_fi + ' ' + course.properties + ' ' + course.price }
                                </li>
                                )
                            })
                        } 
                    </ul>
                </div>
             )) }
</div>);
}


export default Ruokalista;