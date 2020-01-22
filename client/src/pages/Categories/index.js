import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../../components/Grid";
import { CategoryList, CategoryListItem } from "../../components/CategoryList";
import AddCategoryBtn from "../../components/AddCategoryBtn";
import Nav from "../../components/Nav";
import "./style.css";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

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
                        name: categoryTotal.title,
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
                    <AddCategoryBtn onClick={() => window.location.href = "/categories/add"}
                        Add Category
                    />
                    <Col size="md-12">
                            <PieChart
                                width={400} height={400}
                            >
                                <Pie dataKey="value" isAnimationActive={false} data={this.state.data}
                                    // cx={200} cy={200} outerRadius={80} 
                                    fill="#8884d8"
                                    label
                                >
                                    {
                                        this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
                                    }
                                </Pie>
                                <Tooltip />
                            </PieChart>
                    </Col>
                    <Col size="md-12">
                        <CategoryList>
                            {this.state.categories.map(category => {
                                return (
                                    <div className="categoryDiv" key={category._id}>
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
