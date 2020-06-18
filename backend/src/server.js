require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(2222);