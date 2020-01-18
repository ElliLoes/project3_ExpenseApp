import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row } from "../../components/Grid";
import { CategoryList, CategoryListItem } from "../../components/CategoryList";
import ModifyBtn from "../../components/ModifyBtn";
import AddCategoryBtn from "../../components/AddCategoryBtn";
import Nav from "../../components/Nav";
import "./style.css";

// import AddExpense from "../../components/AddExpense";
// import AddExpense from "../../pages/AddExpense";



class Categories extends Component {
    state = {
        categories: [],
        initialized: true
    };

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = () => {
        API.getCategories()
            .then(res =>
                this.setState({ categories: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Nav />
                <Row>
                    <AddCategoryBtn
                        Add Category
                    />
                    <Col size="md-12">
                        <CategoryList>
                            {this.state.categories.map(category => {
                                console.log(category)
                                return (
                                    <div key={category._id}>
                                        <CategoryListItem
                                            title={category.title}
                                            description={category.description}
                                            deleted={category.deleted}
                                            user={category.user}
                                        />
                                    </div>
                                )

                            })}
                        </CategoryList>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Categories;
