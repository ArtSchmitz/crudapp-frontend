import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Lista } from "./pages/Lista";
import { Cadastrar } from "./pages/Cadastrar";
import { Atualizar } from "./pages/Atualizar";
import Footer from "./pages/Home/Footer";
import Header from "./pages/Home/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/lista" component={Lista} />
          <Route exact path="/cadastrar" component={Cadastrar} />
          <Route exact path="/atualizar/:id" component={Atualizar} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
