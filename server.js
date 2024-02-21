const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite'
});

const app = express();
const PORT = process.env.PORT || 8000;