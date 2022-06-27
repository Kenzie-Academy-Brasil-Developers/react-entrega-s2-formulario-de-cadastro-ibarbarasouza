import { Route, Switch } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Welcome from "./pages/welcome";
import style from "./style.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Cadastro />
        </Route>
        <Route exact path="/welcome/:id">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
