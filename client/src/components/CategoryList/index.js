import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";


export function CategoryList({ children }) {
  return (
    <ul className="list-group">{children}</ul>
  );
}

export class CategoryListItem extends React.Component {

  render() {
    return (
      <li>
        <Container>
          <Row>
            <Col size="xs-8 sm-9">
              <h3>{this.props.title}<span></span></h3>
              <h2>${this.props.total || 0}</h2>
              <p>
                {this.props.description}
              </p>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }
}