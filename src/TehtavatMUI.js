import React from 'react';
import TabMUI from './Navigation/TabMUI';
import DrawerMUI from './Navigation/DrawerMUI';
import MatkalomakeMUI from './Navigation/MatkalomakeMUI';
import NavBar from './HarjoitustyoNavigaatio/NavBar';
import MenuPalkki from './HarjoitustyoNavigaatio/MenuPalkki';
import Ruokalista from './components/Ruokalista';
import Ruokalista2 from './components/Ruokalista2';

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


function TehtavatMUI() {
    return(
    <div>
        <NavBar navigaatio />
        <Ruokalista safka />
    </div>
    )
}

export default TehtavatMUI;