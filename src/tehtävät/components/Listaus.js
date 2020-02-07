import React from 'react';

function Listaus(props) {
    return (
        <div>
            {props.taulukko.map(henkilo => {
                return (
                    <p key={henkilo.nimi}>
                    Nimi: {henkilo.nimi} <br/>
                    alkupäivä: {henkilo.alkupaiva} <br/>
                    loppupäivä: {henkilo.loppupaiva}
                    </p> );
                     })
                    }
         </div> );
}

export default Listaus;