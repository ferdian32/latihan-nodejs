const http = require("http");
const { buffer } = require("stream/consumers");

const HttpListener = (request, response) => {
  const { method, url } = request;
  let body = [];
  request.on("data", (chunk) => {
    body.push(chunk);
  });
  request.on("end", () => {
    body = Buffer.concat(body).toString();
  });
  if (url === "/") {
    if (method === "GET") {
      console.log("<h1>Ini adalah halaman home page</h1>");
    } else {
      response.end(
        `<h1>Halaman tidak dapat diakses dengan method ${method}</h1>`
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.end("<h1>Ini adalah halaman about page</h1>");
    } else if (method === "POST") {
      let body = [];
      request.on("data", (chunk) => {
        body.push(chunk);
      });
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`<h1>Halo ${name}</h1>`);
      });
      response.end("<h1>Halaman ini merupakan halaman about</h1>");
    } else {
      response.end(`tidak dapat ditemukan dengan ${method}`);
    }
  } else {
    response.end("<h1>Halaman Tidak Ditemukan</h1>");
  }
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  //   response.end("<h1>Halo HTTP Server</h1>");
};

const server = http.createServer(HttpListener);
const port = 5000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`Server Berjalan pada ${host}:${port}`);
});
console.log("halo kita akan membuat server");
