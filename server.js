const express = require('express');
const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.sqlite'
});

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes'));

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

 app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
});
    
module.exports = sequelize; 