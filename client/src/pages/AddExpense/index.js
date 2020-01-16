//client/components/Add.js
import React from 'react';
import { Button } from 'react-bootstrap';

class AddExpense extends React.Component {
    constructor() {
        super();
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
        // this.openModal = this.openModal.bind(this);
        // this.closeModal = this.closeModal.bind(this);
    }
    onClick(e) {
        this.insertNewExpense(this);
    }
    handleTextChange(e) {
        if (e.target.name === "title") {
            this.setState({
                description: e.target.value
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
                    <label htmlFor="title">Title</label><input type="text" id="title" name="title" value={this.state.title} onChange={this.handleTextChange}></input>
                    <label htmlFor="amount">Amount:</label><input type="number" id="amount" name="amount" value={this.state.amount} onChange={this.handleTextChange}></input>
                    <label htmlFor="amount">Description:</label><input type="text" id="description" name="description" value={this.state.description} onChange={this.handleTextChange}></input>
                    <label htmlFor="amount">Date:</label><input type="date" id="date" name="date" value={this.state.date} onChange={this.handleTextChange}></input>
                    <label htmlFor="amount">Category:</label><input type="text" id="category" name="category" value={this.state.category} onChange={this.handleTextChange}></input>
                </fieldset>
                <div className='button-center'>
                    <br />
                    <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Expense</Button>
                </div>
            </div>
        );
    }
}
export default AddExpense;