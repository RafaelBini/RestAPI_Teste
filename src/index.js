const dotenv = require('dotenv').config();
const express = require('express');
var cors = require('cors');

const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//app.use(cors({origin: 'http://201.59.138.54'})); // FUNCIONA DE VERDADE!!!

app.use(require('./routes/index'));

app.listen(process.env.PORT || 2000);