// App.js
const server = require('./Server.js');
const bodyparser = require('body-parser');

server.app.use(bodyparser.urlencoded({
    extended: true
}));

const index = server.app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.app.post('/sign', (req, res) => {// get value form information of user by
    var Id = req.body['Id'];
    var First_Name = req.body['First-Name'];
    var Last_Name = req.body['Last-Name'];

    res.sendFile(__dirname + '/index.html');
    console.log(`Id: ${Id}\nFirst-Name: ${First_Name}\nLast-Name: ${Last_Name}`);

    
})


