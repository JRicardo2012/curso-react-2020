import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/views/home";
import CadastroProduto from "./components/views/produtos/cadastro";
import ConsultaProdutos from "./components/views/produtos/consulta";

export default () => {
  return (
    <Switch>
      <Route exact path='/cadastro-produtos' component={CadastroProduto} />
      <Route exact path='/consulta-produtos' component={ConsultaProdutos} />
      <Route exact path='/' component={Home} />
    </Switch>
  );
};
