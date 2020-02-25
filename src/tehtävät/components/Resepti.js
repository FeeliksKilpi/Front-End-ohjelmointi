import React, { useEffect, useState } from 'react';


function Resepti() {

    const [reseptit, setReseptit] = useState([]);
    const [virhe, setVirhe] = useState('Haetaan...');


    const fetchUrl = async () => {
        try {
            //Odotetaan responsea ja talletetaan response muuttujaan
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
            //Muutetaan response JSON:iksi
            const json = await response.json();
            setVirhe('');
            setReseptit(json.meals)


        } catch (error) {
            setVirhe("Haku ei onnistunut");
        }
    }
    // Tässä kohtaa useEffect laukaisee tiedon haun kun komponentti on luotu
    useEffect(() => { fetchUrl() }, []);

    return (
    
        <div>
            {reseptit.map((resepti,i) => (
                <p key={i}>{resepti.strMeal}</p>
            ))}
        </div>);
}

export default Resepti;