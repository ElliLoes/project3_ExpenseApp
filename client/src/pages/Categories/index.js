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
import PieChart from 'react-minimal-pie-chart';
// import AddExpense from "../../components/AddExpense";
// import AddExpense from "../../pages/AddExpense";

const colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C'];

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            categoryTotals: {},
            data: []
        };
        this.colors = ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
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
                expenses.forEach(expense => {
                    const categoryId = expense.category._id;
                    if (categoryTotals[categoryId]) {
                        categoryTotals[categoryId].total = categoryTotals[categoryId].total + expense.amount;
                    } else {
                        categoryTotals[categoryId] = { title: expense.category.title, total: expense.amount };
                    }
                });
                const data = Object.keys(categoryTotals).map((key, i) => {
                    const categoryTotal = categoryTotals[key];
                    return {
                        title: categoryTotal.title,
                        value: categoryTotal.total,
                        color: this.findColor(i)
                    };
                });
                console.log('expenses:', categoryTotals);
                API.getCategories()
                    .then(res =>
                        this.setState({
                            categories: res.data,
                            categoryTotals,
                            data
                        })
                    )
                    .catch(err => console.log(err));
            })
            .catch(err => console.error(err));
    }

    findColor = (i) => {
        return colors[i % colors.length]
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
                    <PieChart 
                        data={this.state.data}
                        // radius={ 150 }
                        // hole={ 50 }
                        // colors={ colors }
                        // label={true}
                        // percent={ true }
                        // labelPosition={ 100 }
                    />
                    </Col>
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
                                            total={this.state.categoryTotals[category._id] ? this.state.categoryTotals[category._id].total : 0}
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
