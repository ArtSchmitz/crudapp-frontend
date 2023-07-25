import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Home } from './pages/Home';
import { Cadastrar } from './pages/Cadastrar';
import { Atualizar } from './pages/Atualizar';

function App() {
  return (
    <div>
    <Router>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cadastrar" component={Cadastrar} />
          <Route exact path="/atualizar" component={Atualizar} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
