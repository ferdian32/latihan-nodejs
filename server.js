const http = require("http");

const HttpListener = (request, response) => {
  const { method } = request;
  if (method === "GET") {
    console.log("<h1>Hai</h1>");
  }
  if (method === "POST") {
    console.log("<h1>Halo</h1>");
  }
  if (method === "PUT") {
    console.log("<h1>Bonjour!</h1>");
  }
  if (method === "DELETE") {
    response.end("<h1>Salam</h1>");
  }
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  response.end("<h1>Halo HTTP Server</h1>");
};

const server = http.createServer(HttpListener);
const port = 3000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`Server Berjalan pada ${host}:${port}`);
});
console.log("halo kita akan membuat server");
