# react-fullstack-example
This repository is a reference for setting a complete full-stack React App.  It will assume that you are starting from no exposure to React.
## Intial Setup
To begin install the following using your command line:
* `npm install -global` will install NPM globally
* `npm i -g create-react-app` 

For the back end install the following using your command line:
* `npm i express massive dotenv`
* `npm i -g nodemon`

Go to the .gitignore file and add .env to the list
Add a folder named `server` to the main directory of your app
Go to the package.json file:
    -add "main" : "server/index.js",
    -add "proxy" : "http://localhost:3030", or whatever port you want to use for the back end

In the main directory create a file called `.env`
    -add SERVER_PORT = 3030, or whatever port you want to use for the back end

