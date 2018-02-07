let mongoose = require('mongoose');

const REMOTE_MONGO = 'mongodb://admin:admin@ds012058.mlab.com:12058/node-todo-app';
const LOCAL_MONGO = process.env.MONGO_URI;//'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;
console.log('MONGO_URI: ', MONGO_URI);

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to Mongo instance.')
}, (err) => {
  console.log('Error connecting to Mongo instance: ', err);
});

module.exports = {mongoose};