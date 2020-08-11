const express = require('express');
const server = express();
const path = require('path');

server.use(express.static(path.resolve(__dirname, './dist')));

server.use('/', (req, res) => {
    console.log('req', req.url);
    res.sendFile(path.resolve(__dirname, './../dist/index.html'));
});

const port = 3333;
server.listen(port, () => {
    console.log('app is running on ' + port);
});