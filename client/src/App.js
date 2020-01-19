import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Expenses from "./pages/Expenses";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Expense from "./pages/Expense";
import SignUp from "./pages/SignUp";
import AddCategory from "./pages/AddCategory";
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
            <Route exact path="/expenses/add" component={Expense} />
            <Route exact path="/expenses" component={Expenses} />
            <Route exact path="/expenses/:id" component={Expense} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/categories/add" component={AddCategory} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;


