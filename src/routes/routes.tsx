import React from 'react';
import MainList from "components/main-list/main-list";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/fornecedores' component={MainList} />
      </Switch>    
    </BrowserRouter>
  );
}

export default Routes;