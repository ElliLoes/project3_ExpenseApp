# project3_ExpenseApp

## User stories

* As a USER, I can login with my username and password
* As a USER, I can view my total balance on my homescreen
* As a USER, I can see all my expenses
* As a USER, I can view the details of an existing expense
* AS a USER, I can modify existing expenses
* As a USER, I can delete existing expenses
* As a USER, I can add an expense
* As a USER, I can set up my own categories for expenses
* As a USER, I can see how much I have spent in each expenses category
* As a USER, I can add spending goals
* As a USER, I can delete spending goals
* As a USER, I can modify spending goals
* As a USER, I can check my progress towards my saving goals (and will receive notifications about my progress - MVP+)

## Screens

### Login
* Application title
* Username input
* Password input
* Login button - leads to user home screen

### Home screen
* Current balance including currency
* Link to
  * View expenses
  * View expense categories/spends
  * Setup new expense categories
  * Set up saving goal

### All Expenses screen
* Link back to home screen
* Different expenses which can be clicked on
    * amount
    * description
    * category
    * icon? (MVP+)
* Current balance
* Add expense
* Modify expense

### Modify Expense screen
* "Expense title" label
* Expense amount
* Expense description
* Expense category
* Expense icon?
* Save - leads to Expenses screen
* Delete - leads to Expenses screen
* Link back to Expenses screen

### Add Expense screen
* "Expense title" label
* Expense amount
* Expense description
* Expense category
* Expense icon?
* Add - leads to Expenses screen

### All Expense Categories screen
* Existing categories
* Add category button - leads to create New Category Screen
* Link back to home screen

### Create New Category screen
* Could be a modal dialog
* "Create expense" category
* Category title
* Category description optional
* "Create" button - leads to category screen

### All Spending Goals screen
* Link back to home screen
* View goals
* Add goal
* Modify goals

### Modify Spending Goals screen
* "Spending goal title" label
* Spending goal amount
* Spending goal description
* Save - leads to Expenses screen
* Delete - leads to Expenses screen

### Add Spending Goals screen
* "Spending goal title" label
* Spending goal amount
* Spending goal description
* Add - leads to Expenses screen

### Spendings screen
* Spendings for each category based on month?
* Link back to home screen

## Database Model
```sql
-- TODO: add FKs
CREATE TABLE user
(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```
```sql
CREATE TABLE category
(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    description varchar(255),
    deleted varchar(1) NOT NULL, -- TODO: default not deleted
    PRIMARY KEY (id)
);
```
* one category has many expenses
* one expense has one category
* therefore category to expense is a one-to-many mapping and
* expense to category a many-to-one mapping
* the "many" side owns the reference to the "one" side          (`expense.category_id`)
```sql
CREATE TABLE expense
(
    id int NOT NULL AUTO_INCREMENT,
    category_id int NOT NULL,
    title varchar(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    -- TODO: currency
    description varchar(255),
    PRIMARY KEY (id)
);
```
```sql
CREATE TABLE spending_goal
(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    description varchar(255) NOT NULL,
    method varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
```

## API and pages (aka screens)

### Screens
| path | screen |
|---|---|
|`/login`| login |
|`/`| home |
|`/expenses` | expenses |
|`/expenses/:id` | expense |
|`/categories`| categories |
|`/categories/:id`| category |
|`/goals`| spending goals |
|`/spending`| spendings |

### API

* possible verbs
  * `GET`
  * `POST`
  * `DELETE`
  * `PUT`

#### Login
| verb | path | description |
|---|---|---|
| `POST` | `/api/login` | takes a `LoginRequest` and returns `LoginResponse` |

`LoginRequest`
```json
{
    "userName": "liz",
    "password": "geheim"
}
```
`LoginResponse`
```json
{
    "success": true
}
```

#### Expenses
| verb | path | description |
|---|---|---|
| `GET` | `/api/expense` | list all expenses and returns a `ExpenseList` |
| `GET` | `/api/expense/:id` | specific expense, returns an `Expense` |
| `POST` | `/api/expense` | add an expense, takes a `CreateExpenseRequest` returns the newly created expense `Expense` |
| `PUT` | `/api/expense/:id` | edit an expense, takes an `Expense` and returns the updated `Expense` |
| `DELETE` | `/api/expense/:id` | deletes an expense, returns nothing |

`Expense`
```json
{
    "id": 823535,
    "user": 456,
    "title": "First Expense",
    "amount": 23.34,
    "currency": "AUD",
    "category": 12,
    "description": "Long form descriptions.",
}
```
`ExpenseList`
```json
{
    "expenses": []
}
```
`CreateExpenseRequest`
```json
// TODO: add missing fields
{
    "title": "First game"
}
```

#### TODO: Categories

#### Spendings
| verb | path | description |
|---|---|---|
| `GET` | `/api/spendings` | list all spendings and returns a `SpendingList` |

`ExpenseList`
```json
{
    "spendings": []
}
```

#### Goals
| verb | path | description |
|---|---|---|
| `GET` | `/api/goal` | list all goals and returns a `GoalList` |
| `GET` | `/api/goal/:id` | TODO |
| `POST` | `/api/goal` | add a goal, takes a `CreateGoalRequest` returns the newly created expense `Goal` |
| `PUT` | `/api/goal/:id` | edit a goal, takes a `Goal` and returns the updated `Goal` |
| `DELETE` | `/api/goal/:id` | deletes a goal, returns nothing |

## Plan
|Date|description|
|---|---|
|Fr 10/01|Setup react and express. Serve a side under `localhost:8000/` saying `Hello, World!`|
| TODO | Create DB with `User`, `Expense` and `Category` |
| - | Prefill DB with a `User` and some `Category`s |
| - | Create api for `/api/expense` for `GET`, `PUT` and `POST` |
| - | Create "All Expenses Screen" |
| - | Create "Modify Expense Screen" |
| - | Create "Create Expense Screen" |
| - | Create api for `/api/category` for `GET`, `PUT` and `POST` |
| - | Create "All Category Screen" |
| - | Create "Modify Category Screen" |
| - | Create "Create Category Screen" |
| - | Create "Login Screen" |
| - | Create api for `/api/login` |
| - | Add delete apis and UI |
| - | Do all the spending goals stuff |