let express = require("express");
let router = express.Router();

module.exports = function(app) {
    app.get('/api/:company/:sirene', require('./routes/api'));
}