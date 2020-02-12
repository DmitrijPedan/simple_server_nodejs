const router = require('./router');
console.log('Server is started...');

const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    router(req, res);
}).listen(PORT);