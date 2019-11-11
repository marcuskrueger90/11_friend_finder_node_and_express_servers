var express = require('express');
var path = require('path');
var nodemon = require('nodemon');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`APP listening on PORT: http://localhost:${PORT}`)
});