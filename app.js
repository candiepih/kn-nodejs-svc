const app = require("express")();
const server = require("http").createServer(app);
const port = process.env.PORT || "8080";

app.get("/", (req, res) => {
  const name = req.query.name ?? "World!!!"
  return res.send(`Hello ${name}. Test pipeline that uses buildpacks`);
});
server.listen(port, function () {
  console.log(`App listening on ${port}`);
});
