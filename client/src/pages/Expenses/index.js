import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row } from "../../components/Grid";
import NoExpenses from "../../components/NoExpenses";
import { ExpenseList, ExpenseListItem } from "../../components/List";
import ModifyBtn from "../../components/ModifyBtn";
import AddBtn from "../../components/AddBtn";
import Nav from "../../components/Nav";
import "./style.css";

// import AddExpense from "../../components/AddExpense";
// import AddExpense from "../../pages/AddExpense";



class Expenses extends Component {
  state = {
    savedExpenses: [],
    initialized: true
  };

  componentDidMount() {
    this.loadExpenses();
  }

  loadExpenses = () => {
    API.getExpenses()
      .then(res =>
        this.setState({ savedExpenses: res.data })
      )
      .catch(err => console.log(err));
    console.log(this.state.savedExpenses, "the state");
  };

  deleteExpense = id => {
    API.deleteExpense(id)
      .then(res => this.loadExpenses())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Row>
          <AddBtn onClick={() => this.props.history.push("/expenses/add")}
            Add Expense
        />
          <Col size="md-12">
            {this.state.savedExpenses.length > 0 ?
              <ExpenseList>
                {this.state.savedExpenses.map(expense => {
                  return (
                    <div key={expense._id}>
                      <ExpenseListItem
                        title={expense.title}
                        amount={expense.amount}
                        description={expense.description}
                        date={new Date(expense.date).toLocaleDateString()}
                        category={expense.category}
                        user={expense.user}
                      />
                      <DeleteBtn
                        onClick={() => this.deleteExpense(expense._id)}
                      />
                      <ModifyBtn
                        onClick={() => this.props.history.push("/expenses/" + expense._id)}
                      />
                    </div>
                  )

                })}
              </ExpenseList>
              :
              <NoExpenses />
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Expenses;
