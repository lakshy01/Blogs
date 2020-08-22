
require('./models/db');

const express = require('express');
const app = express();
const blogRoute = require('./routes/blog');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/blog', blogRoute);

app.listen(8080, () => console.log("Server started"));