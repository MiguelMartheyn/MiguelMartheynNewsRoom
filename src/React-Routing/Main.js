import React from "react";
import { Switch, Route } from "react-router-dom";
import Politica from "../componentes/Politica";
import Internacionales from "../componentes/Internacionales";
import Tecnologia from "../componentes/Tecnologia";
import Espectaculos from "../componentes/Espectaculos";
import Deportes from "../componentes/Deportes";
import Diseño from "../componentes/Diseño";
import Buscar from '../componentes/Buscar';
import Home from "../componentes/Home";
import '../styles.css'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/politica" component={Politica} />
        <Route path="/internacionales" component={Internacionales} />
        <Route path="/tecnologia" component={Tecnologia} />
        <Route path="/espectaculos" component={Espectaculos} />
        <Route path="/deportes" component={Deportes} />
        <Route path="/diseno" component={Diseño} />
        <Route path="/buscar" component={Buscar} />
      </Switch>
    </main>
  );
};

export default Main;
