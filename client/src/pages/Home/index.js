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
                    <h1>This is a navigation option</h1>
                </Card>
            </div>
        );
    }    
}

console.log("homescreen");

export default Home;