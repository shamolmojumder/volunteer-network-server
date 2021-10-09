const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5055;


app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
})




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4xoys.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  console.log("err",err);
  const eventCollection = client.db("volunteer").collection("events");
  // perform actions on the collection object
  console.log("database connection successfully");
  // client.close();
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})