import React, { useState } from "react";
// import { Button, FormGroup, FormControl, ControlLabel, FormControlFeedback } from "react-bootstrap/Form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./style.css";
import API from "../../utils/API";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
      API.loginUser({email: email, password: password})
        .then(res => console.log("login success", res))
        .catch(err => {
          console.log(err);

        });
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="email" bsSize="large" placeholder="e-mail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
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
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}