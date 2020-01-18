//client/components/Add.js
import React from 'react';
import { useState } from "react";
import { Button } from 'react-bootstrap';
import "./style.css";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Form from 'react-bootstrap/Form';

class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            amount: '',
            description: '',
            date: '',
            category: '',
            availableCategories: []
        }
    }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = () => {
        API.getCategories()
            .then(res => this.setState({ availableCategories: res.data }))
            .catch(err => console.log(err));
    };

    addExpense = (e) => {
        API.createExpense({
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
        console.log(e.target.id, e.target.value, "textchange");
        this.setState({
            [e.target.id]: e.target.value
        });

    }
    render() {
        return (
            <div>
                <Nav />
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        autoFocus
                        value={this.state.title}
                        onChange={this.handleTextChange}
                    />
                </Form.Group>
                <Form.Group controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        value={this.state.amount}
                        onChange={this.handleTextChange}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={this.state.description}
                        onChange={this.handleTextChange}
                    />
                </Form.Group>
                <Form.Group controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                        value={this.state.date}
                        onChange={this.handleTextChange}
                    />
                </Form.Group>
                <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={this.handleTextChange}
                    >
                        {this.state.availableCategories.map(category => {
                            return (
                                <option value={category._id} key={category._id}>{category.title}</option>
                            )

                        })}
                        {/* <option value={1}>Food</option>
                        <option value={2}>Transportation</option>
                        <option value={3}>Household</option>
                        <option value={4}>Leisure</option> */}
                    </Form.Control>
                </Form.Group>
                <Button onClick={this.addExpense}>Add Expense</Button>
            </div>
        );
    }
}

export default AddExpense;