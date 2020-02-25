import React, {useEffect, useState} from 'react';

function IDdata() {

    const [henkTiedot, setHenkTiedot] = useState({
        id: '',
        nimi: '',
        kayttaja: '',
        kaupunki: ''
    })
    const [virhe, setVirhe] = useState('Haetaan...');

    const fetchUrl = async () => {

        try {
            //Odotetaan responsea ja talletetaan response muuttujaan
            const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
            //Muutetaan response JSON:iksi
            const json = await response.json();
                setVirhe('');
                setHenkTiedot ( 
                    {
                        id: json.id,
                        nimi: json.name,
                        kayttaja: json.username,
                        kaupunki: json.address.city
                    } 
                 );
                
            } catch (error) {
                setVirhe("Haku ei onnistunut");  
            }
        }
    // Tässä kohtaa useEffect laukaisee tiedon haun kun komponentti on luotu
    useEffect( () => { fetchUrl() }, [] );

        return (
        <div>
            { virhe } <br />
            ID: {henkTiedot.id} <br />
            Nimi: {henkTiedot.nimi} <br />
            Käyttäjä: {henkTiedot.kayttaja} <br />
            Kaupunki: {henkTiedot.kaupunki} <br />
        </div>

        )

    }
export default IDdata;