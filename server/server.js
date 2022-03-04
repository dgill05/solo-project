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

app.post("/api", controller.addTask, (req, res) => {
  console.log(req.body.sentTask)
  return res.status(200).json(req.body)
})

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
  app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;


// "dev": "NODE_ENV=development webpack serve --open"