const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');
require('dotenv').config();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

const app = express();



//massive connection
massive(CONNECTION_STRING).then((db) => {
    console.log('connected to db');
    app.set('db', db);
});

/////////////////Middleware/////////////////////
app.use(bodyParser.json());


///////////Endpoints/////////////////////////



/////////////Check server connection///////////
app.listen(SERVER_PORT, () => {
    console.log(`Listening to port ${SERVER_PORT}`)
})