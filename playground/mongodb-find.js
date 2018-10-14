// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Connect to DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({_id: new ObjectID('5bc1d7b8d82dcb087843d551')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({_id: new ObjectID('5bc1d7b8d82dcb087843d551')}).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "Syafiq"}).toArray().then((names) => {
    console.log(JSON.stringify(names,undefined,2));
  }, (err) => {
    console.log("Unable to fetch names", err);
  });

  // db.close();
});
