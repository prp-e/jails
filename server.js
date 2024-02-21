const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite'
});

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs'); // Using EJS as the template engine
app.set('views', path.join(__dirname, 'views')); // Path to views folder

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes'));

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });