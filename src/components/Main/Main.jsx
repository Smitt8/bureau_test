import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import './Main.css';
import Section from "../Section/Section";

function Main({ data, parsed }) {

  const [paths, setPaths] = React.useState([]);

  React.useEffect(() => {
    data.forEach(el => {
      paths.push(el['$'].name);
    })
    setPaths(paths);
  }, [data, parsed]);

  return (
    <main className="main">
      {parsed && (
        <Switch>
          <Route exact path='/'>
            <Redirect to='/pnf' />
          </Route>
          <Route path='/pnf'>
            <Section
              title='Physical Network Functions'
              name='PNF'
              data={data.filter(el => el['$'].name ===  'Pnf')} />
          </Route>
          <Route path='/complex'>
            <Section
            title='Collection of physical locations'
            name='Complex'
            data={data.filter(el => el['$'].name ===  'Complex')} />
          </Route>
        </Switch>
      )
      }
    </main>
  )
};

export default Main;