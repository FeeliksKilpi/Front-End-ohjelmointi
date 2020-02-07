import React from 'react';
import Ajomatka from './components/Ajomatka';
import Tekija from './components/Tekija';

let tekija = "Feeliks Kilpi";
const ajopaivakirja = {
    rekisterinro: "XYZ-123",
    laatija: "Risto Reipas",
    alku: {
     lukema: "32500",
     lahtoaika: "13:30",
     paiva: "2020-01-27",
     paikka: "Ratapihantie 13, Helsinki",
    },
    loppu: {
     lukema: "32510",
     loppuaika: "13:50",
     paiva: "2020-06-27",
     paikka: "Hietakummuntie 1, Helsinki",
    }
     }

   function AjoapaivakirjaApp() {
       return (
            <div>
                <Ajomatka ajopaivakirja={ajopaivakirja}/>
                <Tekija tekija={tekija}/>
            </div>
       );
   }  

   export default AjoapaivakirjaApp;