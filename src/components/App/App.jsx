import React from 'react';
import axios from 'axios';
import xml2js from 'xml2js';

import './App.css'
import Page from '../Page/Page';
import Header from '../Header/Header';
import Main from '../Main/Main';

import oxm from '../../input/aai_oxm_v27.xml';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function App() {

  const [data, setData] = React.useState([]);
  const [parsed, setParsed] = React.useState(false);
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get(oxm, {
      "Content-Type": "application/xml; charset=utf-8"
    }).then((response) => {
      xml2js.parseStringPromise(response.data).then(res => {
        setData(
          res['xml-bindings']['java-types'][0]['java-type']
            .filter(el => el['$'].name === 'Pnf' || el['$'].name === 'Complex')
          );
          setParsed(true);
        // console.log(res['xml-bindings']['java-types'][0]['java-type']
        //     .filter(el => el['$'].name === 'Pnf' || el['$'].name === 'Complex'));
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    })

  }, []);

  const handleOpenMenu = () => {
    setIsMenuOpened(true);
  }

  const handleCloseMenu = () => {
    setIsMenuOpened(false);
  }

  return (
    <div className='app'>
      <Page>
        <Header onOpen={handleOpenMenu} />
        <BurgerMenu isOpen={isMenuOpened} onClose={handleCloseMenu} />
        <Main data={data} parsed={parsed} />
      </Page>
    </div>
  );
}

export default App;
