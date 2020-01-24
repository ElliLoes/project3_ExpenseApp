import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import "./style.css";
import API from "../../utils/API";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faCoins, faCat, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import Nav from "../../components/Nav";

class Home extends React.Component {
    state = {
        expensesTotal: 0,
        initialized: true
    }

    componentDidMount() {
        this.loadExpenses();
      }
    
      loadExpenses = () => {
        API.getExpenses()
          .then(res => {
            const expenses = res.data;
            const expensesTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0);
            this.setState({ 
              savedExpenses: res.data,
              expensesTotal
             })
          })
          .catch(err => console.log(err));
      };


    render() {
        return (
            <div>
                <Nav />
                <div className="sumDiv">
                    <h2 className="expenseSum">Your Expenses</h2>
                    <h1 className="expenseSum">${this.state.expensesTotal}</h1>
                </div>
                <Card body>
                    <Card.Title>View Expenses</Card.Title>
                    <Card.Text><FontAwesomeIcon icon={faCoins} size="7x" color="#FF9824"/></Card.Text>
                    <Button className="navBtn" onClick={() => window.location.href = "/expenses"}>Go to see all Expenses</Button>
                </Card>
                <Card body>
                    <Card.Title>View Categories</Card.Title>
                    <Card.Text><FontAwesomeIcon icon={faChartPie} size="7x" color="#FF9824"/></Card.Text>
                    <Button className="navBtn" onClick={() => window.location.href = "/categories"}>View your categories</Button>
                </Card>
                <Card body>
                    <Card.Title>Set up Categories</Card.Title>
                    <Card.Text><FontAwesomeIcon icon={faCat} size="7x" color="#FF9824"/></Card.Text>
                    <Button className="navBtn" onClick={() => window.location.href = "/categories/add"}>Go to set up a category</Button>
                </Card>
                <Card body>
                    <Card.Title>Setup Saving Goal</Card.Title>
                    <Card.Text><FontAwesomeIcon icon={faCashRegister} size="7x" color="#FF9824"/></Card.Text>
                    <Button id="spGoals" className="navBtn">Set up your spending goals</Button>
                </Card>
            </div>
        );
    }
}

export default Home;