import React from 'react';
// import { Button } from 'react-bootstrap';
// import { Card, CardFooter } from "react-bootstrap";
import Card from "../../components/Card";



class Home extends React.Component {
    render() {
        return (
            <div className="mbsc-padding">
                <h3>Add Expense</h3>
                <Card theme="ios"  themeVariant="light" >
                    <img src="https://img.mobiscroll.com/demos/bookpic.png" />
                </Card>
            </div>
        );
    }    
}

export default Home;