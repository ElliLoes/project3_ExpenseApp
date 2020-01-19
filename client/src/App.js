import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import cookie from 'react-cookies'

function App() {
  return (
    <Router>
      <div>
        <Container>
          {/* <Nav /> */}
          <Switch>
            <LoggedInRoute exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUp} />
            <LoggedInRoute exact path="/expenses/add" component={Expense} />
            <LoggedInRoute exact path="/expenses" component={Expenses} />
            <LoggedInRoute exact path="/expenses/:id" component={Expense} />
            <LoggedInRoute exact path="/categories" component={Categories} />
            <LoggedInRoute exact path="/categories/add" component={AddCategory} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

const LoggedInRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    cookie.load('token')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default App;


