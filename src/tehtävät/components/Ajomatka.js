import React from 'react';

function Ajomatka(props) {
    return (
        <div>
            Nimi: {props.ajopaivakirja.laatija}<br />
            Rekisterinumero: {props.ajopaivakirja.rekisterinro}<br />
            Matka:{(props.ajopaivakirja.loppu.lukema - props.ajopaivakirja.alku.lukema) + " Kilometria"}<br />
            <br />
            
        </div>
    )
}

export default Ajomatka;