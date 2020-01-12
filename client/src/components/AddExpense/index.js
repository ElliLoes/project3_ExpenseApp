import React from "react";
import Button from "../Button";
import API from "../../utils/API";

class AddExpense extends React.Component {

  postToDB = (expense) => {
    const dbExpense = {
      title: expense.title,
      amount: expense.amount,
      description: expense.description,
      date: expense.date,
      category: expense.category,
      user: expense.user
    }

    console.log('expense data', dbExpense);

    API.saveExpense(dbExpense)
      .then(res => console.log('added', dbExpense, res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => { this.postToDB(this.props) }
        }>
          Save Expense
        </Button>
      </div>
    );
  }
}

export default AddExpense;