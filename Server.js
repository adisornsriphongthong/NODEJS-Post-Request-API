// Server.js
const express = require('express');
const app = express();

const port = 3000;
app.listen(port, (err) => {
    if (err) throw err;
    console.log('The server is running on port ' + port);
});

module.exports = {
    app,
    express,
};
