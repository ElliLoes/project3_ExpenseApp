import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";


export function ExpenseList({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
}

export class ExpenseListItem extends React.Component {

  render() {
    console.log(this.props);
    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span></span></h3>
              <h2>$ {this.props.amount}</h2>
              <p>
                {this.props.description}<br></br>
                {this.props.date}<br></br>
                {this.props.category}
              </p>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }
}


