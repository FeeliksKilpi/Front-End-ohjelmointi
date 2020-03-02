import React from 'react';
import MatkalistaMUI from './components/MatkalistaMUI';
import './App.css';
import Koulutusohjelmat from './components/Koulutusohjelmat';

const matkat = [
  { id: 1,
  otsikko: 'Lomalla',
  paiva: '26.5.2020',
  paikka: 'Lohja',
  saa: 'Aurinkoista, 10',
  kuvaus: 'Lomalla Lohjalla',
  kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/tammi.PNG'
  }, 
  { id: 2,
  otsikko: 'Mökillä',
  paiva: '8.6.2020',
  paikka: 'Savonlinna',
  saa: 'Aurinkoinen, 21',
  kuvaus: 'Mökillä Itä-Suomessa',
  kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/lumpeet.PNG'
  }, 
  { id: 3,
  otsikko: 'Sukuloimassa',
  paiva: '20.5.2020',
  paikka: 'Vantaa',
  saa: 'Pilvinen, 9',
  kuvaus: 'Kahvihetki',
  kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/kakku.jpg'
  }
];

const koulutukset = [
  {
  id: 1, otsikko: 'Assi', paiva: '2020-02-29',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/assi.jpg",
  },
  {
  id: 2, otsikko: 'Myynti', paiva: '2020-03-01',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/myynti.jpg",
  },
  {
  id: 3, otsikko: 'Tiko', paiva: '2020-06-24',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/tiko.jpg",
  },
  {
  id: 4, otsikko: 'Bite', paiva: '2020-05-31',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen1.jpg",
  },
  {
  id: 5, otsikko: 'Muu', paiva: '2020-02-29',
  picture: "https://myy.haaga-helia.fi/~swd1ta001/kuvatJS/yleinen2.jpg"
  },
  ]

function App() {

  return (
    <div className="App">
       <MatkalistaMUI matkat={matkat} />
       <Koulutusohjelmat koulutukset={koulutukset}/>
    </div>
  );
}


export default App;
