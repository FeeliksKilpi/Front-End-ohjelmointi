import React from 'react';
function Matka(props) {
    return (
    <div>
        {/* Näytetään objektin tiedot */}

        Otsikko: {props.matkaobjekti.otsikko} <br />
        Päivä: {props.matkaobjekti.paiva}<br />
        Paikka: {props.matkaobjekti.paikka}<br />
        Sää: {props.matkaobjekti.saa}<br />
        Kuvaus: {props.matkaobjekti.kuvaus}<br />
    </div>
    );
}

export default Matka;