const http = require("http");
const data = require("./data");

const port = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "applicationjson" });
  const result = res.write(JSON.stringify(data));

  res.end();
});

server.listen(port);
