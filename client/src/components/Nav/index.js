import React from "react";
import Jumbotron from "../Jumbotron";
import Logout from "../Logout";
import "./style.css";


function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" id="homeLink" href="/">
        Home
      </a>
      <a className="navbar-brand" id="expensesLink" href="/expenses">
        Expenses
      </a>
   <Logout/>
 </nav>
 <Jumbotron/>
 </div>
  );
}

export default Nav;