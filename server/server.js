const path = require("path");
const express = require("express");
const controller = require("./controllers/controller");
const app = express();
const PORT = 3000;


/**
 * handle parsing request body
 */
  app.use(express.json());

  // statically serve everything in the dist folder on the route '/dist'
  // app.use('/dist', express.static(path.join(__dirname, '../dist')));

//   app.get("/", (req, res) =>
//   res.status(200).sendFile(path.join(__dirname, "../client/index.html"))
// );


app.get("/api", controller.getData, (req, res) => {
  console.log(res.locals)
  return res.status(200).send('Hello World')
})

app.post("/api", (req, res) => {
  console.log(req.body)
  return res.status(200).json("test2")
})
/**
 * start server
 */
  app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;


// "dev": "NODE_ENV=development webpack serve --open"