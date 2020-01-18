import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./style.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from "../../components/Nav";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="expenseSum">
                <Card body>
                    <Card.Title>Your Balance</Card.Title>
                    <Card.Text>$2000</Card.Text>
                </Card>
                </div>
                <Card body>
                    <Card.Title>View Expenses</Card.Title>
                    <Card.Text></Card.Text>
                    <Button className="navBtn" onClick={() => window.location.href = "/expenses"}>Go to see all Expenses</Button>
                </Card>
                <Card body>
                    <Card.Title>View Categories</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button className="navBtn">View your categories</Button>
                </Card>
                <Card body>
                    <Card.Title>Setup Categories</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button className="navBtn">Go to set up a spending category</Button>
                </Card>
                <Card body>
                    <Card.Title>Setup Saving Goal</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button className="navBtn">Setup your spending goals</Button>
                </Card>
            </div>
        );
    }
}

export default Home;