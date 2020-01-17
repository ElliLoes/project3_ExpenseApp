//client/components/Add.js
import React from 'react';
import { Button } from 'react-bootstrap';
import "./style.css";

class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            title: '',
            amount: '',
            description: '',
            date: '',
            category: '',
            user: '',
        }
        // this.handleSelectChange = this.handleSelectChange.bind(this);
        // this.onClick = this.onClick.bind(this);
        // this.handleTextChange = this.handleTextChange.bind(this);
        // this.insertNewExpense = this.insertNewExpense.bind(this);
    }
    onClick = (e) => {
        this.insertNewExpense(this);
    }
    handleTextChange = (e) => {
        console.log(e.target.name, e.target.value, "textchange");
        if (e.target.name === "title") {
            this.setState({
                title: e.target.value
            });
        }
        if (e.target.name === "amount") {
            this.setState({
                amount: e.target.value
            });
        }
    }
    render() {
        return (
            <div>
                <fieldset>
                <li className="form-row"><label htmlFor="title">Title</label><input type="text" id="title" name="title" value={this.state.title} onChange={this.handleTextChange}></input></li>
                <li className="form-row"><label htmlFor="amount">Amount:</label><input type="number" id="amount" name="amount" value={this.state.amount} onChange={this.handleTextChange}></input></li>
                <li className="form-row"><label htmlFor="description">Description:</label><input type="text" id="description" name="description" value={this.state.description} onChange={this.handleTextChange}></input></li>
                <li className="form-row"><label htmlFor="date">Date:</label><input type="date" id="date" name="date" value={this.state.date} onChange={this.handleTextChange}></input></li>
                <li className="form-row"><label htmlFor="category">Category:</label><input type="text" id="category" name="category" value={this.state.category} onChange={this.handleTextChange}></input></li>
                </fieldset>
                <div className='button-center'>
                    <br />
                    <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add Expense</Button>
                </div>
            </div>
        );
    }
}

export default AddExpense;