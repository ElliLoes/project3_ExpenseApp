const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(cors());
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/expenseapp");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

console.log('Hello, World!');

function createUser() {
    return new Promise((resolve, reject) => {
        db.User
            .find()
            .then(dbUsers => {
                console.log('current users:\n', dbUsers);
                if (!dbUsers.length) {
                    console.log('create dummy user');
                    db.User.create(
                        {
                            "username": "test1",
                            "password": "geheim"
                        }
                    )
                        .then((dbUser) => {
                            console.log('success');
                            resolve(dbUser);
                        });
                } else {
                    resolve(dbUsers[0]);
                };
            });
    });
};

function createCategory() {
    return new Promise((resolve, reject) => {
        db.Category
            .find()
            .then(dbCategorys => {
                console.log('current categories:\n', dbCategorys);
                if (!dbCategorys.length) {
                    console.log('create dummy category');
                    db.Category.create(
                        {
                            "title": "category1",
                            "description": "food"
                        }
                    )
                        .then((dbCategory) => {
                            console.log('success2');
                            resolve(dbCategory);
                        });
                } else {
                    resolve(dbCategorys[0]);
                };
            });
    });
};

function createExpense(user, category) {
    console.log('test', user, category);

    db.Expense
        .find({ user: user._id })
        .then(dbExpenses => {
            if (!dbExpenses.length) {
                console.log('create dummy expense');
                db.Expense.create(
                    {
                        title: "Bread",
                        amount: 16.23,
                        user: user._id,
                        category: category._id
                    }
                )
                    .then(dbExpense => {
                        console.log("success3", dbExpense);
                    });
            }
        });
}

function createData() {

    // const user = createUser();
    // const cat = createCategory();

    // createExpense(user, cat);

    createUser()
        .then(user => createCategory()
            .then(cat => createExpense(user, cat))
        );

    // Promise.all([createUser(), createCategory()])
    //     .then(results => createExpense(results[0], results[1]));
}

createData();