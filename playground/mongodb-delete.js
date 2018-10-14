// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Connect to DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log("Unable to delete any records", err);
  // });

  //deleteOne - deletes first document found
  // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log("Unable to delete any records", err);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // })


  //--------------------Challenge------------------------//

  //Delete all duplicates
  // db.collection('Users').deleteMany({name: "Syafiq"}).then((result) =>{
  //   console.log(result);
  // })

  //Delete one
  db.collection('Users').deleteOne({_id: new ObjectID('5bc2e5644dea1d09e0778094')}).then((result) => {
    console.log(result);
  })

  // db.close();
});
