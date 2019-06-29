const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require("cors");

app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
  const db = client.db('spaceApp');
  const spaceAppCollection = db.collection('spaceApp');
  const spaceRouter = createRouter(spaceAppCollection);
  app.use('/api/space', spaceRouter);
  })
  .catch(console.error);


// app.get('/', function(req, res) {
//   res.send({message: "Hello World"});
// });



app.listen(3000, function(){
  console.log(`listening on port ${ this.address(). port}`);
});
