const app = require("express")();
const server = require("http").createServer(app);
const port = process.env.PORT || "8080";
const target = process.env.TARGET;

app.get("/", (req, res) => {
  const targetName = target ?? req.query.name;
  const name = targetName ?? " World!!"
  return res.send(`Hello ${name}. Built with buildpacks`);
});
server.listen(port, function () {
  console.log(`App listening on ${port}`);
});
