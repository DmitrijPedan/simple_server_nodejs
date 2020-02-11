const router = require('./router');

console.log('App was loaded...');

const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    console.log(req.url)
    router(req, res);
}).listen(PORT);