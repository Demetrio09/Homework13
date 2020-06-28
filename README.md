# Node Express Handlebars

## Homework week 13

* [Deployed Application](https://rocky-gorge-43164.herokuapp.com/)

### Overview

In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!).

#### Directory structure

All the recommended files and directories is looking like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       └── js
│           └── burger.js
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
    │   └── main.handlebars
    └── partials
        └── burgers
            └── burger-block.handlebars
```