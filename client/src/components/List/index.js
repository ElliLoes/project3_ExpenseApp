import React from "react";
import Image from "../Image";
import { Container, Row, Col } from "../Grid";


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
            <Col size="xs-4 sm-2">
              <Image src={this.props.image} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span><h5>{this.props.amount}</h5></span></h3>
              <p>
                {this.props.description}
                {this.props.date}
                {this.props.category}
              </p>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }
}


