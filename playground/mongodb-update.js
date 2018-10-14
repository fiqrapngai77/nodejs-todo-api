// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Connect to DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID('5bc2f09cb76169ab6fac3661')},
  //   {$set:{completed: true}},
  //   {returnOriginal: false}
  // ).then((result) => {
  //   console.log(result);
  // })

  //----------Challenge------

  //Update name and increment age
  db.collection('Users').findOneAndUpdate(
    {_id: new ObjectID('5bc1d87035566452345ebec3')},
    {$set:{name: "Syafiq"}, $inc:{age: 1}},
    {returnOriginal: false}
  ).then((result) => {
    console.log(result);
  })
  // db.close();
});
