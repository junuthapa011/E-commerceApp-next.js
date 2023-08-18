const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("jb.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

server.post("/users", (req, res) => {
  const user = req.body;

  const users = router.db.get("users");
  user.id = users.length + 1;

  users.push(user);
  router.db.set("users", users).write();

  res.status(201).json(user);
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON server is running");
});
