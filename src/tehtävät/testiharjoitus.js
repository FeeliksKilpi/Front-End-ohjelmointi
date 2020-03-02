import React from 'react';
import HarjoitustyoLomake from './components/HarjoitustyoLomake';

const dataa = [{
    id: 1,
    kehittaja: "Feedmix",
    appname: "Bitwolf",
    osoite: "4 Banding Parkway"
  }, {
    id: 2,
    kehittaja: "Voonyx",
    appname: "Cardify",
    osoite: "6840 Blackbird Place"
  }, {
    id: 3,
    kehittaja: "Gigabox",
    appname: "Sub-Ex",
    osoite: "936 Brentwood Way"
  }, {
    id: 4,
    kehittaja: "Eire",
    appname: "Asoka",
    osoite: "0 Hallows Terrace"
  }, {
    id: 5,
    kehittaja: "Yakitri",
    appname: "Cardguard",
    osoite: "676 Charing Cross Parkway"
  }, {
    id: 6,
    kehittaja: "Realbridge",
    appname: "Bamity",
    osoite: "14352 Lyons Plaza"
  }, {
    id: 7,
    kehittaja: "Kamba",
    appname: "Tempsoft",
    osoite: "8956 Schmedeman Alley"
  }]


function HarjoitustyoApp() {
    return(
        <div>
            <HarjoitustyoLomake dataa = {dataa} />
        </div>
    )
}

export default HarjoitustyoApp;