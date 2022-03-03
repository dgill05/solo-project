const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://gilldalj:Sukha416@cluster0.hs1m6.mongodb.net/Test1?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Test1'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  const nameSchema = new Schema({
    name: String,
  })

  const test = mongoose.model('test', nameSchema);

  module.exports = {
    test
  }