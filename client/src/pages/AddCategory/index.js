import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import LoaderBtn from "../../components/LoaderBtn";
import "./style.css";
import useFormFields from '../../utils/useFormFields';
import API from "../../utils/API";
import Nav from "../../components/Nav";


export default function AddExpense(props) {
    const [fields, handleFieldChange] = useFormFields({
        title: "",
        description: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(event) {
        setIsLoading(true);
        event.preventDefault();
        API.createCategory({ title: fields.title, description: fields.description})
            .then(res => props.history.push("/expenses"))
            .catch(err => {
                setIsLoading(false);
            });

    }

    function renderForm() {
        return (
            <form onSubmit={handleSubmit}>
                <Nav />
                <Form.Group controlId="title" bsSize="large">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        autoFocus
                        value={fields.title}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="description" bsSize="large">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={fields.description}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <LoaderBtn
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                >
                    Add Category
                </LoaderBtn>
            </form>
        );
    }

    return (
        <div className="AddCategory">
            {renderForm()}
        </div>
    );
}