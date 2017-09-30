const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 1337


app.use(cors());
app.listen(port, () => {console.log(`Server is listening on port ${port}...`)})
