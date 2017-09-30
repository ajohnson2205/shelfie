const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const controller = require('./controller.js');

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.use(bodyParser.json());
app.use(cors());

app.get('/api/everything', controller.getAllItems)

const port = process.env.PORT || 1337
app.listen(port, () => {console.log(`Server is listening on port ${port}...`)})
