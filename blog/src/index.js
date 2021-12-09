const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');


// Using get static file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));


// Template engine
app.engine('.hbs', engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');

// Set path
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/search', (req, res) => {
  res.render('search');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})