const express = require('express');

const app = express();

app.listen(3000, function(){
console.log("API está on!");
});

module.exports = app;