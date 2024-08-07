const httpServer = require("http-server");
const server = httpServer.createServer({
  root: "./", // Путь к корневой папке вашего сайта
});

server.listen(4321, () => {
  console.log("Server is running on http://localhost:4321");
});
