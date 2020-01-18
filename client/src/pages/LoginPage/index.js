import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    setEmailValid(true);
    event.preventDefault();
    API.loginUser({ email: email, password: password })
      .then(res => props.history.push("/home"))
      .catch(err => {
        console.log(err);
        setEmailValid(false)
      });
  }

  return (
    <div className="Login">
      <Jumbotron/>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" bsSize="large" placeholder="e-mail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            isInvalid={!emailValid}
          />
          <Form.Control.Feedback type="invalid">
            Email doesn't exist.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password" bsSize="large" placeholder="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Form.Group>
        <br></br>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
        <br></br>
        <p>
          <a href="/signup">Don't have an account already?<br/> Signup here!</a>
        </p>
      </Form>
    </div>
  );
}