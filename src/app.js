const express = require('express');
const path = require('path');
const articlesRouter = require('./routes/articles');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'..', 'public')));
app.use('/', articlesRouter);

module.exports = app;