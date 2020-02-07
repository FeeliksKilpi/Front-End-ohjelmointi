import React from 'react';
import Matka from './components/Matka';
import Otsikko from './components/Otsikko';

let tekija = "Feeliks Kilpi";
const matka = {
    id: 1,
    otsikko: 'Lomalla',
    paiva: '28.8.2019',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 25',
    kuvaus: 'Lomalla Lohjalla',
    }

function MatkaApp() {
    return (
        <div>
            <Otsikko teksti="Matkan tiedot" />
            <Matka matkaobjekti={matka}/>
            <p>Tekijä: {tekija}</p>
        </div>
    );
}





export default MatkaApp;