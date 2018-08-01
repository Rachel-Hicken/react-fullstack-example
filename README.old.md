# react-fullstack-example
This repository is a reference for setting a complete full-stack React App.  It will assume that you are starting with nothing setup for React or the database.
# Intial Setup
To begin install the following using your command line:
* `npm install -global` will install NPM globally
* `npm i -g create-react-app` will make create-react-app available globally
Go to `https://nodejs.org/en/` to download Node JS.  Download the option that is 'Recommended For Most Users'

Then go to the directory where you want to create your new app:
* `create-react-app your-app-name-here`, note that if you want the new app to take the name of the directory you are adding it to, you can use a `.` in place of a name.

For the back end install the following using your command line:
* `npm i express massive dotenv body-parser`
* `npm i -g nodemon`, you'll only need to install this on your first project, then it will be available for future projects when called

Go to the .gitignore file and add `.env` to the list.

Add a folder named `server` to the main directory of your app.
Add a file named `index.js` in the server folder.
Add a file named `controller.js` in the server folder.
Add a folder named `db`, when we set up massive it will look specifically for the 'db' folder.

Go to the package.json file:

    -add "main" : "server/index.js",

    -add "proxy" : "http://localhost:3030", or whatever port you want to use for the back end

In the main directory create a file called `.env`:

    -add SERVER_PORT = 3030, or whatever port you want to use for the back end

For the front end we will need axios to be able to make requests to the back end, so install the following:
* `npm i axios`

# Setup Index.js on the Server
Node JS is not yet ES6 compatible so the syntax will be a little different from the React JS portion.

Require the following:

const express = require('express'),
bodyParser = require('body-parser'),
massive = require('massive');

require('dotenv').config();

# Setup App.js
Remove import logo
remove everything between outer div