const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');
require('dotenv').config();

const pc = require('./controller');

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
app.get('/pets', pc.view_pets);
app.post('/pet/add', pc.add_pet);
app.put('/pet/update/:id', pc.update_pet);
app.delete('/pet/delete/:id', pc.delete_pet);

/////////////Check server connection///////////
app.listen(SERVER_PORT, () => {
    console.log(`Listening to port ${SERVER_PORT}`)
})