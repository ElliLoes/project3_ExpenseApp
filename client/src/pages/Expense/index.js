import React from 'react';
import { Button } from 'react-bootstrap';
import "./style.css";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Form from 'react-bootstrap/Form';

class Expense extends React.Component {
    constructor(props) {
        super(props);
        this.expenseId = props.match.params.id;
        this.state = {
            title: '',
            amount: '',
            description: '',
            date: new Date().toISOString().split('T')[0],
            category: '',
            availableCategories: []
        }
    }

    componentDidMount() {
        this.loadCategories();
        if (this.expenseId) {
            this.loadExpense();
        }
    }

    loadExpense = () => {
        API.getExpense(this.expenseId)
        .then(res => this.setState(res.data))
        .catch(err => console.error(err));
    }

    loadCategories = () => {
        API.getCategories()
            .then(res => this.setState({ availableCategories: res.data }))
            .catch(err => console.error(err));
    };

    submit = (e) => {
        const expenseData = {
            title: this.state.title,
            amount: this.state.amount,
            description: this.state.description,
            date: this.state.date,
            category: this.state.category || this.state.availableCategories[0]._id
        };
        const req = this.expenseId ? API.updateExpense(this.expenseId, expenseData) : API.createExpense(expenseData)

        req
            .then(_ => this.props.history.push("/expenses"))
            .catch(err => console.error(err))
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
                        value={this.state.category}
                    >
                        {this.state.availableCategories.map(category => {
                            return (
                                <option value={category._id} key={category._id}>{category.title}</option>
                            )

                        })}
                    </Form.Control>
                </Form.Group>
                <Button className="addExpense" onClick={this.submit}>Add Expense</Button>
            </div>
        );
    }
}

export default Expense;