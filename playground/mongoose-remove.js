const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a7b60ab1a333a17d7c70334'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5a7b60ab1a333a17d7c70334').then((todo) => {
  console.log(todo);
});
