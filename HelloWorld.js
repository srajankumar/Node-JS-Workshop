const http = require("http");

http
  .createServer(function (req, req) {
    res.write("Hello World!");
    res.end();
  })
  .listen(3000);
