import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import SignUp from "./pages/SignUp";
// import Nav from "./components/Nav";
import { Container } from "./components/Grid";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Container>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/expenses/add" component={AddExpense} />
            <Route exact path="/expenses" component={Expenses} />
            <Route exact path="/expenses/:id" component={null} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;


