//client/components/Add.js
import React from 'react';
import { useState } from "react";
import { Button } from 'react-bootstrap';
import "./style.css";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            amount: '',
            description: '',
            date: '',
            category: ''
        }
        console.log(this);
    }
    addExpense = (e) => {
        API.saveExpense({ 
            title: this.state.title, 
            amount: this.state.amount,
            description: this.state.description,
            date: this.state.date,
            category: this.state.category
        })
            .then(res => this.props.history.push("/expenses"))
            .catch(err => console.log(err))

        // this.insertNewExpense(this);
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
        if (e.target.name === "description") {
            this.setState({
                description: e.target.description
            });
        }
        if (e.target.name === "date") {
            this.setState({
                date: e.target.date
            });
        }
        if (e.target.name === "category") {
            this.setState({
                category: e.target.category
            });
        }

    }
    render() {
        return (
            <div>
                <Nav />
                <fieldset>
                <li className="form-row"><label htmlFor="title">Title</label><input type="text" id="title" name="title" value={this.state.title} onChange={this.handleTextChange}></input></li>
                <li className="form-row"><label htmlFor="amount">Amount:</label><input type="number" id="amount" name="amount" value={this.state.amount} onChange={this.handleTextChange}></input></li>
                <li className="form-row"><label htmlFor="description">Description:</label><input type="text" id="description" name="description" value={this.state.description} onChange={this.handleTextChange}></input></li>
                <li className="form-row"><label htmlFor="date">Date:</label><input type="date" id="date" name="date" value={this.state.date} onChange={this.handleTextChange}></input></li>
                <li className="form-row"><label htmlFor="category">Category:</label><input type="text" id="category" name="category" value={this.state.category} onChange={this.handleTextChange}></input></li>
                </fieldset>
                <div className='button-center'>
                    <br />
                    <Button bsStyle="success" bsSize="small" onClick={this.addExpense}>Add Expense</Button>
                </div>
            </div>
        );
    }
}

export default AddExpense;