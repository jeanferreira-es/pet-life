const express = require('express');
const routes = require('./src/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000);