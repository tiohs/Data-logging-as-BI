const express = require('express');
const routes = require('./src/routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.static('./uploads'));
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/Cartao', {useNewUrlParser: true, useUnifiedTopology: true},);

app.listen(3000, ()=> console.log('Estou on na porta 3000'));