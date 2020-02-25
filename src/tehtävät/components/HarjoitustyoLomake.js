import React, { useEffect, useState }from 'react';

function HarjoitustyoLomake(props) {
    console.log(props);
    return (
        <div>
            <form>
                <label htmlFor='Kehittaja'>Kehittajan yritys:</label>
                <input type='text' name='yritys' id='yritys'/>
                <br />

                <label htmlFor='Sovellus'>Sovelluksen nimi:</label>
                <input type='text' name='sovellus' id='sovellus'/>
                <br />

                <label htmlFor='Osoite'>Yrityksen osoite:</label>
                <input type='text' name='osoite' id='osoite'/>
                <br />

                <input type='button' name='Lisaa' value='Lisaa' />
            </form>
            
            {props.dataa.map(kehittaja => {
                return (
                    <ul key={kehittaja.id}>
                        <li>Kehittäjä (firma): {kehittaja.kehittaja}</li> 
                        <li>Sovelluksen nimi: {kehittaja.appname}</li> 
                        <li>Firman osoite: {kehittaja.osoite}</li>
                    </ul> );
                     })
                    }
         </div> );

}

export default HarjoitustyoLomake;