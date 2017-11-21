//Requires
const express = require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');

//Static Routes
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev')) // logging

//Main App Route
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

//Run Server
const port = 1337;
app.listen(process.env.PORT || port, () => console.log(chalk.blue(`Listening intently on port ${port}`)));
