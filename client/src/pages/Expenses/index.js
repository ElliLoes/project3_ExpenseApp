import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/List";
import NoBooks from '../../components/NoBooks';

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
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
