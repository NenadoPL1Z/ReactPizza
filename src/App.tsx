import React from 'react';
import './sass/styles.sass'
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import {Redirect, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/basket'} component={Basket} />
      <Redirect to={'/'}/>
    </Switch>
  );
}

export default App;
