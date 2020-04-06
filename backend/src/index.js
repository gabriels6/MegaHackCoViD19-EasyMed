const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

mongoose.connect('mongodb+srv://Admin:Omni2521@cluster0-b22uz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser:true,
    useUnifiedTopology: true
 });
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);