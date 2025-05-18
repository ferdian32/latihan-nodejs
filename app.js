const http  = require('http');
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const memoryInformation = process.memoryUsage();
const firstName= process.argv[2];
const lastName = process.argv[3];

const coffee = require('./cofee');
console.log(coffee);
console.log(`Hello : ${firstName} ${lastName}`);
console.log(memoryInformation);


const requestHandler = (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('welcome to my api \n');
}
const server = http.createServer(requestHandler);
server.listen(port,hostname,() => {
    console.log(`Server Berjalan pada http://${hostname}:${port}`);
});