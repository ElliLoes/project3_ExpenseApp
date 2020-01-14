import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Expenses from "./pages/Expenses";
import Nav from "./components/Nav";
import { Container} from "./components/Grid";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Container>
        <Nav />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/expenses/:id" component={null} />
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;


