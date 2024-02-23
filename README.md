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

- Creating the database migrations

Then, in the `migrations` folder, create a file named `20240224-create-post.js` (name can be anything you desire) and then copy this to that file:

```js
'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Posts');
    }
};
``` 

After that, by running `npx sequelize db:migrate` the table responsible for this model will be created. 

- Controllers 

In `controllers` folder, create a file named `PostController.js` and then change it like this:

```js
const Post = require('../models/Post');

const PostController = {
    // Show all posts
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll();
            res.render('posts/index', { posts });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    // Show individual post
    getPostById: async (req, res) => {
        try {
            const post = await Post.findByPk(req.params.id);
            if (!post) {
                return res.status(404).send('Post not found');
            }
            res.render('posts/show', { post });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    },

    // Show post creation form
    showPostForm: (req, res) => {
        res.render('posts/create');
    },

    // Create new post
    createPost: async (req, res) => {
        try {
            const { title, body } = req.body;
            const post = await Post.create({ title, body });
            res.redirect(`/posts/${post.id}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
};

module.exports = PostController;

```