// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Connect to DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server');

  // db.collection("Todos").insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err,result) => {
  //   if(err){
  //     return console.log("Unable to insert to do");
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  //Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: "Syafiq",
    age: 25,
    location: "Woodlands"
  }, (err,result) =>{
    if(err){
      return console.log("Unable to add user");
    }

    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
