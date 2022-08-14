/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const path = require('path');
// const axios = require('axios');

const app = express();
const { PORT } = process.env || 3000;

app.use('/', express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port: ${PORT}`);
});
