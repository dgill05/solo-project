const models = require("../model/myModel");

const controller = {};

controller.getData = (req, res, next) => {
  // console.log("get data: ")
  // console.log(models)
  models.test.find({})
  .then((data) => {
    // console.log(data[0].name);
    res.locals.name = data[0].name;
    // console.log(res.locals)
    return next();
  })
}

controller.addTask = (req, res, next) => {
  models.test.create({
    name: req.body.sentTask
  })
  .then(()=> next())
    .catch(err => {
      console.log('HERE');
      return next({error: err});
    }); 
}

module.exports = controller;