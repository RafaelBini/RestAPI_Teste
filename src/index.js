const dotenv = require('dotenv').config();
const express = require('express');
var cors = require('cors');

const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//app.use(cors({origin: 'http://localhost:8888'}));

app.use(require('./routes/index'));

app.listen(process.env.PORT || 2000);