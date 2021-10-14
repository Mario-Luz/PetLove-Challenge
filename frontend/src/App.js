import { BrowserRouter, Route, Switch } from "react-router-dom";

import BuscaCep from "./pages/BuscaCep";
import NotFound from "./pages/NotFound";

import { Page } from './styles/default';

function App() {
  return (
    <Page>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={BuscaCep} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </Page>
  );
}

export default App;
