import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import LoaderBtn from "../../components/LoaderBtn";
import "./style.css";
import useFormFields from '../../utils/useFormFields';
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";


export default function Signup(props) {
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [emailValid, setEmailValid] = useState(true);

    function validateForm() {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    function handleSubmit(event) {
        setIsLoading(true);
        setEmailValid(true);
        event.preventDefault();
        API.signupUser({ email: fields.email, password: fields.password })
            .then(res => props.history.push("/home"))
            .catch(err => {
                setIsLoading(false);
                setEmailValid(false);
            });

    }

    function renderForm() {
        return (
            <form onSubmit={handleSubmit}>
                <Jumbotron />
                <Form.Group controlId="email" bsSize="large">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                        isInvalid={!emailValid}
                    />
                    <Form.Control.Feedback type="invalid">
                        Email already exists. Do you want to login instead?
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" bsSize="large">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword" bsSize="large">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword}
                    />
                </Form.Group>
                <LoaderBtn
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Signup
                </LoaderBtn>
                <p>
                    <a href="/login">You have an account already?<br/> Login here!</a>
                </p>
            </form>
        );
    }

    return (
        <div className="Signup">
            {renderForm()}
        </div>
    );
}