'use strict';
const fs   = require('fs');
const http = require('http');
const  server = http.createServer(function (request, response) {
        console.log('Hello!');
        response.end(fs.readFileSync('answer.html', 'utf8'));
    }
);
const PORT = process.env.PORT || 1234;
server.listen(PORT);
console.log('server started on PORT = ', PORT);