// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//   console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Virginia'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((results) => {
//   console.log(results)
// })

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result)
// })

db.collection('Users').findOneAndDelete({_id: new ObjectID('5b980ec23dfe7b6660ef21b4')}).then((result) => {
  console.log(result);
});

  // db.close();
});
