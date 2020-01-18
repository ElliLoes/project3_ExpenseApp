import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./style.css";
// import Nav from "../../components/Nav";

// import Card from "../../components/Card";

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <Nav /> */}
                <Card body>
                    <Card.Title>Special Title Treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button className="navBtn" onClick={() => window.location.href = "/expenses"}>Go to see all Expenses</Button>
                </Card>
                <Card body>
                    <Card.Title>Special Title Treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button className="navBtn">View your categories</Button>
                </Card>
                <Card body>
                    <Card.Title>Special Title Treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button className="navBtn">Go to set up a spending category</Button>
                </Card>
                <Card body>
                    <Card.Title>Special Title Treatment</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button className="navBtn">Setup your spending goals</Button>
                </Card>
            </div>
        );
    }
}

export default Home;