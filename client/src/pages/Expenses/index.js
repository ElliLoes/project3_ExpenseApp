import React, { Component } from "react";
import ModifyBtn from "../../components/ModifyBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row } from "../../components/Grid";
import NoExpenses from "../../components/NoExpenses";
import { ExpenseList, ExpenseListItem } from "../../components/List";


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
  };

  deleteBook = id => {
    API.deleteExpense(id)
      .then(res => this.loadExpense())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedExpenses.length > 0 ?
              <ExpenseList>
                {this.state.savedExpenses.map(expense => {
                  console.log(expense)
                  return (
                    <div>
                      <ExpenseListItem
                        key={expense._id}
                        title={expense.title}
                        amount={expense.amount}
                        description={expense.description}
                        date={expense.date}
                        category={expense.category}
                        user={expense.user}
                      />
                      <ModifyBtn
                        onClick={() => this.deleteExpense(expense._id)}
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
