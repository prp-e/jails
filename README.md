# JS in Jails : A fun project for making an MVC framework in JavaScript

## What is Jails?

I always felt I missed how to code in JS and also, I always lacked a good understanding of software engineering. So I have decided to come up with this project. I try to recreate what I know from years of coding in [Ruby on Rails](https://rubyonrails.org) on this _fun_ project. 
The project can be a good basis for people who want to understand how these MVC/MVT frameworks work. This is not yet a _production ready_ framework and if you want to use it to create a serious web application, I have to say it's going to be really hard. It can be easier if you contribute to this project by adding what I listed below (and of course, is unchecked). 

## TODO List

- [x] Add a base HTML for templates/views
- [ ] Command line tool to generate models and migrations

## Documentations

### Basic CRUD example 

First, this is still a fun project and if you want to help me make it a usable tool, please take a look at [CONTRIBUTING.md](CONTRIBUTING.md) file and learn how to contribute to the project. Also using our _TODO List_ you can easily find what do we need. 

But let's assume you just want to test this project and make a simple CRUD application. Here we assume you're going to make a simple blog, and you only need a _post model_. 

- Creating the model 

In `models` folder, create a file called `Post.js` and copy this to that file:

```js
const { DataTypes } = require('sequelize');
const sequelize = require('../server');

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = Post;
```