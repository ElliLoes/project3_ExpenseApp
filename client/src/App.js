import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoBook from "./pages/NoExpense";
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
          <Route exact path="/" component={Search} />
          <Route exact path="/expenses" component={Saved} />
          <Route exact path="/expenses/:id" component={null} />
          <Route component={NoBook} />
        </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;

export default App;
