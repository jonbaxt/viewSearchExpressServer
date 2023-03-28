const express = require('express');
require('dotenv').config();
const con = require('./controller');

const app = express();

const PORT = 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/getMovie/:search', con.fetchMovies);

app.listen(PORT, ()=> console.log(`Connected on port ${PORT}`));