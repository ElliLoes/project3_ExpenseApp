import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/"><img className="my-icon" src="/expenseApp.png" alt=""></img>
      <br/>expense.io</a></span></h1>
    </div>
  );
}

export default Jumbotron;