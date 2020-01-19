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
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            categoryTotals: {},
            initialized: true
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        API.getExpenses()
        .then(res => {
            // this.setState(res.data);
            const expenses = res.data;
            const categoryTotals = {};
            expenses.forEach (expense => {
                const categoryId = expense.category._id;
                if (categoryTotals[categoryId]) {
                  categoryTotals[categoryId] = categoryTotals[categoryId] + expense.amount;
                } else {
                  categoryTotals[categoryId] = expense.amount;
                }
              });
            console.log('expenses:', categoryTotals);
            API.getCategories()
            .then(res =>
                this.setState({ 
                    categories: res.data,
                    categoryTotals
                 })
            )
            .catch(err => console.log(err));
        })
        .catch(err => console.error(err));
    }

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
                                return (
                                    <div key={category._id}>
                                        <CategoryListItem
                                            title={category.title}
                                            description={category.description}
                                            deleted={category.deleted}
                                            user={category.user}
                                            total={this.state.categoryTotals[category._id]}
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
