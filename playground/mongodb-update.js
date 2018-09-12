// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b985643512e80ca4a52d4e1')},
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //     }).then((result) => {
  //        console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b9846c126133d5b2076f07b')},
    {
      $set: {
        name: 'Brody',
      },
      $inc: {
        age: 1
      }
    },
      {
      returnOriginal: false
    }).then((result) => {
      console.log(result)
    })
  // db.close();
})
