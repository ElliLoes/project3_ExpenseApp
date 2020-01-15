import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../../components/Grid";
import NoExpenses from "../../components/NoExpenses";
import { ExpenseList, ExpenseListItem } from "../../components/List";
import ModifyBtn from "../../components/ModifyBtn";
import AddExpense from "../../components/AddExpense";



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

  getExpense = (id) => {
    API.getExpense(id)
    .then(res => this.loadExpenses())
    .catch(err => console.log(err));
  }

  deleteExpense = id => {
    API.deleteExpense(id)
      .then(res => this.loadExpenses())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row>
          <AddExpense 
          />
          <Col size="md-12">
            {this.state.savedExpenses.length > 0 ?
              <ExpenseList>
                {this.state.savedExpenses.map(expense => {
                  console.log(expense)
                  return (
                    <div key={expense._id}>
                      <ExpenseListItem
                        title={expense.title}
                        amount={expense.amount}
                        description={expense.description}
                        date={expense.date}
                        category={expense.category}
                        user={expense.user}
                      />
                      <DeleteBtn
                        onClick={() => this.deleteExpense(expense._id)}
                      />
                      <ModifyBtn
                      onClick={() => this.getExpense(expense._id)}
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
