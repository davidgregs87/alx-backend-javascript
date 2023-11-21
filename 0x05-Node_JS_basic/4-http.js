const http = require('http');

const server = http.createServer((request, resp) => {
  resp.write('Hello Holberton School!');
  resp.end();
});

const app = server.listen(1245);

module.exports = app;
